import '../css/App.css'
import { useEffect, useState } from 'react'
import Product from './Product'
import Database from './Database'
import Header from './Header'
import Cart from './Cart'

export default function App(){
    const [cartItems, setCartItems] = useState([]);
    const { products } = useState();
console.log(products)
    console.log(cartItems)
 
    
    return (
        <div className='App'>  
        <Header></Header>
            <div className='row'>
            <Database products={products}/>
            <Cart cartItems={cartItems}/>
            </div>
        </div>
    )
}
