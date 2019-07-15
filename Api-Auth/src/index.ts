import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import config from 'config/local'
import db from 'config/db'
import routes from 'routes'

mongoose.connect(db.database, { useNewUrlParser: true })

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  if (req.method === 'OPTIONS') {
      return res.send(200);
  } else {
      return next();
  }
});
app.use(cors());

app.use(bodyParser.json())

routes.init(app);

app.listen(config.port, function () {
  console.log('app listening at port %s', config.port);
});
