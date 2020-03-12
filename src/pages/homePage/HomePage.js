import React, { Component } from "react";
import { connect } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import {
  getTotalCalories,
  getDangerProducts
} from "../../redux/calcForm/calcFormActions";
import "./HomePage.css";
import logo from "../../images/img/logo.png";
import dangerProducts from "../../components/calcForm/dangerProducts";
import CalcForm from "../../components/calcForm/CalcForm";
import ModalWindow from "../../components/modalWindow/ModalWindow";

class HomePage extends Component {
  state = {
    height: "",
    age: "",
    currentWeight: "",
    futureWeight: "",
    groupBlood: "",
    modalObject: {},
    isModalOpen: false
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { groupBlood } = this.state;

    const totalCalories = this.calcCalories();
    const currentDangerProducts = Object.values(
      this.getDangerProductList(groupBlood, dangerProducts)
    );

    this.prepareObjectForModal(totalCalories, currentDangerProducts);

    this.props.getTotalCalories(totalCalories);
    this.props.getDangerProducts(currentDangerProducts);

    this.openModal();
  };

  prepareObjectForModal = (calories, products) => {
    this.setState({
      modalObject: {
        calories,
        products: products[0].map(item => ({ id: uuidv1(), name: item }))
      }
    });
  };

  calcCalories = () => {
    const { currentWeight, height, age, futureWeight } = this.state;
    const rezult =
      10 * Number(currentWeight) +
      6.25 * Number(height) -
      5 * Number(age) -
      161 -
      10 * Number(currentWeight - futureWeight);
    return rezult;
  };

  getDangerProductList = (groupBlood, dangerProducts) => {
    return dangerProducts.find(item => item[groupBlood]);
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = event => {
    if (event.key && event.code === "Escape") {
      this.setState({
        isModalOpen: false
      });
    }

    if (
      event.target.className === "modalBackdrop" ||
      event.target.className === "closeBtn"
    ) {
      this.setState({
        isModalOpen: false
      });
    }
  };

  render() {
    const { modalObject, isModalOpen } = this.state;
    return (
      <>
        {isModalOpen && (
          <ModalWindow data={modalObject} onCloseModal={this.closeModal} />
        )}
        <div className="homePageWrapper">
          <div className="homePageBody">
            <CalcForm
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  calories: state.calcForm.calories,
  products: state.calcForm.dangerProducts
});

export default connect(mapStateToProps, {
  getTotalCalories,
  getDangerProducts
})(HomePage);
