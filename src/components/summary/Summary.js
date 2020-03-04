import React from "react";
import css from "./Summary.module.css";
import moment from "moment";

const data = {
  balance: 0,
  consumed: 226,
  dailyRate: 1220
};
const not = {
  a: "Все зерновые, яйца, молочные продукты, мучные изделия",
  2: "Все молочные продукты, изделия из пшеничной муки, красное мясо",
  3: "Все изделия из пшеничной муки, чечевица, арахис, гречка, кукуруза",
  4: "Все мучные изделия, красное мясо, орехи, кукуруза, фасоль, гречка"
};
const Summary = () => {
  // console.dir(window);
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
                  <span>
                    {Math.abs((data.dailyRate - data.consumed).toFixed(0))}
                    ккал
                  </span>
                )
              ) : (
                <span>
                  {Math.abs((data.dailyRate - data.consumed).toFixed(0))}
                  ккал
                </span>
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

export default Summary;
