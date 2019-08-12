import React from 'react';
import './App.css';

import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';
import Error from './pages/Error';
import AfricanDelicacy from './pages/AfricanDelicacy';
import Navbar from "./Components/Navbar";

import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <> 
    <Navbar />
    <Switch >
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/FoodMenu/" component = {FoodMenu}/>
      <Route exact path = "/FoodMenu/:slug" component = {AfricanDelicacy}/>
      <Route component = {Error}/>

    </Switch>
    </>
  );
}

export default App;
