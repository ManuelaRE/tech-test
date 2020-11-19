import React from 'react';
import styles from './quiz.module.scss';
import { useState, useEffect } from 'react';

const Quiz = () => {
    // store the correct answer

    const correctAnswer = "a1";

    // on button click set the value of state to that answer 
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        checkWin();
    }, [answer])

    // check answer agains the coorect

    const handleInput = (el) => {
        const userAnswer = el.target.value;
        setAnswer(userAnswer);
    }
    console.log(answer)

    const checkWin = () => {
        if(answer == "") {
            return
        } else if (answer == correctAnswer){
            alert("you genius")
        } else {
            alert("Try again")
        }
    }

    return (
        <div className={styles.quiz}>
                <h1>What's the biggest animal in the world?</h1>
                <div className={styles.buttons}>
                    <button type="button" value="a1" onClick={handleInput}>The Blue Whale</button>
                    <button type="button" value="a2" onClick={handleInput}>Colossal Squid</button>
                    <button type="button" value="a3" onClick={handleInput}>African Elephant</button>
                    <button type="button" value="a4" onClick={handleInput}>Giraffe</button>
                </div>
        </div>
    )
}

export default Quiz
