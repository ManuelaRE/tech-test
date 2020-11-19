import React from 'react';
import { useEffect, useState } from 'react';
import CardList from './cardList';
import styles from './weather.module.scss'

const Weather = () => {
    const [londonTemp, setLondonTemp] = useState(null);
    const [belfastTemp, setBelfastTemp] = useState(null);
    const [romeTemp, setRomeTemp] = useState(null);

    useEffect(() => {
        handleFetch()
    }, []);


    const handleFetch = () => {
        fetch("http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&appid=1acbd84f93b9bf41a917d5cf13ed69eb&units=metric")
        .then((response) => response.json())
        .then((response) => {
            setLondonTemp(response.list[0]);
            setBelfastTemp(response.list[1]);
            setRomeTemp(response.list[2]);
        })
    }


    return (
        <div className={styles.weatherContainer}>
            <h1>Weather Today</h1>
            {londonTemp && belfastTemp && romeTemp ? <CardList londonTemp={londonTemp} belfastTemp={belfastTemp} romeTemp={romeTemp}/> : <p>Loading Cards</p> }  
        </div>
    )
}

export default Weather;
