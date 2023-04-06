import React, { useState, useEffect } from 'react'
import { json } from 'react-router-dom';
import "./weather.css";

export default function WeatherAlert() {
    const [weatherItems, initWeather] = useState([])
    let headline; let instruction;
    const fetchData = async () => {
    //const response = await fetch('https://api.weather.gov/alerts/active/zone/MIZ010')
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

    if(weatherItems.length !== 0){ 
        //console.log(weatherItems.features.length);
        if(weatherItems.features.length !== 0){
            console.log(weatherItems.features[0].properties.headline)

            headline = weatherItems.features[0].properties.headline;
            instruction = weatherItems.features[0].properties.instruction;

            return (
      
                <div className="weatherAlert">
                    <div className="w-info">
                    
                        <div className="headline">
                            {headline}
                        </div>
                        <div className="description">
                            {instruction}
                        </div>
                        
                    </div>
                </div>
        
            );
        }
    }

}
