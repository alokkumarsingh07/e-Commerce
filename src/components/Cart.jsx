import React, { useState } from "react";

function Cart({ cartElements, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

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
            <div key={index}>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "100px", height: "100px" }}
              />
              <div>{item.title}</div>
              <div>Price: ${item.price}</div>
              <div>Quantity: {item.quantity}</div>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cart;
