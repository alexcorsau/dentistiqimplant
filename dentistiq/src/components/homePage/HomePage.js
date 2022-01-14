import React from 'react';
import styles from './HomePage.module.css';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import Content from '../content/Content';

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
