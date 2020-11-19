import React from "react";
import { Router} from "@reach/router"
import styles from "./Routes.module.scss";
import Weather from '../../components/weather';
import Quiz from '../../components/quizz';
import Football from '../../components/football';

const Routes = () => {
  return (
    <Router>
      <Weather path="weather" />
      <Quiz path="quiz" />
      <Football path="football" />
    </Router>
  );
};

export default Routes;
