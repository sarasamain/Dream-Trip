const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const port = 3079;
const router = require('./router');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded(
  {extended: true}
))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(router);
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port} 🚀🚀🚀`); // eslint-disable-line no-console
});
