import React from 'react';
import styles from './GalleryPage.module.css';
import photo1 from '../../images/1a.jpg';
import photo2 from '../../images/2a.jpg';
import photo3 from '../../images/3a.jpg';
import photo4 from '../../images/4a.jpg';
import photo5 from '../../images/5a.jpg';
import photo6 from '../../images/6a.jpg';
import photo7 from '../../images/7a.jpg';
import photo8 from '../../images/2.jpg';
import photo9 from '../../images/card.jpg';

const GalleryPage = () => {
  return (
    <div className={styles.galleryPage}>
      <div>
        <h3 className={styles.title}>Galerie</h3>
        <div>
          <img className={styles.img} src={photo1} alt='Photo1'></img>
          <img className={styles.img} src={photo2} alt='Photo2'></img>
          <img className={styles.img} src={photo3} alt='Photo3'></img>
        </div>
        <div>
          <img className={styles.img} src={photo4} alt='Photo4'></img>
          <img className={styles.img} src={photo5} alt='Photo5'></img>
          <img className={styles.img} src={photo6} alt='Photo6'></img>
        </div>
        <div>
          <img className={styles.img} src={photo7} alt='Photo7'></img>
          <img className={styles.img} src={photo8} alt='Photo8'></img>
          <img className={styles.img} src={photo9} alt='Photo9'></img>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
