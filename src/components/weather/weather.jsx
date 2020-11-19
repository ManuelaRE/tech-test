import React from 'react';
import { useEffect, useState } from 'react';
import CardList from './cardList';
import styles from './weather.module.scss'

const Weather = () => {
    const [londonTemp, setLondonTemp] = useState({});
    const [belfastTemp, setBelfastTemp] = useState({});
    const [romeTemp, setRomeTemp] = useState({});


    const cityId = [2643744, 4749005, 4219762];

    useEffect( async () => {
        await handleLondonFetch();
        await handleBelfastFetch();
        await handleRomeFetch();
    }, []);

    const handleLondonFetch = () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?id=2643744&appid=ebcbfa0f90191d692fb8c9de956614df&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(data => setLondonTemp(data));
    }

    const handleBelfastFetch = () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?id=4749005&appid=ebcbfa0f90191d692fb8c9de956614df&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(data => setBelfastTemp(data));
    }

    const handleRomeFetch = () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?id=4219762&appid=ebcbfa0f90191d692fb8c9de956614df&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(data => setRomeTemp(data));
    }

    console.log(londonTemp)

    return (
        <div className={styles.weatherContainer}>
            <h1>Weather Today</h1>
            <CardList londonTemp={londonTemp} belfastTemp={belfastTemp} romeTemp={romeTemp}/>
        </div>
    )
}

export default Weather;
