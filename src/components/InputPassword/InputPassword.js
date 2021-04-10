import React, { useState } from 'react';

import './InputPassword.scss';

export const InputPassword = ({ id, labelTitle, ...props }) => {
  const [viewPassword, setViewPassword] = useState(false);

  const handleToglePasswordView = () => {
    if (viewPassword) {
      setViewPassword(false);
    } else {
      setViewPassword(true);
    }
  };

  return (
    <div className='input-password'>
      <label htmlFor={id}>{labelTitle}</label>
      <div className='input-password__input'>
        <input id={id} {...props} type={viewPassword ? 'text' : 'password'} />
        {viewPassword ? (
          <i
            className='bx bxs-low-vision'
            onClick={handleToglePasswordView}></i>
        ) : (
          <i className='bx bx-show-alt' onClick={handleToglePasswordView}></i>
        )}
      </div>
    </div>
  );
};
