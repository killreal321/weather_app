import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import CityInfo from "./CityInfo.jsx";
import { LineLoop } from "three";

function Example() {

    const [getData, setGetData] = useState([])
    const [city, getCity] = useState('')
    const [cityName, getCityName] = useState('')
    const [curCity, setCurCity] = useState([])
    const [hide, setHide] = useState(false)
    const inputRef = useRef(null)
    
    const API_KEY = '0c5542172a333db51244cbaf1eeb0088'

    let days = [
        'Неділя',
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        "П'ятниця",
        'Субота'
      ];

    useEffect(() => {
        if(city){
            function getDataInfo() { 
                axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`)
                .then(result => setGetData(result.data))
                .catch(error => console.log(error))
            }
            getDataInfo()
        };
    },[city])


    function selectCity(lon, lat, name) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(resolve => setCurCity(resolve.data))
        getCityName(name)
        setHide(() => !false)
    }


    return (
        <>  
            <div className="wrapper">
                <div className="_container">
                    <div className="day-time">{days[new Date().getDay()] + ', ' + new Date().getHours() + ':' + new Date().getMinutes()}</div>
                    <div className="input-container">
                        <input type="text" className="inputCity" placeholder="Search places" ref={inputRef} onChange={() => {getCity(inputRef.current.value); setHide(() => !true)}}/>
                    </div>
                    <div className={`container-outcity  ${hide ? 'hide' : ''}`}>
                        {city.length != 0 
                            ? 
                            <div className="outCity">{getData.map(data => 
                                    <div className="outCity-item" onClick={()=> selectCity(data.lon, data.lat, data.name)} key={data.lon}>
                                        <p>{data.name}, {data.country}</p>
                                    </div>)}
                            </div> 
                            : null
                        }
                    </div>
                    <CityInfo curCity={curCity} name={cityName}/>
                </div>
            </div>
        </>
    )
}

export default Example;