import React from 'react';
import styles from './DespreNoi.module.css';

const DespreNoi = () => {
  return (
    <div className={styles.despreNoi}>
      <h3 className={styles.title}>Despre noi</h3>
      <h4 className={styles.text}>
        La Dentistiq Implant vrem să demonstrăm că vizita la stomatolog poate fi o
        experiență plăcută, care nu va mai fi privită cu groază sau emoție. În
        fiecare locație Dentistiq vei găsi aceleași standarde de calitate a
        actului medical și a materialelor utilizate, accentul pus pe igienă și
        siguranță și aceeași abordare zâmbitoare și prietenoasă, astfel încât,
        oriunde ne vei vizita, vei avea parte de o experiență cât mai bună.
      </h4>
    </div>
  );
};

export default DespreNoi;
