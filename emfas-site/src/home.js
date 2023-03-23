import React from 'react';
import './home.css';
import truck from './truck.png';

export default function Home() {

    return(
        
     
        <div className="home">
      
            <div className="title">
                <h2>Englistown Manalapan</h2>
                <h1>First Aid Squad</h1>
                <img src={truck} className="truck-img"/>
            </div>
      


        </div>

            
     
    );

};