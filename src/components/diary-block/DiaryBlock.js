import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTotalCalories, getDate } from '../../redux/calcForm/calcFormActions';
import AddProduct from './add-product/AddProduct';
import DiaryList from './diary-list/DiaryList';
import Summary from '../summary/Summary';
import axios from 'axios';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment';
import 'moment/locale/ru';

import 'react-day-picker/lib/style.css';
//import {classNames} from '../../../images/icons/calendar/baseline-date_range-black-24/2x/baseline_date_range_black_24dp.png'

axios.defaults.baseURL = 'https://slim-moms.goit.co.ua/api/v1';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTVhNmQxNGY0ZTlhNjQxNjE3MjkwNzYiLCJjcmVhdGVkRGF0ZSI6MTU4Mjk4NDYyNDIzMSwiZXhwIjoxNTg1NTc2NjI0fQ.viN0Tv3O8ppDN8dKn87jBDEqBcDD900IUFQPIEwoMfY';

const customStyles = {
  border: 'none',
  fontSize: '18px',
  fontWeight: 700,
  width: '120px',
  cursor: 'pointer',
  backgroundImage:
    'url(../../../images/icons/calendar/baseline-date_range-black-24/2x/baseline_date_range_black_24dp.png)'
};
class DiaryBlock extends Component {
  state = {
    selectedDay: moment().toISOString(),
    products: [],
    caloriesSumm: null
  };

  getFetchData = async () => {
    const data = await axios.get(`/user/eats/${this.state.selectedDay}`);
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
    const data = await axios.get(`/user/eats/${moment().format()}`);
    this.setState({
      products: data.data.products.reverse()
    });
    this.getCaloriesSumm();
  }

  // updateProducts = () => {
  //   this.setState(prev => ({
  //     check: !prev.check
  //   }));
  // };

  deleteProduct = id => {
    axios
      .delete(`/user/eats/${id}`)
      .then(response => {
        if (response.data.status === 'success') {
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
    this.props.getTotalCalories(this.state.caloriesSumm);

  };

  getUpdateProducts = async () => {
    const data = await axios.get(`/user/eats/${this.state.selectedDay}`);
    this.setState({
      products: data.data.products.reverse()
    });
    this.getCaloriesSumm();
  };

  render() {
    const { selectedDay, products } = this.state;

    return (
      <>
        <div>
          <DayPickerInput
            inputProps={{ style: customStyles }}
            value={moment(selectedDay).format('L')}
            onDayChange={this.handleDayChange}
            formatDate={formatDate}
            parseDate={parseDate}
            //format="L"
            // placeholder={`${moment().format('L')}`}
            dayPickerProps={{
              locale: 'ru',
              localeUtils: MomentLocaleUtils
            }}
          />
          <AddProduct
            getUpdateProducts={this.getUpdateProducts}
            // updateProducts={this.updateProducts}
          />
          <DiaryList
            productsList={products}
            deleteProduct={this.deleteProduct}
          />
        </div>
        <Summary />
      </>
    );
  }
}

const mapDispatchToProps = {
  getTotalCalories,
  getDate
};

export default connect(null, mapDispatchToProps)(DiaryBlock);
