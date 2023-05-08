// import '../css/App.css'
// import CartItem from './CartItem';


// export default function Cart(props){

//     //const {cartItems, totalPrice} = props;

// //    const {cartItems} = props;

// const {cartItems, handleAdd, removeAdd} = props;


//     // const totalPrice = cartItems.reduce((updateprice, currentItem) => {
//     //         return updateprice + currentItem.price;
//     //       }, 0);

//     //console.log('cart items', cartItems)

//     return(
//         <aside className="block col-1">
//           <h2>Cart Items</h2>
//           <div>
//             {cartItems.length === 0 ? (
//              <div>Cart is empty</div>
//              ) :(
           
//                 cartItems.map((item,index) => (
//                   <CartItem key={index} item={item}/>
                
//                 ))
//             )}
//             <div>
//                 {/* Total price: {totalPrice} kr */}
//             </div>
//               </div>
//               <button>Checkout</button>
//         </aside>
//       )
// }