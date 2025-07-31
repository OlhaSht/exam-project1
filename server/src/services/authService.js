const JwtService = require('./jwtService');
const _ = require('lodash');

 const prepareUser = (user) => _.omit(user.get(), ['password']);

module.exports.createSession = async (user) => {
  const tokenPair = await JwtService.createTokenPair(user);
  console.log('TOKEN PAIR:', tokenPair);
  const existingTokens = await user.getRefreshTokens();

  if (existingTokens.length > 0) {
    const [firstToken] = existingTokens;
    await firstToken.update({ value: tokenPair.refresh });
  } else {
    await user.createRefreshToken({ value: tokenPair.refresh });
  }
  return {
    user: prepareUser(user),
    tokenPair
  };
};

module.exports.refreshSession = async (refreshTokenInstance) => {
  const user = await refreshTokenInstance.getUser();
  const tokenPair = await JwtService.createTokenPair(user);
  await refreshTokenInstance.update({ value: tokenPair.refresh });

  return {
    user: prepareUser(user),
    tokenPair
  };
};
