const jwt = require('jsonwebtoken');
const CONSTANTS = require('../constants');
const NotUniqueEmail = require('../errors/NotUniqueEmail');
const userQueries = require('./queries/userQueries');


module.exports.login = async (req, res, next) => {
  try {
    const foundUser = await userQueries.findUser({ email: req.body.email });
    await userQueries.passwordCompare(req.body.password, foundUser.password);
    const accessToken = jwt.sign({
      firstName: foundUser.firstName,
      userId: foundUser.id,
      role: foundUser.role,
      lastName: foundUser.lastName,
      avatar: foundUser.avatar,
      displayName: foundUser.displayName,
      balance: foundUser.balance,
      email: foundUser.email,
      rating: foundUser.rating,
    }, CONSTANTS.JWT_SECRET, { expiresIn: CONSTANTS.ACCESS_TOKEN_TIME });
    await userQueries.updateUser({ accessToken }, foundUser.id);
    res.send({ token: accessToken });
  } catch (err) {
    next(err);
  }
};

module.exports.registration = async (req, res, next) => {
  try {
    const newUser = await userQueries.userCreation(req.body);
    
    const accessToken = jwt.sign({
      firstName: newUser.firstName,
      userId: newUser.id,
      role: newUser.role,
      lastName: newUser.lastName,
      avatar: newUser.avatar,
      displayName: newUser.displayName,
      balance: newUser.balance,
      email: newUser.email,
      rating: newUser.rating,
    }, CONSTANTS.JWT_SECRET, { expiresIn: CONSTANTS.ACCESS_TOKEN_TIME });
    
    await userQueries.updateUser({ accessToken }, newUser.id);
    return res.status(201).send({ token: accessToken });

  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return next(new NotUniqueEmail());
    }
    return next(err);
  }
};



// module.exports.getUser = async (req, res, next) => {
//   try {
//     console.log('Token data:', req.tokenData);
//     const user = req.tokenData;
//     res.status(200).send(user);
//   } catch (err) {
//     if(err.res.status === 500){
//       return null;
//     }
//     next(err);
//   }
// };

module.exports.updateUser = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.avatar = req.file.filename;
    }
    const updatedUser = await userQueries.updateUser(req.body,
      req.tokenData.userId);
    res.send({
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      displayName: updatedUser.displayName,
      avatar: updatedUser.avatar,
      email: updatedUser.email,
      balance: updatedUser.balance,
      role: updatedUser.role,
      id: updatedUser.id,
    });
  } catch (err) {
    next(err);
  }
};

