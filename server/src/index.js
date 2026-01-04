const http = require('http');
const cookieParser = require('cookie-parser');
// ============================
require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
// app.use('/public', express.static('public'));
const path = require('path');
app.use('/public', express.static(path.resolve(__dirname, '..', 'public')));
console.log(
  'STATIC DIR:::::::::::::::::::::::>>>>>>>>>>>>>',
  path.resolve(__dirname, '..', 'public')
);
app.use(router);
app.use(handlerError);

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
controller.createConnection(server);
