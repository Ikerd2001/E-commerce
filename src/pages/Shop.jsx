import React from 'react';
import Product from '../components/Product';
import styles from '../css/Shop.module.css';

const Shop = ({ products, addToCart }) => (
  <div className={styles.shopContainer}>
    <h1 className={styles.shopHeader}>Shop Products</h1>
    <div className={styles.productGrid}>
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  </div>
);

export default Shop;
