import React from 'react';
import styles from '../css/CartPage.module.css';

const Cart = ({ cartItems, onIncrease, onDecrease, onRemove, onPurchase }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (1 - item.discount) * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartHeader}>Shopping Bag</h2>

      <div className={styles.cartItems}>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#64748b' }}>
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className={styles.cartItem}
            >
              <img
                src={item.image}
                alt={item.name}
                className={styles.itemImage}
              />

              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <div
                  className={styles.colorDisplay}
                  style={{ backgroundColor: item.color }}
                  title={`Color: ${item.color}`}
                />
                <p>
                  Price: ${(
                    item.price *
                    (1 - item.discount) *
                    item.quantity
                  ).toFixed(2)}
                </p>
                <div className={styles.quantityControls}>
                <span className={styles.quantityButton}>Cart: {item.quantity}</span>
                  <button className={styles.quantityButton} aria-label="Decrease quantity" onClick={() => onDecrease(item.id, item.size, item.color)}>
                    −
                  </button>
                  <button className={styles.quantityButton} aria-label="Increase quantity" onClick={() => onIncrease(item.id, item.size, item.color)}>
                    +
                  </button>
                </div>
              </div>

              <div className={styles.priceSection}>
                <button
                  className={styles.removeButton}
                  onClick={() => onRemove(item.id, item.size, item.color)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.cartSummary}>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button
          className={styles.checkoutButton}
          onClick={onPurchase}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
