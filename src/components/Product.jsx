import React from 'react';
import Cart from './Cart';

 export default function Product({product, cartItems, setCartItems, updateStock}) {


  function addToCart() {
    const updatedProduct = updateStock(product);
    setCartItems([...cartItems, updatedProduct]);
  }
     
  return (
    <div>
      <img className="small" src={product.img} />
      <h3>{product.name}</h3>
      <div>{product.price} kr</div>
      <h5>In stock: {product.stock}</h5>
      <div>
        <button onClick={addToCart} >Add To Cart</button>
        {/* <button onClick={() => { addToCart(); updateStock(product);} }>Add To Cart</button> */}

        
        
      </div>
    </div>
  );

}