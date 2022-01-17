const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./src/config/mongoose');
const Route = require('./src/routes');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use('/', Route(router))

app.listen(port, () => {
  console.log('Server is listening on port: 8080')
});