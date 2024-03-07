import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from "./ItemList";
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items)
const dispatch = useDispatch();

const handleClearCart =() => {
  dispatch(clearCart());
}
  
  return (
    <div className="text-center m-4 p-4">
      
    <h1 className="font-bold text-2xl"> Cart</h1>  
           
<button className="bg-black text-white rounded-md p-2" onClick={handleClearCart}> Clear Cart</button>
     {cartItems.length===0 && (
      <h1> Card is empty. Add items to the cart</h1>
     )}     
<ItemList items={cartItems}/>
    </div>
  )
}

export default Cart