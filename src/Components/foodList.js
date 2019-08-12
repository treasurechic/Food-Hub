import React from 'react';
import Menus from './Menu';

export default function foodList({menu}) {
  if(menu.length === 0){
    return (
      <div className="empty-search">
        <h3>No Food match your search</h3>
      </div> 
    )
  }
  return (
    <section className='menulist'>
      <div className='foodlist-center'>
        {
          menu.map(item =>{
          return <Menus key={item.id} menu={item} />
        })
        }
      </div>
    </section>
  );
}
