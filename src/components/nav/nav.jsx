import React from "react";
import styles from "./nav.module.scss";
import { Link } from "@reach/router";


const nav = () => {
  return (
    <div className={styles.navbar}>
      <img src="" />
      <Link to='weather'>
        <h1>Weather Cards</h1>
      </Link>
      <Link to="quiz">
        <h1>One Question Quiz</h1>
      </Link>
      <Link to="football">
        <h1>Football Team Organiser</h1>
      </Link>
    </div>
  );
};

export default nav;
