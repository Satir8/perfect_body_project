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

axios.defaults.baseURL = 'https://slim-moms.goit.co.ua/api/v1';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTVhNmQxNGY0ZTlhNjQxNjE3MjkwNzYiLCJjcmVhdGVkRGF0ZSI6MTU4Mjk4NDYyNDIzMSwiZXhwIjoxNTg1NTc2NjI0fQ.viN0Tv3O8ppDN8dKn87jBDEqBcDD900IUFQPIEwoMfY';

class DiaryBlock extends Component {
  state = {
    selectedDay: moment().format('L'),
    products: []
  };

  handleDayChange = selectedDay => {
    const date = moment(selectedDay).format();
    this.setState({
      selectedDay: date
    });
  };

  async componentDidMount() {
    const data = await axios.get(`/user/eats/${moment().format()}`);
    this.setState({
      products: data.data.products
    });
  }

  updateProducts = (value) => {
    this.setState({
      products: value,
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log('current', this.state.products.length);
		// console.log('prev', prevState.products.length);
		
    if (prevState.products.length !== this.state.products.length) {
      console.log('state has changed.');
      const data = await axios.get(`/user/eats/${moment().format()}`);
      this.setState({
        products: data.data.products
      });
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
    const { selectedDay, products } = this.state;
    console.log('diary-products',products);
    console.log('rererender');
    return (
      <>
        <DayPickerInput
          value={selectedDay}
          onDayChange={this.handleDayChange}
          formatDate={formatDate}
          parseDate={parseDate}
          format="L"
          // placeholder={`${moment().format('L')}`}
          dayPickerProps={{
            locale: 'ru',
            localeUtils: MomentLocaleUtils
          }}
        />
        <AddProduct updateProducts={this.updateProducts}/>
        <DiaryList productsList={products} deleteProduct={this.deleteProduct} />
      </>
    );
  }
}

export default DiaryBlock;
