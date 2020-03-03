import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./CalcForm.module.css";

const getData = data => {
  console.log("data", data);
};

class CalcForm extends Component {
  state = {
    height: " ",
    age: " ",
    currentWeight: " ",
    futureWeight: " ",
    groupBlood: " "
  };

  createList = e => {
    e.preventDefault();
    // this.props.getData(this.state);
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <div className={styles.calkform}>
        <div className={styles.calkformWrapper}>
          <h2 className={styles.calkformTitile}>
            Узнай свою суточную норму каллорий{" "}
            <span className={styles.br}> прямо сейчас</span>
          </h2>
          <form className={styles.inputForm} onSubmit={this.createList}>
            <div className={styles.inputFormLeft}>
              <input
                type="text"
                className={styles.inputItem}
                id="height"
                placeholder="Рост *"
                name="height"
                onChange={this.handleChange}
              ></input>
              <input
                type="Text"
                className={styles.inputItem}
                id="age"
                placeholder="Возраст *"
                name="age"
                onChange={this.handleChange}
              ></input>
              <input
                type="Text"
                className={styles.inputItem}
                id="currentWeight"
                placeholder="Текущий вес *"
                name="currentWeight"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className={styles.inputFormRight}>
              <input
                type="Text"
                className={styles.inputItem}
                id="futureWeight"
                placeholder="Желаемый вес *"
                name="futureWeight"
                onChange={this.handleChange}
              ></input>
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
            <button type="submit" className={styles.inputMeasure} id="submit">
              Похудеть
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CalcForm;

CalcForm.propTypes = {
  getData: PropTypes.func
};
