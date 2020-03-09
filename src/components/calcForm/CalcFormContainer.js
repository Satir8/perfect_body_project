import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import WithAuthRedirect from '../hoc/WithAuthRedirect'
import CalcForm from "./CalcForm";
import dangerProducts from "./dangerProducts";
import {
  getTotalCalories,
  getDangerProducts,
  getInfoForInputs
} from "../../redux/calcForm/calcFormActions";
import axios from "axios";

class CalcFormContainer extends Component {
  state = {
    height: "",
    age: "",
    currentWeight: "",
    futureWeight: "",
    groupBlood: ""
  };

  // componentDidMount() {
  //   // const { infoForInputs } = this.props;
  //   // const {
  //   //   height,
  //   //   age,
  //   //   currentWeight,
  //   //   futureWeight,
  //   //   groupBlood
  //   // } = infoForInputs;

  //   // this.setState({ height, age, currentWeight, futureWeight, groupBlood });

  // }

  componentDidMount = async () => {
    if (this.props.session.authenticated) {
      await axios
        .get("https://slim-moms.goit.co.ua/api/v1/user", {
          headers: {
            Authorization: this.props.session.token,
            "Content-Type": "application/json"
          }
        })
        .then(data => this.setState({ ...data.data.user.userData }));
    }
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

    axios.put(
      `https://slim-moms.goit.co.ua/api/v1/user`,
      { ...this.state },
      {
        headers: {
          Authorization: this.props.session.token,
          "Content-Type": "application/json"
        }
      }
    );

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
    return (
      <CalcForm
        state={this.state}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        location={this.props.location.pathname}
      />
    );
  }
}

const mapStateToProps = state => ({
  session: state.session,
  calories: state.calcForm.calories,
  products: state.calcForm.dangerProducts,
  infoForInputs: state.calcForm.infoForInputs
});

export default WithAuthRedirect(withRouter(
  connect(mapStateToProps, {
    getTotalCalories,
    getDangerProducts,
    getInfoForInputs
  })(CalcFormContainer))
);
