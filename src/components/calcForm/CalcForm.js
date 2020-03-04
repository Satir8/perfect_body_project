import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./CalcForm.module.css";

export const dangerProducts = [
  { "1": ["Все зерновые", "яйца", "молочные продукты", "мучные изделия"] },
  {
    "2": ["Все молочные продукты", "изделия из пшеничной муки", "красное мясо"]
  },
  {
    "3": [
      "Все изделия из пшеничной муки",
      "чечевица",
      "арахис",
      "гречка",
      "кукуруза"
    ]
  },
  {
    "4": [
      "Все мучные изделия",
      "красное мясо",
      "орехи",
      "кукуруза",
      "фасоль",
      "гречка"
    ]
  }
];
class CalcForm extends Component {
  state = {
    height: "",
    age: "",
    currentWeight: "",
    futureWeight: "",
    groupBlood: ""
  };

  calcCalories = () => {
    const { currentWeight, height, age, futureWeight } = this.state;
    const rez =
      10 * Number(currentWeight) +
      6.25 * Number(height) -
      5 * Number(age) -
      161 -
      10 * Number(currentWeight - futureWeight);
    return rez;
  };

  getDangerProductList = (groupBlood, dangerProducts) => {
    const target = dangerProducts.find(item => {
      return item[groupBlood];
    });
    return target;
  };

  createList = e => {
    e.preventDefault();
    const { groupBlood } = this.state;
    const totalCalories = this.calcCalories();

    const currentDangerProducts = Object.values(
      this.getDangerProductList(groupBlood, dangerProducts)
    );

    this.props.getTotalCalories(totalCalories);
    this.props.getDangerProducts(currentDangerProducts);
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <>
        <h2 className={styles.calkformTitle}>
          Просчитай свою суточную норму каллорий прямо сейчас
        </h2>
        <form className={styles.inputForm} onSubmit={this.createList}>
          <div className={styles.innerWrapper}>
            <div className={styles.inputFormLeft}>
              <input
                required
                type="text"
                className={styles.inputItem}
                placeholder="Рост *"
                name="height"
                onChange={this.handleChange}
              />
              <input
                required
                type="Text"
                className={styles.inputItem}
                placeholder="Возраст *"
                name="age"
                onChange={this.handleChange}
              />
              <input
                required
                type="Text"
                className={styles.inputItem}
                placeholder="Текущий вес *"
                name="currentWeight"
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.inputFormRight}>
              <input
                type="Text"
                required
                className={styles.inputItem}
                placeholder="Желаемый вес *"
                name="futureWeight"
                onChange={this.handleChange}
              />
              <select
                required
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
          </div>
          <button
            type="submit"
            className={styles.sbmtBtn}
            onClick={this.getData}
          >
            Похудеть
          </button>
        </form>
      </>
    );
  }
}

export default CalcForm;

CalcForm.propTypes = {
  getData: PropTypes.func
};
