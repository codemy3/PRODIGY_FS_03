import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Local Store</h1>
      
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product._id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p>{product.description}</p>
            <p className={styles.price}>₹{product.price}</p>
            <button className={styles.addToCart} onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className={styles.cartSection}>
        <h2>Your Cart</h2>
        <ul>
  {cart.map((item, index) => (
    <li key={index}>
      {item.name} - ₹{item.price}
      <button onClick={() => handleRemoveFromCart(index)} style={{ marginLeft: '10px' }}>
        Remove
      </button>
    </li>
  ))}
</ul>

      </div>

      <Link href="/checkout">
        <button className={styles.checkoutButton}>Go to Checkout</button>
      </Link>
    </div>
  );
}
