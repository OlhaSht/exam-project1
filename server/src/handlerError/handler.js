const logger = require('./logger');

module.exports = (err, req, res, next) => {
  console.log("🔥 FULL ERROR OBJECT:", JSON.stringify(err, null, 2));

  if (err.message === 'Unauthorized') {
    err.code = 401;
    err.message = err.message || 'Unauthorized';
  };

  if (err.message ===
    'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
    'new row for relation "Users" violates check constraint "Users_balance_ck"') {
    err.message = 'Not Enough money';
    err.code = 406;
  }
  
  logger(err, req);

    if (res.headersSent) {
    return next(err); 
  }
  
  if (!err.message || !err.code) {
    res.status(500).send('Server Error');
  } else {
    res.status(err.code).send(err.message);
  }
};



