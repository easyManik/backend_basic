const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { common } = require('./src/middleware/common');

const router = require('./src/routes/index');

const app = express();

const port = 4200;

app.use(cors());
app.use(morgan('dev'));

app.use('/img', express.static('./tmp'));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use('/img', express.static('./tmp'));

app.all('*', (req, res, next) => {
  common(res, 404, false, null, '404 Not Found');
});

app.get('/', (req, res, next) => {
  res.status(200).json({ status: 'success', statusCode: 200 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
