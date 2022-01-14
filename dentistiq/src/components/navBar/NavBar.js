import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../images/simple-logo.jpeg';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img className={styles.img} src={logo} />
      <button className={styles.button}>Acasa</button>
      <button className={styles.button}>Despre noi</button>
      <button className={styles.button}>Servicii</button>
      <button className={styles.button}>Galerie</button>
      <button className={styles.button}>Contact</button>
      <button className={styles.button}>FB</button>
    </div>
  );
};

export default NavBar;
