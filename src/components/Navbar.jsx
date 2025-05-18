// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/App.module.css';

const Navbar = ({ cart }) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={styles.navContainer}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
        }
      >
        Cart {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/complaints-review"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
        }
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default Navbar;
