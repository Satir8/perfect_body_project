import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import styles from './AddProduct.module.css';

const customStyles = {
  container: provided => ({ ...provided, borderBottom: '1px solid #e5e5e5' }),
  indicatorsContainer: provided => ({ ...provided, display: 'none' }),
  control: provided => ({ ...provided, border: 0, boxShadow: 'none' })
};

class AddProduct extends Component {
  state = {
    inputValue: '',
    selectedValue: '',
    quantityValue: '',
    products: [],
    product: {}
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
    if (!selectedValue.label) {
      console.log('Выберите продукт');
    } else if(!quantityValue) {
      console.log('Выберите граммы');
    } else {
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
            //console.log(product);
            this.setState(prev => {
              return {
                products: [...prev.products, product]
              };
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      this.props.updateProducts(this.state.products);
      console.log(this.state.products);
      this.setState({
        selectedValue: '',
        quantityValue: ''
      });
    }
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

    return (
      <form className={styles.form} onSubmit={e => this.handleSubmit(e)}>
        <div className={styles.search}>
          <div className={styles.searchSelect}>
            <AsyncSelect
              styles={customStyles}
              cacheOptions
              loadOptions={this.loadOptions}
              defaultOptions
              onInputChange={this.handleInputSelect}
              onChange={this.handleSelectChange}
              value={selectedValue}
              className={styles.asyncSelect}
              placeholder="Введите название продукта"
              noOptionsMessage={() => 'Продукт не найден' || null}
            />
          </div>
          <div className={styles.searchInput}>
            <input
              type="text"
              name="quantityValue"
              onChange={this.handleChange}
              value={quantityValue}
              autoComplete="off"
              placeholder="граммы"
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
