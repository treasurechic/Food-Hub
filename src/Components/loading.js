import React from 'react';
import Loader from '../img/gif/loading-arrow.gif';

export default function loading() {
  return (
    <div>
        <h2>Food menu is loading as you can see</h2>
      <img src={Loader} alt=''/>
    </div>
  );
}
