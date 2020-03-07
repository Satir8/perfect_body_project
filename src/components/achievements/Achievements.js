import React from 'react';
import Quote from './quotes/Quote';
import Graph from './graph/Graph';
import styles from './Achievements.module.css';
import Summary from '../../components/summary/Summary';
import { appContext } from '../App';

const Achievements = () => (
  <appContext.Consumer>
    {({ isMobile }) => (
      <>
        <div className={styles.achieveContainer}>
          {!isMobile && <Quote />}
          <Graph isMobile={isMobile} />
        </div>
        {!isMobile && <Summary />}
      </>
    )}
  </appContext.Consumer>
);

export default Achievements;
