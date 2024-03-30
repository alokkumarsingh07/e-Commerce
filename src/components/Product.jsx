import React from "react";

function Product({ title, price, imageUrl }) {
  return (
    <>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
    </>
  );
}

export default Product;
