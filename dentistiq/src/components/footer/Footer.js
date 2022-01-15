import React from 'react';
import styles from './Footer.module.css';

const program = [
  'Luni, Miercuri și Joi: 15:00 - 21:00',
  'Marți: 09:00 - 15:00',
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>
        <u className={styles.programTitle}>Program:</u>
      </h1>
      <div className={styles.program}>
        {program.map((schedule, index) => {
          return <h2 key={index}>{schedule}</h2>;
        })}
      </div>
    </div>
  );
};

export default Footer;
