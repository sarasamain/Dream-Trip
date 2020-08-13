const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')

const port = 3079;
const router = require('./router');
const cors = require('cors');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));

app.use(bodyParser.urlencoded(
  {extended: true}
))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(router);

app.listen(port, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
  } else {
  console.log(`Server is listening at http://localhost:${port} 🚀🚀🚀`); // eslint-disable-line no-console
  }
});
