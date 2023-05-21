const Joi = require('joi');

const id = Joi.string().uuid();
const email = Joi.string().email();
const username = Joi.string()
const firstname = Joi.string().min(3).max(15);
const lastname = Joi.string().min(3).max(15);
const password = Joi.string().min(4).max(12);
const favorites = Joi.object();

const createUserScheme = Joi.object({
  email: email.required(),
  username: username.required(),
  firstname: firstname.required(),
  lastname: lastname.required(),
  password: password.required(),
  favorites: favorites.default({}),
});

const updateUserScheme =  Joi.object({
  email: email,
  username: username,
  firstname: firstname,
  lastname: lastname,
  password: password,
  favorites: favorites,
});

const getUserScheme = Joi.object({
  id: id.required(),
});

module.exports = { createUserScheme, updateUserScheme, getUserScheme};