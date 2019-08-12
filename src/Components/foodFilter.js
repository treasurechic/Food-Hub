import React,{ Component } from 'react';
import { FoodContext } from '../context';
import Title from '../Components/Title';

const getUnique = (items, value)=>{
  return [...new Set(items.map(item => item[value]))];
};

export default class foodFilter extends Component {
  static contextType = FoodContext;
  render(){
    let menu = this.props;
    const context = this.context;
    const {
      handleChange,
      type,
      price,
      minPrice,
      maxPrice,
      champagne,
      creamy,
      capacity 
    } = context;

    menu =  Array.from(this.props.menu);
    let types = getUnique(menu, 'type');
    types = ['All', ...types];


    let people = getUnique(menu, 'capacity');
    people = [1, ...people];

  return (
    <section className="filter-container">
      <Title title ="Search Menu List" />
      <form className="filter-form">

        {/* start of type */}
        <div className="form-group">
          <label htmlFor="type">Food Type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
           { types.map((item,index) =>{
            return <option value={item} key={index}>{item}</option>
           })}
          </select>
        </div>
        {/* End of type */}

        {/* start of capacity */}
        <div className="form-group">
          <label htmlFor="capacity">For</label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
           { people.map((item,index) =>{
            return <option value={item} key={index}>{item}</option>
           })}
          </select>
        </div>
        {/* End of capacity */}

        {/* start of price */}
        <div className="form-group">
          <label htmlFor="price"> Food price ‎₦{price}</label>
          <input type="range" name ='price' min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
        </div>
        {/* End of price */}

        {/* start of creamy and champagne */}
        <div className="form-group">
          <div className='single-extra'>
            <input type='checkbox' name='champagne' id='champagne' checked={champagne} onChange={handleChange} />
            <label htmlFor='champagne'>Free Champagne</label>
          </div>
       
          <div className='single-extra'>
            <input type='checkbox' name='creamy' id='creamy' checked={creamy} onChange={handleChange} />
            <label htmlFor='creamy'>Creamy</label>
          </div>
        </div>

        {/* End of creamy and champagne */}
      </form>
    </section>
  )
}
}
