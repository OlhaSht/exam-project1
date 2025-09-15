const ApplicationError = require('./ApplicationError');

class InvalidUserAuthentication extends ApplicationError {
  constructor(message = 'Invalid user authentication') {
    super(message, 401);
  }
}

class InvalidUserData extends ApplicationError {
    constructor(message = 'Invalid user data') {
      super(message, 400)  
    }
}

class RefreshTokenNotProvidedError extends ApplicationError{
    constructor(message = 'No refresh token provided') {
        super(message, 400)
    }
}
module.exports = {
  InvalidUserAuthentication,
  InvalidUserData,
  RefreshTokenNotProvidedError
}