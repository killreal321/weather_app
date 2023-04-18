import React, { useEffect, useState } from "react";
import '/css/cityinfo.css'

function CityInfo({curCity, name}) {

    const [image, setImage] = useState('')

    useEffect(()=> {
        if(curCity.length != 0){
            switch (curCity.weather[0].main) {
                case 'Clouds':
                    setImage('cloudy.png');
                    break;
                case 'Snow':
                    setImage('Snow.png');
                    break;
                case 'Clear':
                    setImage('clear.png');
                    break;
                case 'Rain':
                    setImage('rain.png');
                    break;
            }
        }
    }, [curCity])

    if(curCity.length == 0){
        return <div>Не вибрано місто</div>
    }

    return (
        <>
            <div className="wrapper-item">
                <h3>Погода на сьогодні</h3>
                <div className="weather-info">
                    <div className="big-main-block">
                        <h3 className="city_name">{name}</h3>
                        <img src={`../images/${image}`} alt="" />
                        <div className="current-temp">{curCity.main.temp}&deg;C</div>
                        <h1>{curCity.weather[0].main}</h1>

                        <div className="parameters-bottom">
                            <h2 className="curTemp">{curCity.weather[0].description}</h2> 
                            <div className="humidity">Rain - {curCity.main.humidity} %</div>
                        </div>
                    </div>
                    <div className="main-weather">

                        <div className="feels-like item-block"><marquee behavior="" direction="" scrollamount="3">Відчувається як:</marquee> <br/> <br/>  {curCity.main.feels_like}&deg;</div>
                        <div className="temp-max item-block"><marquee behavior="" direction="" scrollamount="3">Максимальна температура:</marquee>  <br/> <br/>  {curCity.main.temp_max}&deg;</div>
                        <div className="temp-min item-block"><marquee behavior="" direction="" scrollamount="3">Мінімальна температура: </marquee> <br/> <br/>  {curCity.main.temp_min}&deg;</div>
                        <div className="pressure item-block">Тиск: <br/> <br/>  {curCity.main.pressure} гПа</div>

                    </div>
                    <section className="add-section">
                        <div className="add-section_block sect1">
                            <div className="weather-sun">
                                <h4 style={{marginLeft: '-30px', marginBottom: '15px', color: '#c3c1c1', fontWeight: 'normal'}}>Схід та захід</h4>
                                <div className="sunrise">
                                    - {new Date(curCity.sys.sunrise * 1000).getHours() + ':' + new Date(curCity.sys.sunrise * 1000).getMinutes()} AM
                                </div> <br />
                                <div className="sunset">
                                    - {new Date(curCity.sys.sunset * 1000).getHours() + ':' + new Date(curCity.sys.sunset * 1000).getMinutes()} PM
                                </div>
                            </div>
                            <div className="visibility">
                                <img src="../images/fog.png" alt="fog" style={{width: '85px', height: 'auto', float: 'left'}}/>
                                Видимість <br /> <span style={{fontSize: '38px', fontWeight: 'bold'}}>{curCity.visibility}</span> м
                            </div>
                        </div>
                        <div className="add-section_block sect2">
                            <div className="weather-wind">
                                <img src="../images/wind.png" alt="winds" style={{width: '60px', height: 'auto', float: "left"}}/>
                                <div className="speed"> <span style={{fontSize: '38px', fontWeight: 'bold'}}>{curCity.wind.speed}</span> м/с</div>
                                <div className="deg">Пориви вітру: до {curCity.wind.gust} м/с</div>
                            </div>
                            <div className="level">
                                <img src="https://cdn1.iconfinder.com/data/icons/climate-change-flat/64/climate-18-512.png" alt="sea-level" style={{width: '80px', float: 'left'}}/>
                                <div className="sea-level" style={{fontSize: '22px'}}>{curCity.main.sea_level} м</div>
                                <div className="grn-level">Рівень землі: {curCity.main.grnd_level} м</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CityInfo;