import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import { logout } from '../../firebase';
import logo from '../../img/logo1.png';

import './Header.scss';

export const Header = () => {
  const { currentUser } = useContext(AuthContext);
  let location = useLocation();

  const handleLogut = async () => {
    await logout();
  };

  return (
    <div className='header'>
      <img src={logo} alt='Quizz App Logo'></img>
      <div className='header__links'>
        {}
        <Link
          to='/'
          className={
            location.pathname === '/'
              ? 'header__links__link selected'
              : 'header__links__link'
          }>
          New game
        </Link>
        <Link
          to='/scores'
          className={
            location.pathname === '/scores'
              ? 'header__links__link selected'
              : 'header__links__link'
          }>
          Scores
        </Link>
      </div>
      <div className='header__logout'>
        <p>Hello: {currentUser && currentUser.user.firstName}</p>
        <button onClick={handleLogut} className='header__logout__button'>
          Log out
        </button>
      </div>
    </div>
  );
};
