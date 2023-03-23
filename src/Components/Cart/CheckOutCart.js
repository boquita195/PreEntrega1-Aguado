import React, {useState} from 'react';
import {createOrder} from '../../services/firestore';
import { useNavigate } from 'react-router-dom';
import './cartwidget.css'



function CheckOutCart({cart, total}){
const [orderId, setOrderId] = useState(null);
const navigateTo = useNavigate();


async function handleCheckout(){
const orderData = {
  buyer: {},
  items: cart, 
  total: total,
  Timestamp: new Date(),
};
const id = await createOrder(orderData);

navigateTo('/checkout/${id}')
}

  return (
    <div>
      <button onClick={handleCheckout}>Terminar Compra</button>
    </div>
  )
}

export default CheckOutCart
