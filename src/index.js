const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const createExpressApp = require('./app/express');
const createConfig = require('./config');
const createEnv = require('./env');

const env = createEnv({ env: dotenv });
const config = createConfig({ env });
const app = createExpressApp({ config, env });

function onStart() {
  console.log('Express application started');
  console.table([['Port', env.port], ['Environment', env.env]]);
}

function start() {
  app.listen(env.port, onStart);
}

module.exports = {
  app,
  config,
  start,
};
