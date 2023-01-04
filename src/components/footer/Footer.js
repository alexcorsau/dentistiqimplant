import React from 'react';
import styles from './Footer.module.css';
import logo from '../../images/logo.jpeg';

const program = [
  // 'Luni, Miercuri și Joi: 15:00 - 21:00',
  'Luni, Miercuri, Joi: 15:00 - 21:00',
  'Marți: 09:00 - 15:00',
  'Vineri, Sâmbătă, Duminică: Închis'
];

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContactData}>
          <div className={styles.footerContactDataHeader}><p>Programări:</p></div>
          <div className={styles.program}>
            <p className={styles.telephoneNumber}>Telefon:  <a href="tel:0040752517389" rel="nofollow noopener noreferrer">0752 517 389 </a><span className={styles.footerIcons}>&#128222;</span></p>
            <p className={styles.email}>Email: <a href='mailto: dr.cosmincrisan@gmail.com' target="_blank" rel="noreferrer">dr.cosmincrisan@gmail.com </a><span className={styles.footerIcons}>&#x1F4E7;</span></p>
          </div>
        </div>

        <div className={styles.footerLogo}>
          <img className={styles.img} src={logo} alt='Logo' />
        </div>

        <div className={styles.timeTable}>
          <div className={styles.programTitle}><p>Orar:</p></div>
          <div className={styles.program}>
            {program.map((schedule, index) => {
              return <p  className={styles.programRow} key={index}>{schedule}</p>;
            })}
          </div>
        </div>
    </div>
  );
};

export default Footer;
