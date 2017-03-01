import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './App.css';

const Header = () =>
  <header className={styles.info}>
    <p>LOGO</p>
    <IndexLink to="/" activeClassName="route--active">
      Home
    </IndexLink>
    {' · '}
    <Link to="/signup" activeClassName="route--active">
      SignUp
    </Link>
  </header>;

export default Header;
