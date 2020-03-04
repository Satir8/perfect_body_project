import React from "react";
import { connect } from "react-redux";
import css from "./Summary.module.css";
import moment from "moment";

const data = {
  balance: 0,
  consumed: 7226,
  dailyRate: 1220
};

const not = {
  a: "Все зерновые, яйца, молочные продукты, мучные изделия",
  b: "Все молочные продукты, изделия из пшеничной муки, красное мясо",
  d: "Все изделия из пшеничной муки, чечевица, арахис, гречка, кукуруза",
  c: "Все мучные изделия, красное мясо, орехи, кукуруза, фасоль, гречка"
};

const Summary = ({ calcForm }) => {
  console.log(calcForm);
  return (
    <div className={css.container}>
      <div className={css.blockSummary}>
        {window.outerWidth > 1023 && (
          <div className={css.loginBox}>
            <div className={css.blabla}></div>
          </div>
        )}
        <div className={css.blockProgres}>
          <p className={css.title}>
            Сводка за <span>{moment(data).format("MM.DD.Y")}</span>
          </p>
          <ul className={css.listProgress}>
            <li className={css.progressItem}>
              {data.dailyRate ? (
                data.dailyRate - data.consumed >= 0 ? (
                  <span>Осталось</span>
                ) : (
                  <span>Перебор</span>
                )
              ) : (
                <span>Осталось</span>
              )}
              {data.dailyRate ? (
                data.dailyRate - data.consumed >= 0 ? (
                  <span> {data.dailyRate - data.consumed} ккал</span>
                ) : (
                  <span style={{ color: "#e70a0a94" }}>
                    {Math.abs((data.dailyRate - data.consumed).toFixed(0))} ккал
                  </span>
                )
              ) : (
                <span> {data.dailyRate - data.consumed} ккал</span>
              )}
            </li>
            <li className={css.progressItem}>
              <span>Употреблено</span>
              <span>{data.consumed} ккал</span>
            </li>
            <li className={css.progressItem}>
              <span>Дневная норма</span>
              <span>{data.dailyRate} ккал</span>
            </li>
            <li className={css.progressItem}>
              <span>n% от нормы</span>
              {data.dailyRate ? (
                <span>
                  {(data.consumed * (100 / data.dailyRate)).toFixed(0)} %
                </span>
              ) : (
                <span>0 %</span>
              )}
            </li>
          </ul>
        </div>
        <div className={css.blockProducts}>
          <p className={css.title}>
            Продукты, которые вам не рекомендовано употреблять:
          </p>
          <p className={css.products}>{not.a}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  calcForm: state.calcForm
});

export default connect(mapStateToProps)(Summary);
