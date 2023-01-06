import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../images/simple-logo.jpeg';
import facebook from '../../images/Facebook.png';
import Button from '../button/Button';
import { useSelector } from 'react-redux';
import { buttons } from '../../actions/buttons';

const NavBar = () => {
  const buttonsPath = useSelector((state) => state.pathReducer);

  return (
    <div className={styles.navBar}>
      <img className={styles.img} src={logo} alt='Logo' />
      {buttonsPath.map((button, index) => {
        return (
          <Button
            click={() => buttons()}
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
