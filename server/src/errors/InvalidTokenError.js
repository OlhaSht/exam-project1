const ApplicationError = require('./ApplicationError');

class InvalidTokenError extends ApplicationError {
  constructor(message = 'Invalid token') {
    super(message, 401);
  }
}

module.exports = InvalidTokenError;
