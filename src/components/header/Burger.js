import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Burger = ({ location, burgerIcon, closeIcon }) => (
  <Link
    to={location.pathname === '/nav' ? '/' : '/nav'}
    className={location.pathname !== '/nav' ? burgerIcon : closeIcon}
  ></Link>
);

export default withRouter(Burger);
