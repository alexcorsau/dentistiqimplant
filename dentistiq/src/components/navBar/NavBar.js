import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../images/simple-logo.jpeg';
import facebook from '../../images/Facebook.png';
import Button from '../button/Button';
import { useState } from 'react';

const NavBar = () => {
  const [buttons, setButtons] = useState([
    { text: 'Acasă', link: '/' },
    { text: 'Despre noi', link: '/despreNoi' },
    { text: 'Servicii', link: '/servicii' },
    { text: 'Galerie', link: '/galleryPage' },
    { text: 'Contact', link: '/contactPage' },
  ]);

  return (
    <div className={styles.navBar}>
      <img className={styles.img} src={logo} alt='Logo' />
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            buttonText={button.text}
            buttonLink={button.link}
          />
        );
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
