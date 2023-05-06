import React, { useState } from 'react';
import Product from './Product';
import { useState, useEffect } from 'react';

export default function Database() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://slutproject-produkt-advjs-default-rtdb.europe-west1.firebasedatabase.app/products.json');
      const data = await response.json();
      setProducts(data);
      console.log(data)
    }
    fetchProducts();
  }, []);

  return (
    
 <main className="block col-2">
     <h2>Products</h2>
     <div className="row">
        {products.map((product) => (
         <Product key={product.id} product={product}></Product>
         
       ))}
     </div>
   </main>

    
  );
  

}
