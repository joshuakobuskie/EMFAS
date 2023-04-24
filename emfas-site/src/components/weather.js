import React, { useState, useEffect } from 'react'
import "../styles/weather.css";
import {FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";


export default function WeatherAlert() {
    const [weatherItems, initWeather] = useState([])
    let headline; let instruction;
    const fetchData = async () => {
    //const response = await fetch('https://api.weather.gov/alerts/active/zone/PAZ014')
    const response = await fetch('https://api.weather.gov/alerts/active/zone/NJZ013')
    if (!response.ok) {
        throw new Error('Data coud not be fetched!')
    } else {
        return response.json()
    }
    }
    useEffect(() => {
    fetchData()
        .then((res) => {
        initWeather(res)
        })
        .catch((e) => {
        console.log(e.message)
        })
    }, [])

    
    const closeAlert = (e) => {
       let alert = document.getElementsByClassName("weatherAlert");
       alert[0].remove();
    }
    if(weatherItems.length !== 0){ 
        //console.log(weatherItems.features.length);
        if(weatherItems.features.length !== 0){
            //console.log(weatherItems.features[0].properties.headline)
            headline = weatherItems.features[0].properties.headline;
            instruction = weatherItems.features[0].properties.instruction;

            return (
      
                <div className="weatherAlert">
                    <div className="w-info">
                   
                        <div className="headline">
                            <p>{headline}</p>
                            <button id="close-btn" onClick={closeAlert}>   
                                <FaTimes/>
                            </button>
                        </div>
                        <div className="description">
                            {instruction}
                        </div>

                        <div className="more-details">
                            <a href="https://alerts.weather.gov/cap/wwaatmget.php?x=NJZ013&y=1" target="_blank">Click here for more details</a>
                        </div>

                    </div>
                    
                </div>
        
            );
        }
    }

}
