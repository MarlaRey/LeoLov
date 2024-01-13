// BurgerMenu.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsOpen(false); // Luk menuen ved ændring af vinduets størrelse
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.burgerMenu} ${windowWidth <= 1000 ? styles.visible : ''}`}>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
        <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <NavLink to="/" className={styles.menuLink} onClick={toggleMenu}>
            Hjem
          </NavLink>
          <NavLink to="/advokaterne" className={styles.menuLink} onClick={toggleMenu}>
            Advokaterne
          </NavLink>
          <NavLink to="/about" className={styles.menuLink} onClick={toggleMenu}>
            Om LeoLov
          </NavLink>
          <NavLink to="/contact" className={styles.menuLink} onClick={toggleMenu}>
            Kontakt
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
