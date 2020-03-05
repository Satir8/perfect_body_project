import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CalcForm from "./CalcForm";
import dangerProducts from "./dangerProducts";
import {
  getTotalCalories,
  getDangerProducts
} from "../../redux/calcForm/calcFormActions";

class CalcFormContainer extends Component {
  state = {
    height: "",
    age: "",
    currentWeight: "",
    futureWeight: "",
    groupBlood: ""
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

    if (this.props.location.pathname === "/") {
      this.props.onPrepareModalObject(totalCalories, currentDangerProducts);
    }

    this.props.getTotalCalories(totalCalories);
    this.props.getDangerProducts(currentDangerProducts);

    if (this.props.location.pathname === "/") {
      this.props.onModalOpen();
    }
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
    // console.log(this.props);
    return (
      <CalcForm onSubmit={this.handleSubmit} onChange={this.handleChange} />
    );
  }
}

const mapStateToProps = state => ({
  calories: state.calcForm.calories,
  products: state.calcForm.dangerProducts
});

export default withRouter(
  connect(mapStateToProps, {
    getTotalCalories,
    getDangerProducts
  })(CalcFormContainer)
);
