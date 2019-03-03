// Imports
const express = require('express');

const app = express();
const server = require('http').Server(app);
const compression = require('compression');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { PORT } = require('./config/server');


// Middlewares
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./controllers/routes')());

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
