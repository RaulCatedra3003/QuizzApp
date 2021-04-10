import React from 'react';

import './HomePage.scss';

import { logout } from '../../firebase';

export const HomePage = () => {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
