import React, { Component } from 'react';
import {FoodContext} from '../context';
import Loading from './loading';
import Title from './Title';
import Menus from './Menu';

export default class featuredFoods extends Component {
    static contextType = FoodContext;
  render() {
      let { loading, featuredFoods: menus } = this.context;
      menus = menus.map(menu => {
          return <Menus key={menu.id} menu = {menu} />
      })
    return (
        <section className='featured-foods'>
            <Title title='featured foods' />
            <div className='featured-foods-center'>
                {loading ?<Loading /> : menus }
            </div>
        </section>
    )
  }
}
