import '../css/App.css'
import { useEffect, useState } from 'react'
import Header from './Header'
import Cart from './Cart'
import CartItem from './CartItem'
import Product from './Product'

export default function App(){
    const [cartItems, setCartItems] = useState([]);

     const [totalPrice, setTotalPrice] = useState(0);

     const [products, setProducts] = useState([]);

     


     useEffect(() => {
       async function getFireBase() {
         const response = await fetch('https://slutproject-produkt-advjs-default-rtdb.europe-west1.firebasedatabase.app/products.json');
         const data = await response.json();
         setProducts(data);
       }
       getFireBase();
     }, []);



     function updateStock(product){
        if(product.stock != 0){
            product.stock -= 1;
            }
        
     }
 
     console.log(products)
    
    return (
        <div className='App'>  
        <Header></Header>
            <div className='row'>
       
            <main className="block col-2">
          <h2>Products</h2>
        <div className="row">
            {products.map((product,index) => (
         <Product key={index} product={product} setCartItems={setCartItems} cartItems={cartItems} updateStock={updateStock}></Product>
         ))}
           </div>
           </main>
            {/* <Cart cartItems={cartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} /> */}

       
        {/* // <Product key={index} img ={product.img} name={product.name} price={product.price} stock={product.stock } setCartItems={setCartItems}></Product> */}
    
            </div>
        </div>
    )
}
