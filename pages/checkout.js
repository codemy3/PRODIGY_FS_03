// pages/checkout.js
import { useEffect, useState } from 'react';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    setTotalPrice(storedCart.reduce((acc, item) => acc + item.price, 0));
  }, []);

  const handleCheckout = () => {
    // Handle checkout process here (e.g., integrate with a payment gateway)
    alert('Checkout process started!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
        <p>Total: ₹{totalPrice}</p>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}
