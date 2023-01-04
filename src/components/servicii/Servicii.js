import React, { useState } from 'react';
import styles from './Servicii.module.css';
import logo from '../../images/simple-logo.jpeg';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import serviciiActions from '../../actions/servicii';

const Servicii = () => {
  const [openModal, setOpenModal] = useState(false);
  const serviciiStore = useSelector((state) => state.serviciiReducer);

  return (
    <div className={styles.servicii}>
      <h1 className={styles.title}>Serviciile noastre</h1>
      <div className={styles.serviciiList}>
        <div className={styles.firstList}>
          <div className={styles.serviciu}>
            <img
              onClick={() => {
                setOpenModal(true);
                serviciiActions.protetica('Protetica');
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Protetică</p>
          </div>
          <div className={styles.serviciu}>
            <img
              onClick={() => {
                setOpenModal(true);
                serviciiActions.implantologie();
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Implantologie</p>
          </div>
          <div className={styles.serviciu}>
            <img
              onClick={() => {
                setOpenModal(true);
                serviciiActions.chirurgie();
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Chirurgie</p>
          </div>
        </div>
        <div className={styles.firstList}>
          <div className={styles.serviciu}>
            <img
              onClick={() => {
                setOpenModal(true);
                serviciiActions.ododontie();
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Ododonţie</p>
          </div>
          <div className={styles.serviciu}>
            <img
              onClick={() => {
                setOpenModal(true);
                serviciiActions.endodontie();
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Endodonţie</p>
          </div>
          <div className={styles.serviciu}>
            <img
              onClick={() => {
                setOpenModal(true);
                serviciiActions.ortodontie();
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Ortodonție</p>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal closeModal={setOpenModal} servicii={serviciiStore} />
      )}
    </div>
  );
};

export default Servicii;
