const logger = require('./logger');

module.exports = (err, req, res, next) => {
  console.log(err);

  // Проверяем на специфические ошибки с ограничениями по балансу
  if (err.message ===
    'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
    'new row for relation "Users" violates check constraint "Users_balance_ck"') {
    err.message = 'Not Enough money';
    err.code = 406;
  }

  // Используем логгер для записи ошибки в лог-файл
  logger(err, req, res);

  // Обработка ошибки с кодом и сообщением
  if (!err.message || !err.code) {
    res.status(500).send('Server Error');
  } else {
    res.status(err.code).send(err.message);
  }
};


// module.exports = (err, req, res, next) => {
//   console.log(err);
//   if (err.message ===
//     'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
//     err.message ===
//     'new row for relation "Users" violates check constraint "Users_balance_ck"') {
//     err.message = 'Not Enough money';
//     err.code = 406;
//   }
//   if (!err.message || !err.code) {
//     res.status(500).send('Server Error');
//   } else {
//     res.status(err.code).send(err.message);
//   }
// };
