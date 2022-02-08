import React, { useState } from 'react';
import styles from './Servicii.module.css';
import logo from '../../images/simple-logo.jpeg';
import Modal from '../modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  proteica,
  implantologie,
  chirurgie,
  ododontie,
  endodontie,
  ortodontie,
} from '../../actions/servicii';

const Servicii = () => {
  const [openModal, setOpenModal] = useState(false);
  const serviciiStore = useSelector((state) => state.serviciiReducer);
  const dispatch = useDispatch();

  return (
    <div className={styles.servicii}>
      <h1 className={styles.title}>Serviciile noastre</h1>
      <div className={styles.serviciiList}>
        <div className={styles.firstList}>
          <div>
            <img
              onClick={() => {
                setOpenModal(true);
                dispatch(proteica('PROTEICA'));
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Protetică</p>
          </div>
          <div>
            <img
              onClick={() => {
                setOpenModal(true);
                dispatch(implantologie('IMPLANTOLOGIE'));
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Implantologie</p>
          </div>
          <div>
            <img
              onClick={() => {
                setOpenModal(true);
                dispatch(chirurgie('CHIRURGIE'));
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Chirurgie</p>
          </div>
        </div>
        <div className={styles.firstList}>
          <div>
            <img
              onClick={() => {
                setOpenModal(true);
                dispatch(ododontie('ODODONTIE'));
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Ododonţie</p>
          </div>
          <div>
            <img
              onClick={() => {
                setOpenModal(true);
                dispatch(endodontie('ENDODONTIE'));
              }}
              className={styles.img}
              src={logo}
              alt='logo'
            ></img>
            <p className={styles.text}>Endodonţie</p>
          </div>
          <div>
            <img
              onClick={() => {
                setOpenModal(true);
                dispatch(ortodontie('ORTODONTIE'));
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
