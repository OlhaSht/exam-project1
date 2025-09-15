const ApplicationError = require('./ApplicationError');

class TokenVerificationError extends ApplicationError {
  constructor(message = 'Token verification failed') {
    super(message, 401);
  }
}

module.exports = TokenVerificationError;
