import React from 'react';
import logo from '../images/emfas_logo.png';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import '../styles/nav.css';
import {Link} from "react-router-dom"


export default function Navbar() {
  const navRef = useRef();
  
  const showNav = () => {
    let show = true;
    if(show===true){
      navRef.current.classList.toggle("responsive_nav");
      show = false;
    }
 
  }

  const hideNav = () => {
    navRef.current.classList.toggle("hide_nav");
    navRef.current.classList.remove("responsive_nav");
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
        <Link to="/njitDev" onClick={showNav}> Home</Link>
        <Link to="/Donate" onClick={showNav}> Donate</Link>
        <Link to="/Join" onClick={showNav}>Join the Squad</Link>
        <Link to="/Officers" onClick={showNav}> Officers</Link>


      <button className="nav-btn nav-close-btn" onClick={hideNav}>
        <FaTimes/>
      </button>
      
      </nav>
    </header>
  )
}