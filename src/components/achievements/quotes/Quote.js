import React, { Component } from 'react';
import data from './quotesData';
import styles from './Quote.module.css';

class Quote extends Component {
  state = {
    quoteNumber: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prev => {
        if (prev.quoteNumber >= data.length) {
          prev.quoteNumber = -1;
        }
        return {
          quoteNumber: prev.quoteNumber + 1
        };
      });
    }, 50000000);
  }

  render() {
    const { quoteNumber } = this.state;
    console.log(quoteNumber)
    return (
      <figure className={styles.quoteContainer}>
        <blockquote className={styles.quoteText}>
          <p>{`"${data[quoteNumber].text}"`}</p>
        </blockquote>
        <figcaption className={styles.quoteAuthor}>
          {`(${data[quoteNumber].autor})`}
        </figcaption>
      </figure>
    );
  }
}

export default Quote;
