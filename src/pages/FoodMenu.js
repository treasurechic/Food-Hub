import React, {Component } from "react";
// import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Hub2 from '../img/hub2.jpg';
import {Link} from "react-router-dom";
import StyledHero from "../Components/styledHero"
import FoodContainer from '../Components/foodContainer';

export default class foodMenu extends Component {
    render() {
        return(
            <>
        <StyledHero img={Hub2}>
            <Banner title="yummy delicacy"  subtitle="mouth watering dish at an affordable price">
                <Link to="/" className="btn btn-primary">
                    Home
                </Link>
            </Banner>
        </StyledHero>
        
        <FoodContainer/>
        </>
        );
    }
}
