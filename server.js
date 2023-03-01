const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const db = require("./app/models");
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser')
require('dotenv').config()


const whitelist = ['https://qm.anouarmaalej.com'];
const corsOptions = {
  credentials: true, 
  exposedHeaders: ["set-cookie"],
  origin: (origin, callback) => {
    return callback(null, true)
    if(whitelist.includes(origin))

      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));

app.use(express.static(path.resolve(__dirname, '../qm-frontend/build')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

db.sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

// db.sequelize.sync({force : false}).then(() => {
//     console.log('synced');
// });

require('./app/src/routes')(app) 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});