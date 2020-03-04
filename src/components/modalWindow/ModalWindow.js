import React from "react";
// import PropTypes from "prop-types";
import WithModalBackdrop from "../../HOC/WithModalBackdrop/WithModalBackdrop";
import "./ModalWindow.css";

const ModalWindow = props => {
  const { products, summCalories, onCloseModal } = props.state;
  return (
    <div className="modalWindow">
      <div className="modalHeader">
        <button
          type="button"
          className="closeBtn"
          onClick={onCloseModal}
        ></button>
        <h2 className="title">
          Ваша рекомендуемая суточная норма калорий составляет:
        </h2>
      </div>
      <div className="modalBody">
        <p className="resultText">
          {summCalories}
          <span className="resultUnits">ккал</span>
        </p>

        <h3 className="productDescription">
          Продукты, которые Вам
          <br />
          не рекомендуется употреблять:
        </h3>
        {products.length > 0 && (
          <ol className="list">
            {products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ol>
        )}
      </div>
      <div className="modalFooter">
        <button type="button" className="startLoosingWeight">
          Начать худеть
        </button>
      </div>
    </div>
  );
};

export default WithModalBackdrop(ModalWindow);

// ModalWindow.defaultProps = {
//   products: []
// };

// ModalWindow.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string
//     })
//   ),
//   summCalories: PropTypes.string.isRequired,
//   onCloseModal: PropTypes.func.isRequired
// };