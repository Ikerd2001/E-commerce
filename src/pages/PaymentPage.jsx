import React from 'react';

const PaymentPage = ({ clearCart }) => {
  return (
    <div>
      <h2>Payment Page</h2>
      <button onClick={clearCart}>Complete Purchase</button>
    </div>
  );
};

export default PaymentPage;
