import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './NavbarAndFooter/Navbar';
import { Footer } from './NavbarAndFooter/Footer';
import { Homepage } from './Homepage';

export const  App = ()=> {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      <Homepage/>
     
    </div>
  );
}

