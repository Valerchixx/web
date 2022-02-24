import React from 'react';
import styles from './css/header.module.css';
import logo from './images/logo.svg';

function Header() {
  return (
    <div>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.navWrap}>
          <a className={styles.linkHeader} href="#">Home</a>
          <a className={styles.linkHeader} href="#">Work</a>
          <a className={styles.linkHeader} href=".contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
