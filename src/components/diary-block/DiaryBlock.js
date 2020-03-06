import React, { Component } from 'react';
import AddProduct from './add-product/AddProduct';
import DiaryList from './diary-list/DiaryList';
import axios from 'axios';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment';
import 'moment/locale/ru';
//import styles from './DiaryBlock.module.css'
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
    backgroundImage: 'url(../../../images/icons/calendar/baseline-date_range-black-24/2x/baseline_date_range_black_24dp.png)'
  }
class DiaryBlock extends Component {
  state = {
    selectedDay: moment().toISOString(),
    products: []
  };

  getFetchData = async () => {
    const data = await axios.get(`/user/eats/${this.state.selectedDay}`);
    this.setState({
      products: data.data.products.reverse()
    });
  };

  handleDayChange = async selectedDay => {
    const date = moment(selectedDay).toISOString();
    this.setState(
      { selectedDay: date },
      () => { this.getFetchData()}
    );
    console.log(this.state.selectedDay);
  };

  async componentDidMount() {
    const data = await axios.get(`/user/eats/${moment().format()}`);
    this.setState({
      products: data.data.products.reverse()
    });
  }

  updateProducts = value => {
    this.setState({
      products: value
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    // console.log('current', this.state.products.length);
    // console.log('prev', prevState.products.length);

    if (prevState.products.length !== this.state.products.length) {
      //console.log('state has changed.');
      const data = await axios.get(`/user/eats/${this.state.selectedDay}`);
      this.setState({
        products: data.data.products.reverse()
      });
      //console.log(data);
    }
  }

  deleteProduct = id => {
    axios
      .delete(`/user/eats/${id}`)
      .then(response => {
        if (response.data.status === 'success') {
          console.log('ok');
          this.setState(prev => ({
            products: prev.products.filter(elem => elem._id !== id)
          }));
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
//const x = "styles.asd";
    const { selectedDay, products } = this.state;
    //console.log('diary-products',products);

    //console.log(selectedDay);
    //console.log(moment('2019-03-20').toISOString());
    return (
      <>
        <DayPickerInput
          //style={styles.datePicker}
          inputProps={{ style: customStyles  }}
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
        <AddProduct updateProducts={this.updateProducts} />
        <DiaryList productsList={products} deleteProduct={this.deleteProduct} />
      </>
    );
  }
}

export default DiaryBlock;