import React from 'react';
import styles from './Echipa.module.css';
import echipa from '../../images/echipa.jpeg';
import * as colors from '../../styles/colors'

const Echipa = () => {
  return (
    <div className={styles.echipa}>
      {/* <h1 className={styles.title}>Echipa</h1> */}
      <div className={styles.image}>
        <img src={echipa}/>
      </div>
    </div>
  );
};

export default Echipa;
