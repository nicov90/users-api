const Joi = require('joi');

const id = Joi.string().uuid();
const email = Joi.string().email();
const name = Joi.string().min(3).max(15);
const lastname = Joi.string().min(3).max(15);
const password = Joi.string().min(4).max(10);

const createUserScheme = Joi.object({
  email: email.required(),
  name: name.required(),
  lastname: lastname.required(),
  password: password.required(),
});

const updateUserScheme =  Joi.object({
  email: email,
  name: name,
  lastname: lastname,
  password: password
});

const getUserScheme = Joi.object({
  id: id.required(),
});

module.exports = { createUserScheme, updateUserScheme, getUserScheme};