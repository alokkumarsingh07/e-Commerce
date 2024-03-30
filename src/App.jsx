import ProductsList from "./components/ProductList";
import productData from "./components/ProductData";
import "./App.css";

function App() {
  return (
    <>
      <h1>Products</h1>
      <ProductsList products={productData} />
    </>
  );
}

export default App;
