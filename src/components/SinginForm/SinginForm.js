import React, { useState } from 'react';

import './SinginForm.scss';

import { useForm } from '../../hooks/useForm';
import { validationSchema } from '../../utils/validationSchema';
import Input from '../Input';
import logo from '../../imgs/logo1.png';
import { singIn } from '../../firebase';

export const SinginForm = () => {
  const [formState, handleInputChange, isValid] = useForm(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema.singIn,
  );
  const [errorMesage, setErrorMessage] = useState(null);
  const { firstName, lastName, email, password, confirmPassword } = formState;

  const handleSubmit = async e => {
    e.preventDefault();
    const { error } = isValid();
    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage(null);
      const { user } = await singIn(email, password);
      console.log(user.uid);
      //TODO: regist new user in our database;
    }
  };

  return (
    <div className='singin-form'>
      <img src={logo} alt='App-Logo'></img>
      <form className='singin-form__form' onSubmit={handleSubmit}>
        <Input
          id='firstName'
          labelTitle='First Name:'
          type='text'
          name='firstName'
          onChange={handleInputChange}
          value={firstName}
        />
        <Input
          id='lastName'
          labelTitle='Last Name:'
          type='text'
          name='lastName'
          onChange={handleInputChange}
          value={lastName}
        />
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
        <Input
          id='confirmPassword'
          labelTitle='Confirm password:'
          type='password'
          name='confirmPassword'
          onChange={handleInputChange}
          value={confirmPassword}
        />
        <div className='singin-form__form__error'>
          <p>{errorMesage}</p>
        </div>
        <button className='singin-form__form__button'>Sing In</button>
      </form>
    </div>
  );
};
