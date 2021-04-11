import React, { useContext, useState } from 'react';

import './LoginForm.scss';

import { useForm } from '../../hooks/useForm';
import { validationSchema } from '../../utils/validationSchema';
import Input from '../Input';
import logo from '../../imgs/logo1.png';
import { logIn } from '../../firebase';
import { InputPassword } from '../InputPassword/InputPassword';
import AuthContext from '../../context/AuthContext';
import Spinner from '../Spinner';

export const LoginForm = () => {
  const [formState, handleInputChange, isValid] = useForm(
    { email: '', password: '' },
    validationSchema.logIn,
  );
  const { email, password } = formState;
  const [errorMesage, setErrorMessage] = useState(null);
  const { isLoading, setIsLoading } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const { error } = isValid();
    if (error) {
      setErrorMessage(error.message);
    } else {
      setIsLoading(true);
      setErrorMessage(undefined);
      await logIn(email, password);
    }
  };

  return (
    <div className='login-form'>
      <img src={logo} alt='App-Logo'></img>
      {isLoading ? (
        <Spinner />
      ) : (
        <form className='login-form__form' onSubmit={handleSubmit}>
          <Input
            id='email'
            labelTitle='Email:'
            type='email'
            name='email'
            onChange={handleInputChange}
            value={email}
          />
          <InputPassword
            id='password'
            labelTitle='Password:'
            name='password'
            onChange={handleInputChange}
            value={password}
          />
          <div className='login-form__form__error'>
            <p>{errorMesage}</p>
          </div>
          <button className='login-form__form__button'>Log in</button>
        </form>
      )}
    </div>
  );
};
