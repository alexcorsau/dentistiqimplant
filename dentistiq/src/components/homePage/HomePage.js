import React from 'react';
import styles from './HomePage.module.css';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import Content from '../content/Content';
import ContactPage from '../contactPage/ContactPage';
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default HomePage;
