import React from "react";
import Cart from "./components/Cart";
import cartElements from "./components/CartElement";
import "./App.css";

function App() {
  const [cartElement, setCartElement] = React.useState(cartElements);
  const removeFromCart = (index) => {
    const updatedCartElements = [...cartElement];
    updatedCartElements.splice(index, 1);
    setCartElement(updatedCartElements);
  };
  return (
    <>
      <h1>My E-commerce App</h1>
      <Cart cartElements={cartElement} removeFromCart={removeFromCart} />
    </>
  );
}

export default App;
