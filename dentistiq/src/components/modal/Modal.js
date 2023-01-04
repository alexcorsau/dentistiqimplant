import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.title}>
          <h1>{props.servicii.serviciu}</h1>
        </div>
        <div className={styles.body}>
          <p>{props.servicii.text}</p>
        </div>
        <div className={styles.titleCloseButton}>
          <button
            className={styles.xBtn}
            onClick={() => props.closeModal(false)}
          >
            {' '}
            Close{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
