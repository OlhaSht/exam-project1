const ApplicationError = require('./ApplicationError');

class MissingTokenError extends ApplicationError {
  constructor(message = 'Need token') {
    super(message, 401);
  }
}

module.exports = MissingTokenError;