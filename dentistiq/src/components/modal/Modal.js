import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        {/* <div className={styles.titleCloseButton}>
          <button
            className={styles.xBtn}
            onClick={() => props.closeModal(false)}
          >
            {' '}
            Close{' '}
          </button>
        </div> */}
        <div className={styles.title}>
          <h1>Proteica</h1>
        </div>
        <div className={styles.body}>
          <p>
            Protetica are ca scop reconstruirea dinţilor cu pierderi
            semnificative de structură sau a celor lipsă, pentru a avea o
            dantură echilibrată estetic şi funcţional. Lucrările sunt realizate
            în colaborare cu tehnicieni dentari. În funcţie de numărul şi tipul
            dinţilor care lipsesc, în cadrul unei consultaţii va fi analizată
            situaţia, iar medicul vă va prezenta opţiunile de tratament
            aplicabile în situaţia dumneavoastră.
          </p>
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
        {/* <div className={styles.footer}>
          <button>Cancel</button>
          <button>Continue</button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
