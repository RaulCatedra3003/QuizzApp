import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { logout } from '../../firebase';

import './Header.scss';

export const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const { firstName } = currentUser.user;

  const handleLogut = async () => {
    await logout();
  };

  return (
    <div className='header'>
      <p>Hello: {firstName}</p>
      <button onClick={handleLogut} className='button'>
        Log out
      </button>
    </div>
  );
};
