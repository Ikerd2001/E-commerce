import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onIncrease, onDecrease, onRemove, onPurchase }) => {
  return (
    <>
      <Cart
        cartItems={cartItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
        onPurchase={onPurchase}
      />
    </>
  );
};

export default CartPage;
