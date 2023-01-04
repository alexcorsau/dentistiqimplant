import React from 'react';
import styles from './Content.module.css';
import cover from '../../images/new-cover.jpg';

const Content = () => {
  return (
    <div className={styles.content}>
      <img className={styles.img} src={cover} alt='Cover' />
    </div>
  );
};

export default Content;
