import React from 'react';
import logo from '../emfas_logo.png';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import './nav.css';
import { BrowserRouter, Link } from 'react-router-dom';

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
          <Link to="/"> Home</Link>
          <Link to="/donate"> Donate</Link>
          <Link to="/join">Join the Squad</Link>
          <Link to="/officers"> Officers</Link>

          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes/>
          </button>
        
        </nav>
      
      </header>
  
  )
}