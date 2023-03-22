import React from 'react';
import logo from '../emfas_logo.png';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import './nav.css';

export default function Navbar() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    
    <header className="nav">
     
      <img src={logo} className="nav-logo"/> 

      <div className="rect1">&nbsp;</div>
      <div className="rect2">&nbsp;</div>
      <div className="rect3">&nbsp;</div>
  
      <button className="nav-btn nav-bars" onClick={showNav}>
          <FaBars/>
      </button>
      
      <nav className="links" ref={navRef}>  
        <a href="/#"> Home</a>
        <a href="/#"> Donate</a>
        <a href="/#">Join the Squad</a>
        <a href="/#"> Officers</a>

        <button className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes/>
        </button>
       
      </nav>
     
        
    </header>
  )
}