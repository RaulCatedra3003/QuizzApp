import { useState } from 'react';
import Joi from 'joi';

export const useForm = (initialState = {}, validationSchema) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const isValid = () => {
    return Joi.object(validationSchema).validate(formState, {
      aboutEarly: false,
    });
  };

  return [formState, handleInputChange, isValid];
};
