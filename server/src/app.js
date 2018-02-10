const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

// { force: true } to drop and recreate DB from models
const forceSYNC = 0;

sequelize.sync({ force: forceSYNC }).then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
