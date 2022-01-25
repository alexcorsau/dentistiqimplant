import React from 'react';
import styles from './HomePage.module.css';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import Content from '../content/Content';
import ContactPage from '../contactPage/ContactPage';
import Servicii from '../servicii/Servicii';
import DespreNoi from '../despreNoi/DespreNoi';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from '../galleryPage/GalleryPage';

const HomePage = () => {
  return (
    <Router>
      <div className={styles.homePage}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/contactPage' element={<ContactPage />} />
          <Route path='/galleryPage' element={<GalleryPage />} />
          <Route path='/servicii' element={<Servicii />} />
          <Route path='/despreNoi' element={<DespreNoi />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default HomePage;
