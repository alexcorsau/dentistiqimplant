import React from 'react';
import styles from './Echipa.module.css';
import echipa from '../../images/echipa.jpeg';

const Echipa = () => {
  return (
    <div className={styles.echipa}>
      <div className={styles.echipaImg}>
        <img src={echipa} alt="echipa" className={styles.img}/>
      </div>
    </div>
  );
};

export default Echipa;
