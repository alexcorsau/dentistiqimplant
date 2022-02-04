import React from 'react';
import Map from './contactMap/contactMap';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Map></Map>
    </div>
  );
};

export default ContactPage;
