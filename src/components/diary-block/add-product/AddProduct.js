import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import styles from './AddProduct.module.css';

class AddProduct extends Component {
  state = {
    inputValue: '',
    selectedValue: '',
    quantityValue: '',
    products: []
  };

  handleSelectChange = value => {
    this.setState({ selectedValue: value });
  };

  handleInputSelect = inputValue => {
    this.setState({ inputValue });
  };

  handleChange = e => {
    this.setState({ quantityValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { selectedValue, quantityValue } = this.state;
    this.setState({
      product: { name: selectedValue.label, quantity: quantityValue }
    });

    const product = {
      ...selectedValue,
      weight: quantityValue,
      date: Date.now()
    };

    axios
      .post(`/user/eats/${selectedValue.value}`, product)
      .then(response => {
        if (response.data.status === 'success') {
          //console.log('ok');

          this.setState(prev => {
            return {
              products: [...prev.products, response.data.products]
            };
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    this.props.updateProducts(this.state.products);
  };

  getAsyncOptions = async query => {
    if (query) {
      const data = await axios.get(`/products?search=${query}`);
      const productsOptions = data.data.productsOptions;
      return this.filterProducts(productsOptions);
    }
  };

  filterProducts = data => {
    const products = data.filter(elem => elem.label);
    //console.log(products);
    return products;
  };

  loadOptions = () => this.getAsyncOptions(this.state.inputValue);

  render() {
    const { selectedValue, quantityValue } = this.state;

    // var d = new Date(1583150622043);
    // var n = d.toISOString();
    // console.log(n);

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.search}>
          <div className={styles.searchSelect}>
            <AsyncSelect
              cacheOptions
              loadOptions={this.loadOptions}
              defaultOptions
              onInputChange={this.handleInputSelect}
              onChange={this.handleSelectChange}
              value={selectedValue}
            />
          </div>
          <div className={styles.searchInput}>
            <input
              type="text"
              name="quantityValue"
              onChange={this.handleChange}
              value={quantityValue}
            />
          </div>
          <div className={styles.searchBtn}>
            <button type="submit">&#43;</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddProduct;
