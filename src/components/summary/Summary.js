import React from "react";
import { connect } from "react-redux";
import css from "./Summary.module.css";
import moment from "moment";

const data = {
  consumed: 722
};

const Summary = ({ calcForm, children }) => {
  console.log(calcForm);

  return (
    <>
      <div className={css.sectionSummary}>
        <div className={css.blockSummary}>
          <div className={css.blockProgres}>
            <p className={css.title}>
              Сводка за <span>{moment(data).format("MM.DD.Y")}</span>
            </p>
            <ul className={css.listProgress}>
              <li className={css.progressItem}>
                {calcForm.calories ? (
                  calcForm.calories - data.consumed >= 0 ? (
                    <span>Осталось</span>
                  ) : (
                    <span>Перебор</span>
                  )
                ) : (
                  <span>Осталось</span>
                )}
                {calcForm.calories ? (
                  calcForm.calories - data.consumed >= 0 ? (
                    <span> {calcForm.calories - data.consumed} ккал</span>
                  ) : (
                    <span style={{ color: "#e70a0a94" }}>
                      {Math.abs((calcForm.calories - data.consumed).toFixed(0))}{" "}
                      ккал
                    </span>
                  )
                ) : (
                  <span> {calcForm.calories - data.consumed} ккал</span>
                )}
              </li>
              <li className={css.progressItem}>
                <span>Употреблено</span>
                <span>{data.consumed} ккал</span>
              </li>
              <li className={css.progressItem}>
                <span>Дневная норма</span>
                <span>{calcForm.calories} ккал</span>
              </li>
              <li className={css.progressItem}>
                <span>n% от нормы</span>
                {calcForm.calories ? (
                  <span>
                    {(data.consumed * (100 / calcForm.calories)).toFixed(0)} %
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
            <p className={css.products}>
              {calcForm.dangerProducts
                ? calcForm.dangerProducts[0].join(", ")
                : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  calcForm: state.calcForm
});

export default connect(mapStateToProps)(Summary);
