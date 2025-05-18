// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home'; // <-- Import Home page
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import PaymentPage from './components/PaymentPage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ComplaintsReview from './pages/ComplaintsReview';
import Navbar from './components/Navbar';
import initialProducts from './data/products';
import styles from './css/App.module.css';

const CartPageWrapper = ({ cartItems, onIncrease, onDecrease, onRemove }) => {
  const navigate = useNavigate();
  const handlePurchase = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/payment');
  };

  return (
    <CartPage
      cartItems={cartItems}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onRemove={onRemove}
      onPurchase={handlePurchase}
    />
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size, color, image) => {
    setCart(prev =>
      prev.some(item => item.id === product.id && item.size === size && item.color === color)
        ? prev.map(item =>
            item.id === product.id && item.size === size && item.color === color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, size, color, image, quantity: 1 }]
    );
  };

  const updateQuantity = (id, size, color, change) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (id, size, color) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size && item.color === color)));
  };

  return (
    <Router>
      <div className={styles.appContainer}>
        <Navbar cart={cart} />

        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page is now the root */}
            <Route
              path="/shop"
              element={<Shop products={initialProducts} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPageWrapper
                  cartItems={cart}
                  onIncrease={(id, s, c) => updateQuantity(id, s, c, 1)}
                  onDecrease={(id, s, c) => updateQuantity(id, s, c, -1)}
                  onRemove={removeFromCart}
                />
              }
            />
            <Route path="/payment" element={<PaymentPage clearCart={() => setCart([])} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/complaints-review" element={<ComplaintsReview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
