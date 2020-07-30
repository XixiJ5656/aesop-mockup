import React, { Component } from "react";
import ProductType from "./ProductType";
import Product from "./Product";

class ProductList extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <ProductType />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default ProductList;
