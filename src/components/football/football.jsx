import React from 'react';
import { useState } from 'react';
import team from '../../data/footbal-team.json';
import styles from './football.module.scss';

const Football = () => {
    let goalkeepers = [];
    let defenders = [];
    let midfilders = [];
    let attackers = [];

    const [goalkeeper, setGoalKeeper] = useState(0);
    // on click I raise the count by one
    // on unclick I decrease by one
    // validate if goalkeeper count is equal to 1

    const sortPlayers = () => {team.forEach((player) => {
        if(player.position == "Defender") {
            defenders.push(player.name)
        }
        else if(player.position == "Goalkeeper") {
            goalkeepers.push(player.name)
        } else if(player.position == "Midfielder") {
            midfilders.push(player.name)
        } else {
            attackers.push(player.name)
        }
        })
    }

    sortPlayers();


    const getGoalkeepers = goalkeepers.map((goalkeper) => 
        <>
            <input type="checkbox"></input>
            <li>{goalkeper}</li>
        </>
    );

    const getDefenders = defenders.map((defender) => 
        <>
            <input type="checkbox"></input>
            <li>{defender}</li>
        </>
    );

    const getMidfilders = midfilders.map((midfilder) => 
        <>
            <input type="checkbox" ></input>
            <li>{midfilder}</li>
        </>
    );


    const getAttackers = attackers.map((attacker) => 
        <>
            <input type="checkbox"></input>
            <li>{attacker}</li>
        </>
    );


    return (
        <div>
            <h1>Fantasy Football</h1>
            <p>Make the perfect team by selecting from below</p>

            <h3>Goalkeeper</h3>
            <p>Select one</p>
            <ul>{getGoalkeepers}</ul>

            <h3>Defenders</h3>
            <p>Select three</p>
            <ul>{getDefenders}</ul>

            <h3>Midfilders</h3>
            <p>Select four</p>
            <ul>{getMidfilders}</ul>

            <h3>Attackers</h3>
            <p>Select three</p>
            <ul>{getAttackers}</ul>



        </div>
    )
}

export default Football
