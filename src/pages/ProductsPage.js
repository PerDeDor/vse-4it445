import React, { Component } from 'react';
import axios from 'axios';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor (props) {
    super(props);
    this.state = { products: []};
  }
componentDidMount() {
  console.log('did mount!')
  axios('http://dev.backend.xhrim06.vse.handson.pro/api/products')
    .then((response) => {
      this.setState({
        products: response.data
      });
    });

}

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
