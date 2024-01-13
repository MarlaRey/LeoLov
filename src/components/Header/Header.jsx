// Header.jsx
import React from 'react';
import styles from './Header.module.scss';
import BurgerMenu from '../BugerMenu/BurgerMenu';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headers}>
        <h1><span>Leo</span>-Lov</h1>
        <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
      </div>
      <BurgerMenu />
    </header>
  );
};
