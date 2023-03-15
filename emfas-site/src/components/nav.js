import React from 'react';
import logo from '../emfas_logo.png';
import './nav.css';

export default function Navbar() {
  return (
    
    <nav className="nav">
     
      <img src={logo} className="Nav-logo"/> 
      <div className="rect1">&nbsp;</div>
      <div className="rect2">&nbsp;</div>
      <div className="rect3">&nbsp;</div>
      <ul className="links">  
        <a href="/Home"> Home</a>
        <a href="/Donate"> Donate</a>
        <a href="/Join">Join the Squad</a>
        <a href="/Officers"> Officers</a>
      </ul>
        
    </nav>
  )
}