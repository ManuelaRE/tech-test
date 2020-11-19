import React from 'react';
import styles from './cardList.module.scss'
import weather from '../../../assets/svg/weather.svg'
const CardList = (props) => {

    const {londonTemp, belfastTemp, romeTemp} = props;


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={weather} />
                <h2>{londonTemp.name}</h2>
                <p>Humidity {londonTemp.main.humidity}%</p>
                <p>Min {londonTemp.main.temp_min} °C</p>
                <p>Max {londonTemp.main.temp_max} °C</p>
            </div>
            <div className={styles.card}>
                <img src={weather} />
                <h2>{belfastTemp.name}</h2>
                <p>Humidity {belfastTemp.main.humidity}%</p>
                <p>Min {belfastTemp.main.temp_min} °C</p>
                <p>Max {belfastTemp.main.temp_max} °C</p>
            </div>
            <div className={styles.card}>
                <img src={weather} />
                <h2>{romeTemp.name}</h2>
                <p>Humidity {romeTemp.main.humidity}%</p>
                <p>Min {romeTemp.main.temp_min} °C</p>
                <p>Max {romeTemp.main.temp_max} °C</p>
            </div>

        </div>
    )
}

export default CardList
