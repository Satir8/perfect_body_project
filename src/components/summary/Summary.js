import React from "react";
import { connect } from "react-redux";
import css from "./Summary.module.css";
import moment from "moment";

const data = {
  balance: "number",
  consumed: "number",
  dailyRate: "number",
  percentNorm: "number"
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
              <span>Осталось</span>
              <span>{data.balance}ккал</span>
            </li>
            <li className={css.progressItem}>
              <span>Употреблено</span>
              <span>{data.consumed}ккал</span>
            </li>
            <li className={css.progressItem}>
              <span>Дневная норма</span>
              <span>{data.dailyRate}ккал</span>
            </li>
            <li className={css.progressItem}>
              <span>n% от нормы</span>
              <span>{data.percentNorm} %</span>
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
