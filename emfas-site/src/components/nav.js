import React from 'react';
import logo from '../images/emfas_logo.png';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import '../styles/nav.css';
import {Link} from "react-router-dom"


export default function Navbar() {
  const navRef = useRef();
  
  const showNav = () => {
    
      navRef.current.classList.toggle("responsive_nav");
      
  }
  return (
    
    <header className="nav" id="nav">
     
      <img src={logo} className="nav-logo"/> 

      <div className="rect1">&nbsp;</div>
      <div className="rect2">&nbsp;</div>
      <div className="rect3">&nbsp;</div>

 
      <button className="nav-btn nav-bars" onClick={showNav}>
          <FaBars/>
      </button>

      <nav className="links" ref={navRef}>  
        <Link to="/" onClick={showNav}> Home</Link>
        <Link to="/Donate" onClick={showNav}> Donate</Link>
        <Link to="/Join" onClick={showNav}>Join the Squad</Link>
        <Link to="/Officers" onClick={showNav}> Officers</Link>


      <button className="nav-btn nav-close-btn" onClick={showNav}>
        <FaTimes/>
      </button>
      
      </nav>
    </header>
  )
}