import React from "react";
import Quote from "./quotes/Quote";
import Graph from "./graph/Graph";
import styles from "./Achievements.module.css";
import Summary from "../../components/summary/Summary";

const Achievements = ({ isMobile }) => (
  <>
    <div className={styles.achieveContainer}>
      {!isMobile && <Quote />}
      <Graph isMobile={isMobile} />
    </div>
    <Summary />
  </>
);

export default Achievements;
