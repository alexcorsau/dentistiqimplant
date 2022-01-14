import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>Program:</h1>
      <div className={styles.program}>
        <h2>Luni, Miercuri si Joi: 15:00 - 21:00</h2>
        <h2>Marti: 09:00 - 15:00</h2>
      </div>
    </div>
  );
};

export default Footer;
