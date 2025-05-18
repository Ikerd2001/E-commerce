import React from 'react';
import styles from '../css/App.module.css'; // Import as a module

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <header className={styles.card}>
        <h1>About Us</h1>
        <p>
          Welcome to our clothing store! We offer a wide range of trendy and affordable clothing for all occasions.
          Whether you're looking for casual wear, office attire, or party outfits — we’ve got you covered.
        </p>
      </header>

      <section className={styles.card}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality clothes that match your style while staying within your budget.
          We believe everyone should feel confident and comfortable in what they wear.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Wide Variety:</strong> From stylish jeans to elegant dresses — we offer something for every occasion.</li>
          <li><strong>Quality Materials:</strong> We use only the best fabrics to ensure comfort, durability, and confidence.</li>
          <li><strong>Affordable Prices:</strong> Fashion should be accessible. We deliver style without breaking the bank.</li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>Our Story</h2>
        <p>
          Since our founding in 2020, we’ve grown into a trusted brand for fashion lovers worldwide.
          With a passionate team and a commitment to staying ahead of trends, we’re proud to bring you clothes that truly speak your style.
        </p>
      </section>
    </section>
  );
};

export default About;
