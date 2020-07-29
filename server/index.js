const express = require('express');
const app = express();
const port = 3079;
const router = require('./router');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port} 🚀🚀🚀`); // eslint-disable-line no-console
});
