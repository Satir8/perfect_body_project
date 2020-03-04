import React from 'react';
import Quote from './quotes/Quote';
import Graph from './graph/Graph';
import styles from './Achievements.module.css';

const Achievements = ({ isMobile }) => (
  <div className={styles.achieveContainer}>
    {!isMobile && <Quote />}
    <Graph isMobile={isMobile} />
  </div>
);

export default Achievements;