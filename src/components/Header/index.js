import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.css';

export const Header = () => (
  <div>
    <IndexLink to="/" activeClassName="route--active">
      Home
    </IndexLink>
    {' · '}
    <Link to="/signup" activeClassName="route--active">
      SignUp
    </Link>
  </div>
);

export default Header;
