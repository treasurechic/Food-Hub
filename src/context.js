import React, { Component } from 'react';
// import items from './data';
import Client from './contentful';


const FoodContext = React.createContext();

class FoodProvider extends Component {
  state = {
    menus:[],
    sortedFoods:[],
    featuredFoods:[],
    loading:true,
    type:'All',
    price:0,
    minPrice:0,
    maxPrice:0,
    champagne:false,
    creamy:false,
    capacity:1
  };

  getData = async() =>{
    try{
      let response = await Client.getEntries({
        content_type: 'name',
        order: 'fields.price'
      });

    let menus= this.formatData(response.items);console.log(menus);
    let featuredFoods = menus.filter(menu => menu.featured === true);
    let maxPrice = Math.max(...menus.map(item =>{
      return item.price
    }));
    
    this.setState({
      menus,
      featuredFoods,
      sortedFoods:menus,
      loading:false,
      price:maxPrice,
      maxPrice
    })
      
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getData();
  }

  formatData(items){
    let tempItems = items.map(item=>{
      let id = item.sys.id
      let images = item.fields.images.map(image=>image.fields.file.url);

      let menu = {...item.fields,images,id}
      return menu;
    });
    return tempItems
  }
  getMenu = (slug) =>{
    let tempMenus =[...this.state.menus]
    const menu = tempMenus.find(menu => menu.slug === slug)
    return menu
  };
  handleChange = e =>{
    const target = e.target;
    const name = target.name;
    const value = target.type ==='checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    }, this.filterFood)
  }

  filterFood = () =>{
    let{
      menus,
      type,
      price,
      champagne,
      creamy,
      capacity
    } = this.state

    let tempMenus = [...menus];

    capacity = parseInt(capacity);
    price = parseInt(price);

    if(type !== 'All'){
      tempMenus = tempMenus.filter(menu => menu.type === type);
    }
    if (capacity !== 1){
      tempMenus = tempMenus.filter(menu=> menu.capacity >= capacity);
    };
    tempMenus =tempMenus.filter(menu => menu.price <= price);

    if (creamy){
    tempMenus = tempMenus.filter(menu => menu.creamy===true);
    }
    if (champagne){
    tempMenus = tempMenus.filter(menu => menu.champagne===true);
    }

    this.setState({
      sortedFoods:tempMenus
    });
 }
  render() {
    return (
        <FoodContext.Provider value={{...this.state, getMenu: this.getMenu, handleChange: this.handleChange }}>
            {this.props.children}
        </FoodContext.Provider>
    );
  }
}

const FoodConsumer = FoodContext.Consumer;

export function withFoodConsumer (Component){
  return function consumerWrapper(props){
    return <FoodConsumer>
      {value => <Component {...props} context = {value}/>}
    </FoodConsumer>
  }
}

export{FoodProvider, FoodConsumer, FoodContext};