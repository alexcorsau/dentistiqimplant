import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../images/simple-logo.jpeg';
import facebook from '../../images/Facebook.png';
import Button from '../button/Button';

const buttons = ['Acasă', 'Despre noi', 'Servicii', 'Galerie', 'Contact'];

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img className={styles.img} src={logo} alt='Logo' />
      {buttons.map((button, index) => {
        return <Button key={index} buttonText={button} />;
      })}
      <a
        href='https://www.facebook.com/dentistiq.ro'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className={styles.facebookIcon} src={facebook} alt='Facebook' />
      </a>
    </div>
  );
};

export default NavBar;
