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

const state = {
  products: [
    { id: 1, name: "banana" },
    { id: 2, name: "banana" },
    { id: 3, name: "banana" },
    { id: 4, name: "banana" },
    { id: 5, name: "banana" },
    { id: 6, name: "banana" }
  ],
  summCalories: 2000
};

class HomePage extends Component {
  state = {
    height: "",
    age: "",
    currentWeight: "",
    futureWeight: "",
    groupBlood: "",
    modalObject: {}
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


  };

  prepareObjectForModal = (calories, products) => {
    this.setState({
      modalObject: {
        calories,
        products: products.map(item => ({ id: uuidv1(), name: item }))
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

  render() {
    const { modalObject } = this.state;
    return (
      <>
        {/* <ModalWindow state={modalObject} /> */}
        <ModalWindow state={state} />

        <div className="homePageWrapper">
          <div className="homePageHeader">
            <img src={logo} alt="header" width="320" height="80" />
          </div>
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
