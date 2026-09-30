function ProductInfo({ Name, Price, Tags, Avatar }) {
  return (
    <div className="card">
      <img
        className="product-image"
        src={Avatar}
        alt={Name}
      />

      <div className="card-body">
        <h2>{Name}</h2>
        <p className="price">${Price}</p>
        <p className="tags">{Tags}</p>
      </div>
    </div>
  );
}

export default ProductInfo;