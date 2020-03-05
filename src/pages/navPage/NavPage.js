import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavPage.module.css';

const NavPage = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navList}>
      <li>
        <NavLink
          to='/diary'
          className={styles.navListItem}
          activeClassName={styles.navListItemActive}
        >
          Дневник
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/calculator'
          className={styles.navListItem}
          activeClassName={styles.navListItemActive}
        >
          Калькулятор
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/achievements'
          className={styles.navListItem}
          activeClassName={styles.navListItemActive}
        >
          Достижения
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavPage;
