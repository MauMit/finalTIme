import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;

  console.log(props)
  return (
    <div>
      <img className="small" src={product.img} />
      <h3>{product.name}</h3>
      <div>{product.price} kr</div>
      <h5>In stock: {product.stock}</h5>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}