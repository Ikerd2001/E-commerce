import React, { useState } from 'react';
import styles from '../css/Shop.module.css';

const Product = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleAddToCart = () => {
    const selectedColor = product.variants.colors[selectedColorIndex];
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToCart(product, selectedSize, selectedColor, product.images[selectedColorIndex]);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
      <img 
        src={product.images[selectedColorIndex]} 
        alt={product.name} 
        className={styles.productImage}
      />

        {product.isNew && <span className={styles.newBadge}>New Arrival</span>}
        {product.discount > 0 && (
          <span className={styles.discountBadge}>-{product.discount * 100}%</span>
        )}
      </div>

      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{product.name}</h3>
        
        <div className={styles.colorSelector}>
          {product.variants.colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={`${styles.colorButton} ${
                index === selectedColorIndex ? styles.selected : ''
              }`}
              onClick={() => setSelectedColorIndex(index)}
            />
          ))}
        </div>

        <div className={styles.sizeSelector}>
          {product.variants.sizes.map(size => (
            <button
              key={size}
              className={`${styles.sizeButton} ${
                size === selectedSize ? styles.selected : ''
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className={styles.priceContainer}>
          {product.discount > 0 && (
            <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
          )}
          <span className={styles.currentPrice}>
            ${(product.price * (1 - product.discount)).toFixed(2)}
          </span>
        </div>

        <button 
          className={styles.addButton} 
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
