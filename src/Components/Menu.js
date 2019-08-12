import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../img/hub2.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
const Menus = memo(({ menu }) => {
  const { name, slug, images, price } = menu;
  // console.log(name);
  return (
    <article className="menu">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single menu" />
        <div className="price-top">
          <h6>₦{price}</h6>
          <p>per Dish</p>
        </div>
        <Link to={`/FoodMenu/${slug}`} className="btn-primary menu-link">
          features
        </Link>
      </div>
      <p className="menu-info">{name}</p>
    </article>
  );
});

Menus.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Menus;


