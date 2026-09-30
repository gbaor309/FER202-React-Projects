import "./App.css";
import ProductInfo from "./ProductInfo";

function App() {
  return (
    <div className="container">
      <h1>Pizza Menu</h1>

      <div className="product-list">
        <ProductInfo
          Name="Margherita Pizza"
          Price="12"
          Tags="Tomato, Mozzarella, Basil"
          Avatar="/images/images1.jpg"
        />

        <ProductInfo
          Name="Pepperoni Pizza"
          Price="15"
          Tags="Pepperoni, Cheese, Tomato"
          Avatar="/images/images2.jpg"
        />
      </div>
    </div>
  );
}

export default App;