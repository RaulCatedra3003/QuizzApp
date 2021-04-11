import React, { useContext } from 'react';

import './HomePage.scss';

import { Header } from '../../components/Header/Header';
import AuthContext from '../../context/AuthContext';

export const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='home-page'>
      {currentUser ? <Header /> : <p>No hay usuario</p>}
    </div>
  );
};
