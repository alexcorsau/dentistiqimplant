import React, { useState } from 'react';
import styles from './Servicii.module.css';
import logo from '../../images/simple-logo.jpeg';
import Modal from '../modal/Modal';

const Servicii = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.servicii}>
      <h1 className={styles.title}>Serviciile noastre</h1>
      <div className={styles.serviciiList}>
        <div className={styles.firstList}>
          <div>
            <img
              onClick={() => setOpenModal(true)}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Protetică</p>
          </div>
          <div>
            <img className={styles.img} src={logo} alt='logo'></img>
            <p className={styles.text}>Implantologie</p>
          </div>
          <div>
            <img className={styles.img} src={logo} alt='logo'></img>
            <p className={styles.text}>Chirurgie</p>
          </div>
        </div>
        <div className={styles.firstList}>
          <div>
            <img className={styles.img} src={logo} alt='logo'></img>
            <p className={styles.text}>Ododonţie</p>
          </div>
          <div>
            <img className={styles.img} src={logo} alt='logo'></img>
            <p className={styles.text}>Endodonţie</p>
          </div>
          <div>
            <img className={styles.img} src={logo} alt='logo'></img>
            <p className={styles.text}>Ortodonție</p>
          </div>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default Servicii;
