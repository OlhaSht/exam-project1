const ApplicationError = require('./ApplicationError');

class RefreshTokenMissingError extends ApplicationError {
  constructor(message = 'Refresh token is missing from cookies') {
    super(message, 401);
  }
}

class RefreshTokenNotFoundError extends ApplicationError {
  constructor(message = 'Refresh token not found in database') {
    super(message, 404);
  }
}

module.exports = {
  RefreshTokenMissingError,
  RefreshTokenNotFoundError
};
