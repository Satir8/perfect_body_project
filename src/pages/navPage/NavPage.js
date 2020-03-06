import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavPage.module.css';
import { connect } from 'react-redux';
import Nickname from '../../components/header/Nickname';

const NavPage = ({ auth, isMobile, isDesktop, openExitModal }) => {
  console.log()
  return (
  <nav className={styles.navigation}>
    {auth ? (
      <>
        <div className={styles.navList}>
          <NavLink
            to='/diary'
            className={styles.navListItem}
            activeClassName={styles.navListItemActive}
          >
            Дневник
          </NavLink>

          <NavLink
            to='/calculator'
            className={styles.navListItem}
            activeClassName={styles.navListItemActive}
          >
            Калькулятор
          </NavLink>

          <NavLink
            to='/achievements'
            className={styles.navListItem}
            activeClassName={styles.navListItemActive}
          >
            Достижения
          </NavLink>
          {isMobile && <p onClick={openExitModal} className={styles.navListItem}>Выход</p>}
        </div>
        {isDesktop && <Nickname onOpenExitModal={openExitModal} />}
      </>
    ) : (
      <div className={styles.loginContainer}>
        <NavLink
          to='/authorization'
          className={styles.navListItem}
          activeClassName={styles.navListItemActive}
        >
          Вход
        </NavLink>
        <NavLink
          to='/authorization'
          className={styles.navListItem}
          activeClassName={styles.navListItemActive}
        >
          Регистрация
        </NavLink>
      </div>
    )}
  </nav>
)
};

const mapStateToProps = state => ({
  auth: state.session.authenticated
});

export default connect(mapStateToProps)(NavPage);