import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <h2>Logo</h2>
      <h2>Acasa</h2>
      <h2>Despre noi</h2>
      <h2>Servicii</h2>
      <h2>Galerie</h2>
      <h2>Contact</h2>
    </div>
  );
};

export default NavBar;
