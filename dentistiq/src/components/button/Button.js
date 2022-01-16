import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to={props.buttonLink}>
      <button className={styles.button}>{props.buttonText}</button>
    </Link>
  );
};

export default Button;
