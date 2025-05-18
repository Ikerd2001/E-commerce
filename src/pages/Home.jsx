
import React from 'react';
import styles from '../css/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <video
          className={styles.headerVideo}
          src="/videos/nike.mp4" 
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className={styles.headerOverlay}>
          <h1>Welcome to Our Store</h1>
          <p>Discover amazing products and deals!</p>
        </div>
      </header>

      <section className={styles.featuresSection}>
        <h2>Why Shop With Us?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3>Quality Products</h3>
            <p>We offer only the best products sourced from trusted suppliers.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Fast Shipping</h3>
            <p>Get your orders delivered quickly and reliably.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Excellent Support</h3>
            <p>Our customer service team is here to help you 24/7.</p>
          </div>
        </div>
      </section>
      <footer>
        <p>copy right shopping store 2025</p>
      </footer>
    </div>
  );
};

export default Home;
