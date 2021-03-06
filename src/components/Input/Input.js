import React from 'react';

import './Input.scss';

export const Input = ({ id, labelTitle, ...props }) => {
  return (
    <div className='input'>
      <label htmlFor={id}>{labelTitle}</label>
      <input id={id} {...props} />
    </div>
  );
};
