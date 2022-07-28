const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8080;
const db = require("./app/models");
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser')
require('dotenv').config()


const whitelist = ['http://localhost:3000'];
const corsOptions = {
  credentials: true, 
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));

app.use(express.static(path.resolve(__dirname, '../qm-frontend/build')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

db.sequelize.sync({force : false}).then(() => {
    console.log('synced');
});

require('./app/src/routes')(app) 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});