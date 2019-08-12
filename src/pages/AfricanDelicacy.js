import React, {Component } from "react";
import defaultImg from '../img/solid-food1.jpg';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {FoodContext} from '../context';
import StyledHero from "../Components/styledHero"

export default class AfricanDelicacy extends
Component {
    constructor(props){
        super(props)
        this.state ={
            slug:this.props.match.params.slug, defaultImg
        };
    }
    static contextType = FoodContext;
    render() {
        const {getMenu} = this.context;
        const menu = getMenu(this.state.slug);
        if(!menu){
            return( <div className="error">
                <h3>no such menu....</h3>
                <Link to="/foodMenu" className="btn-primary">
                    Food Menu
                </Link>
            </div> 
            );      
            }
            const {name,description,capacity,price,extras,creamy,champagne,images} = menu
            const [firstImg, ...restOfImg] = images;
        return(
        <>
            <StyledHero img={firstImg}>
                <Banner title={`${name} menu`}>
                    <Link to="/foodMenu" className="btn-primary">
                        Menu
                    </Link>
                </Banner>
            </StyledHero>
            <section className='delicacy'>
                <div className="delicacy-images">
                    {restOfImg.map((item,index)=>{
                       return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="delicacy-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>capacity:{
                            capacity > 1? `${capacity} people` : `${capacity}person`
                            } 
                        </h6>
                        <h6>
                        {creamy? 'yummy creamy': 'No Cream'}
                        </h6>
                        <h6>
                            {champagne? 'Free Champagne included' : false}
                        </h6>
                    </article>
                </div>
            </section>
            <section className='delicacy-extras'>
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) =>{
                        return<li key={index}>
                            {item}
                        </li>
                    })}
                </ul>
            </section>
        </>
        );
    }
}
