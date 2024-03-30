import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </>
  );
}

export default ProductList;
