import React, { Component } from 'react';
import Quote from './quotes/Quote';
import Graph from './graph/Graph';
import styles from './Achievements.module.css';

const screenWidth = window.matchMedia('(max-width: 375px)');

class Achievements extends Component {
  state = {
    isMobile: false
  };

  componentDidMount() {
    this.checkScrennWidth(screenWidth)
  }

  checkScrennWidth = width => {
    if(width.matches) {
      this.setState({
        isMobile: true
      })
    }
  };
  
  render() {
    const { isMobile } = this.state
    return (
      <div className={styles.achieveContainer}>
        {!isMobile && <Quote />}
        <Graph isMobile={isMobile} />
      </div>
    );
  }
}

export default Achievements;
