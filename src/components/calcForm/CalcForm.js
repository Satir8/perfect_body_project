import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./CalcForm.module.css";

class CalcForm extends Component {
  state = {
    height: " ",
    age: " ",
    currentWeight: " ",
    futureWeight: " ",
    groupBlood: " ",
    showModal: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      showModal: true
    })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
      <div className={styles.calcform}>
        <div className={styles.calcformWrapper}>
          <h2 className={styles.calcformTitile}>
            Узнай свою суточную норму каллорий{" "}
            <span className={styles.br}> прямо сейчас</span>
          </h2>
          <form className={styles.inputForm} onSubmit={this.handleSubmit}>
            <div className={styles.inputFormLeft}>
              <input
                type="text"
                className={styles.inputItem}
                id="height"
                placeholder="Рост *"
                name="height"
                onChange={this.handleChange}
              />
              <input
                type="Text"
                className={styles.inputItem}
                id="age"
                placeholder="Возраст *"
                name="age"
                onChange={this.handleChange}
              />
              <input
                type="Text"
                className={styles.inputItem}
                id="currentWeight"
                placeholder="Текущий вес *"
                name="currentWeight"
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.inputFormRight}>
              <input
                type="Text"
                className={styles.inputItem}
                id="futureWeight"
                placeholder="Желаемый вес *"
                name="futureWeight"
                onChange={this.handleChange}
              />
              <select
                id="groupBlood"
                name="groupBlood"
                className={styles.selectInput}
                onChange={this.handleChange}
              >
                <option className={styles.option}>Группа крови</option>
                <option className={styles.option}>1</option>
                <option className={styles.option}>2</option>
                <option className={styles.option}>3</option>
                <option className={styles.option}>4</option>
              </select>
            </div>
            <button
              type="submit"
              className={styles.inputMeasure}
              onClick={this.getData}
              id="submit"
            >
              Похудеть
            </button>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default CalcForm;

CalcForm.propTypes = {
  getData: PropTypes.func
};
