import React, { useState } from 'react';

import './LoginForm.scss';

import { useForm } from '../../hooks/useForm';
import { validationSchema } from '../../utils/validationSchema';
import Input from '../Input';
import logo from '../../imgs/logo1.png';

export const LoginForm = () => {
  const [formState, handleInputChange, isValid] = useForm(
    { email: '', password: '' },
    validationSchema.logIn,
  );
  const { email, password } = formState;
  const [errorMesage, setErrorMessage] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const { error } = isValid();
    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage(undefined);
      //TODO: crear login con firebase
    }
  };

  return (
    <div className='login-form'>
      <img src={logo} alt='App-Logo'></img>
      <form className='login-form__form' onSubmit={handleSubmit}>
        <Input
          id='email'
          labelTitle='Email:'
          type='email'
          name='email'
          onChange={handleInputChange}
          value={email}
        />
        <Input
          id='password'
          labelTitle='Password:'
          type='password'
          name='password'
          onChange={handleInputChange}
          value={password}
        />
        <div className='login-form__form__error'>
          <p>{errorMesage}</p>
        </div>
        <button className='login-form__form__button'>Log In</button>
      </form>
    </div>
  );
};
