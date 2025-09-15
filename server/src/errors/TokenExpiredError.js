const ApplicationError = require('./ApplicationError');

class TokenExpiredError extends ApplicationError {
  constructor(message = 'Token expired') {
    super(message, 401);
  }
}

module.exports = TokenExpiredError;
