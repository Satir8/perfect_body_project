import React from "react";
import styles from "./CalcForm.module.css";
import Summary from "../summary/Summary";

const CalcForm = ({ onSubmit, onChange, location }) => {
  return (
    <>
      {location === "/calculator" ? (
        <>
          <div className={styles.calculatorWrapper}>
            <h2 className={styles.calculatorTitle}>
              Просчитай свою суточную норму каллорий прямо сейчас
            </h2>
            <form className={styles.inputForm} onSubmit={onSubmit}>
              <div className={styles.innerWrapper}>
                <div className={styles.inputFormLeft}>
                  <input
                    required
                    type="text"
                    className={styles.inputItem}
                    placeholder="Рост *"
                    name="height"
                    onChange={onChange}
                  />
                  <input
                    required
                    type="Text"
                    className={styles.inputItem}
                    placeholder="Возраст *"
                    name="age"
                    onChange={onChange}
                  />
                  <input
                    required
                    type="Text"
                    className={styles.inputItem}
                    placeholder="Текущий вес *"
                    name="currentWeight"
                    onChange={onChange}
                  />
                </div>
                <div className={styles.inputFormRight}>
                  <input
                    type="Text"
                    required
                    className={styles.inputItem}
                    placeholder="Желаемый вес *"
                    name="futureWeight"
                    onChange={onChange}
                  />
                  <select
                    required
                    name="groupBlood"
                    className={styles.selectInput}
                    onChange={onChange}
                  >
                    <option className={styles.option}>Группа крови</option>
                    <option className={styles.option}>1</option>
                    <option className={styles.option}>2</option>
                    <option className={styles.option}>3</option>
                    <option className={styles.option}>4</option>
                  </select>
                </div>
              </div>
              <button type="submit" className={styles.sbmtBtn}>
                Похудеть
              </button>
            </form>
          </div>
          <Summary />
        </>
      ) : (
        <>
          <h2 className={styles.calkformTitle}>
            Просчитай свою суточную норму каллорий прямо сейчас
          </h2>
          <form className={styles.inputForm} onSubmit={onSubmit}>
            <div className={styles.innerWrapper}>
              <div className={styles.inputFormLeft}>
                <input
                  required
                  type="text"
                  className={styles.inputItem}
                  placeholder="Рост *"
                  name="height"
                  onChange={onChange}
                />
                <input
                  required
                  type="Text"
                  className={styles.inputItem}
                  placeholder="Возраст *"
                  name="age"
                  onChange={onChange}
                />
                <input
                  required
                  type="Text"
                  className={styles.inputItem}
                  placeholder="Текущий вес *"
                  name="currentWeight"
                  onChange={onChange}
                />
              </div>
              <div className={styles.inputFormRight}>
                <input
                  type="Text"
                  required
                  className={styles.inputItem}
                  placeholder="Желаемый вес *"
                  name="futureWeight"
                  onChange={onChange}
                />
                <select
                  required
                  name="groupBlood"
                  className={styles.selectInput}
                  onChange={onChange}
                >
                  <option className={styles.option}>Группа крови</option>
                  <option className={styles.option}>1</option>
                  <option className={styles.option}>2</option>
                  <option className={styles.option}>3</option>
                  <option className={styles.option}>4</option>
                </select>
              </div>
            </div>
            <button type="submit" className={styles.sbmtBtn}>
              Похудеть
            </button>
          </form>
        </>
      )}
      {/* <h2 className={styles.calkformTitle}>
        Просчитай свою суточную норму каллорий прямо сейчас
      </h2>
      <form className={styles.inputForm} onSubmit={onSubmit}>
        <div className={styles.innerWrapper}>
          <div className={styles.inputFormLeft}>
            <input
              required
              type="text"
              className={styles.inputItem}
              placeholder="Рост *"
              name="height"
              onChange={onChange}
            />
            <input
              required
              type="Text"
              className={styles.inputItem}
              placeholder="Возраст *"
              name="age"
              onChange={onChange}
            />
            <input
              required
              type="Text"
              className={styles.inputItem}
              placeholder="Текущий вес *"
              name="currentWeight"
              onChange={onChange}
            />
          </div>
          <div className={styles.inputFormRight}>
            <input
              type="Text"
              required
              className={styles.inputItem}
              placeholder="Желаемый вес *"
              name="futureWeight"
              onChange={onChange}
            />
            <select
              required
              name="groupBlood"
              className={styles.selectInput}
              onChange={onChange}
            >
              <option className={styles.option}>Группа крови</option>
              <option className={styles.option}>1</option>
              <option className={styles.option}>2</option>
              <option className={styles.option}>3</option>
              <option className={styles.option}>4</option>
            </select>
          </div>
        </div>
        <button type="submit" className={styles.sbmtBtn}>
          Похудеть
        </button>
      </form> */}
    </>
  );
};

export default CalcForm;
