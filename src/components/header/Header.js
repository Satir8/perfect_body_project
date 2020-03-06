import React from 'react';
import styles from './Header.module.css';
import Burger from './Burger';
import NavPage from '../../pages/navPage/NavPage';
import { connect } from 'react-redux';

const burgerIcon = styles.hrdBurger;
const closeIcon = styles.hrdBurgerClose;

const Header = ({ isMobile, isTablet, isDesktop }) => (
  <div className={styles.hdrContainer}>
    <p className={styles.hdrLogo}>
      Slim<span>Mom</span>
    </p>
    {isMobile && <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />}
    {isTablet && (
      <>
      <ul className={styles.hdrAuthList}>
        <li className={styles.hdrAuthListItem}>Nicname</li>
        <li className={styles.hdrAuthListItem}>Выйти</li>
      </ul>
      <Burger burgerIcon={burgerIcon} closeIcon={closeIcon} />
      </>
    )}
    {isDesktop && <NavPage />}
  </div>
);

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(Header);