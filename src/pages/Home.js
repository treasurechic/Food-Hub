import React, {Component } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import {Link} from "react-router-dom";
import Services from "../Components/Services";
import FeaturedFoods from '../Components/featuredFoods';

export default class Home extends Component {
    render() {
        return(
        <>
        <Hero>
        <Banner title="yummy delicacy"  subtitle="mouth watering dish at an affordable price">
            <Link to="/foodMenu" className="btn-primary">
                food menus
            </Link>
        </Banner>
        </Hero>
        <Services />
        <FeaturedFoods />
        </>
        );
    }
}
