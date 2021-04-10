import Joi from 'joi';

export const validationSchema = {
  logIn: {
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es'] },
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
  },
  singIn: {
    firstName: Joi.string().required().alphanum().min(3).max(15),
    lastName: Joi.string().required().alphanum().min(3).max(30),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es'] },
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
    confirmPassword: Joi.ref('password'),
  },
};
