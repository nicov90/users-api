const boom = require('@hapi/boom');

//! MIDDLEWARE
const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const {err}= schema.validate(data, { abortEarly: false});
    if(err){
      next(boom.badRequest(err));
    }else{
      next();
    }
  }
};

module.exports = validatorHandler;