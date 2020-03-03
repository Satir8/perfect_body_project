import React, { Component } from 'react';
import data from './quotesData';
import styles from './Quote.module.css';
import { CSSTransition } from 'react-transition-group';
import animation from './quoteAnimation.module.css';

class Quote extends Component {
  state = {
    idx: 0,
    currentQuote: data[0],
    visible: false
  };

  componentDidMount() {
    this.openNextQuote(data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.idx !== this.state.idx) {
      this.setState({
        visible: false
      });
    }
  }

  openNextQuote = arr => {
    setInterval(() => {
      const { idx } = this.state;
      this.setState(prev => ({
        idx: prev.idx + 1,
        currentQuote: arr[idx],
        visible: true
      }));
      if (idx === arr.length - 1) {
        this.setState({ idx: 0 });
      }
    }, 7000);
  };

  render() {
    const { currentQuote, visible } = this.state;
    return (
      <CSSTransition in={visible} timeout={1000} classNames={animation}>
        <figure className={styles.quoteContainer}>
          <blockquote className={styles.quoteText}>
            <p>{`"${currentQuote.text}"`}</p>
          </blockquote>
          <figcaption className={styles.quoteAuthor}>
            {`(${currentQuote.autor})`}
          </figcaption>
        </figure>
      </CSSTransition>
    );
  }
}

export default Quote;
