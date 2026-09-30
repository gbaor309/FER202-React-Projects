import './App.css'
import ProductInfo from './ProductInfo'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="product-container d-flex flex-column align-items-center justify-content-center my-4">
      <ProductInfo
        name="Pizza Pepperoni"
        price="200.000 VNĐ"
        tag="Pizza"
        avatar="/pizza1.jpg"
      />

      <ProductInfo
        name="Pizza Hải Sản"
        price="170.000 VNĐ"
        tag="Pizza"
        avatar="/pizza2.jpg"
      />
    </div>
  )
}

export default App