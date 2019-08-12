import React from 'react';
import FoodFilter from './foodFilter';
import FoodList from './foodList';
import {withFoodConsumer} from '../context';
import Loading from './loading';

function FoodContainer({context}){
  const {loading, sortedFoods, menus} = context;
  if (loading){
   return  <Loading/>
  }
  return(
    <div>
      <FoodFilter menu ={menus}/>
      <FoodList menu= {sortedFoods}/>
    </div>
  )
}

export default withFoodConsumer(FoodContainer);

// import React from 'react';
// import FoodFilter from './foodFilter';
// import FoodList from './foodList';
// import {FoodConsumer} from '../context';
// import Loading from './loading';

// export default function foodContainer() {
//   return (
//     <FoodConsumer>
//       {
//         (value)=>{
//           const {loading,sortedFoods,menus} = value;
//           if (loading){
//             return<Loading/>
//           }
//           return(
//           <div>
//             <FoodFilter menus = {menus} />
//             <FoodList menus = {sortedFoods}/>
//           </div>
//           )
         
//         }
//       }

//     </FoodConsumer>

    
//   );
// }
