import React, { useState } from 'react';

import LoginForm from '../../components/LoginForm';
import SinginForm from '../../components/SinginForm';

import './LoginPage.scss';

export const LoginPage = () => {
  const [isSinginUp, setIsSinginUp] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    isSinginUp ? setIsSinginUp(false) : setIsSinginUp(true);
  };

  return (
    <div className='login-page'>
      {!isSinginUp ? <LoginForm /> : <SinginForm />}
      <div className='login-page__buttons'>
        <p>{!isSinginUp ? "Don't have an account?" : 'Have an account?'}</p>
        <button onClick={handleClick} className='login-page__buttons__button'>
          {!isSinginUp ? 'Sing up' : 'Log in'}
        </button>
      </div>
    </div>
  );
};
