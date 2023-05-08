import React from 'react';
import Cart from './Cart';



 export default function Product({product, cartItems, setCartItems, updateStock}) {
  
  console.log(product.stock)
  async function addToCart(){


 
    console.log(product.stock)

   
    //   setCartItems(prevCartItems => [...prevCartItems, product]);

   // const productInCart = cartItems.find(item => item.id === product.id);

    // if ( !productInCart) {
    //   product.stock--;
    //   setCartItems(prevCartItems => [...prevCartItems, product]);
    // }

    // if (!productInCart && product.stock != 0) {
    //   const updatedProduct = { ...product, stock: product.stock - 1 };
    //   setCartItems(prevCartItems => [...prevCartItems, updatedProduct]);
    // }

    //  if(product.stock != 0){
    // product.stock -= 1;
    // }
  
  

   // setCartItems(prevCartItems => [...prevCartItems, product]);

   
   // setCartItems([product]);

    
  
    
  }
     
  return (
    <div>
      <img className="small" src={product.img} />
      <h3>{product.name}</h3>
      <div>{product.price} kr</div>
      <h5>In stock: {product.stock}</h5>
      <div>
        {/* <button onClick={addToCart} >Add To Cart</button> */}
        <button onClick={() => { addToCart(); updateStock(product);} }>Add To Cart</button>
        
      </div>
    </div>
  );

}