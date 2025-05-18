// src/pages/PaymentPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ clearCart }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Integrate real payment gateway here (Stripe, PayPal, etc.)

    // Simulate payment success
    alert('Payment successful! Thank you for your purchase.');

    // Clear the cart after successful payment
    if (clearCart) clearCart();

    // Redirect to home or order confirmation page
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 400, margin: '3rem auto', padding: 24, backgroundColor: '#f9fafb', borderRadius: 12 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Checkout</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label>
          Card Number
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            required
            maxLength={19}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>
        <label>
          Expiration Date
          <input
            type="text"
            placeholder="MM/YY"
            required
            maxLength={5}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>
        <label>
          CVV
          <input
            type="password"
            placeholder="123"
            required
            maxLength={4}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: 12,
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
