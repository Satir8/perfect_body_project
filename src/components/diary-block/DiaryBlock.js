import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getTotalUsedCalories,
  getDate
} from "../../redux/calcForm/calcFormActions";
import AddProduct from "./add-product/AddProduct";
import DiaryList from "./diary-list/DiaryList";
import Summary from "../summary/Summary";
import axios from "axios";
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";
import "moment/locale/ru";
import styles from "./DiaryBlock.module.css";
import "react-day-picker/lib/style.css";
import calendarIcon from './baseline_date_range_black_24dp.png';
import WithAuthRedirect from '../hoc/WithAuthRedirect'

axios.defaults.baseURL = "https://slim-moms.goit.co.ua/api/v1";
//axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTYyOTY0MjA2NzdhNDFlYTczY2Y0YzkiLCJjcmVhdGVkRGF0ZSI6MTU4MzYwNzg4ODcxNiwiZXhwIjoxNTg2MTk5ODg4fQ.VgxOGtciHMFq6IJ-hx-ZM7NnZZiJNZOSNH00uKKO1e4";

const customStyles = {
  border: "none",
  fontSize: "18px",
  fontWeight: 700,
  width: "120px",
  cursor: "pointer",
  outline: "none",
  background: `url(${calendarIcon})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '20px 20px',
  backgroundPosition: 'top right'
};



class DiaryBlock extends Component {
  state = {
    selectedDay: moment().toISOString(),
    products: [],
    caloriesSumm: null
  };

  getFetchData = async () => {
    const headers = { Authorization: this.props.token };
    const data = await axios.get(`/user/eats/${this.state.selectedDay}`, { headers });
    this.setState({
      products: data.data.products.reverse()
    });
    this.getCaloriesSumm();
  };

  handleDayChange = async selectedDay => {
    const date = moment(selectedDay).toISOString();
    this.setState({ selectedDay: date }, () => {
      this.getFetchData();
      this.props.getDate(this.state.selectedDay);
    });
  };

  async componentDidMount() {
    const headers = { Authorization: this.props.token };
    const data = await axios.get(`/user/eats/${moment().format()}`, { headers });
    this.setState({
      products: data.data.products.reverse()
    });
    this.getCaloriesSumm();
  }

  deleteProduct = id => {
    const headers = { Authorization: this.props.token };
    axios
      .delete(`/user/eats/${id}`, { headers })
      .then(response => {
        if (response.data.status === "success") {
          this.setState(prev => ({
            products: prev.products.filter(elem => elem._id !== id)
          }));
          this.getCaloriesSumm();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getCaloriesSumm = () => {
    const { products } = this.state;
    const calSum = products.reduce(
      (totalCal, product) => totalCal + product.calories,
      0
    );
    this.setState({
      caloriesSumm: Math.round(calSum)
    });
    this.props.getTotalUsedCalories(this.state.caloriesSumm);
  };

  getUpdateProducts = async () => {
    const headers = { Authorization: this.props.token };
    const data = await axios.get(`/user/eats/${this.state.selectedDay}`, { headers });
    this.setState({
      products: data.data.products.reverse()
    });
    this.getCaloriesSumm();
  };

  render() {
    const { selectedDay, products } = this.state;

    return (
      <>
        <div className={styles.DashboardContainer}>
          <div className={styles.diaryContainer}>
            <div className={styles.dayPickerInputContainer}>
              <DayPickerInput
                inputProps={{ style: customStyles }}
                value={moment(selectedDay).format("L")}
                onDayChange={this.handleDayChange}
                formatDate={formatDate}
                parseDate={parseDate}
                //format="L"
                // placeholder={`${moment().format('L')}`}
                dayPickerProps={{
                  locale: "ru",
                  localeUtils: MomentLocaleUtils
                }}
              />
            </div>
            <div className={styles.addProductContainer}>
              <AddProduct
                getUpdateProducts={this.getUpdateProducts}
                token={this.props.token}
                selectedDay={selectedDay}
              />
            </div>
            <DiaryList
              productsList={products}
              deleteProduct={this.deleteProduct}
            />
          </div>
          <Summary />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.session.token
})


const mapDispatchToProps = {
  getTotalUsedCalories,
  getDate
};

export default WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DiaryBlock));
