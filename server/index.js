const express = require('express');
const app = express();
const port = 3079;
const router = require('./router');
const cors = require('cors');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);
// app.get('*', (req, res) => {
//   res.status(404).send('Sorry, not found 😞');
// });
app.listen(port, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
  } else {
  console.log(`Server is listening at http://localhost:${port} 🚀🚀🚀`); // eslint-disable-line no-console
  }
});
