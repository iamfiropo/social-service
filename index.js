const express = require('express');
require('dotenv').config();
require('./src/config/mongoose');
const Route = require('./src/routes');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/', Route(router))

app.get('/posts', (req, res) => {
  res.json('I am the post endpoint')
})

app.listen(port, () => {
  console.log('Server is listening on port: 8080')
});