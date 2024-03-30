import React, { useState } from "react";

function Cart({ cartElements, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleCart}>Toggle Cart</button>
      {isOpen && (
        <div>
          <h2>Cart</h2>
          {cartElements.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid black",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "100px", height: "100px" }}
              />
              <div>{item.title}</div>
              <div>Price: ${item.price}</div>
              <div>Quantity: {item.quantity}</div>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cart;
