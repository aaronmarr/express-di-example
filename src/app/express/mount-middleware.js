// src/app/express/mount-middleware.js
const express = require('express');

const logger = require('./logger');
const requestTime = require('./request-time');

function mountMiddleware(app, env) {
  app.use(logger);
  app.use(requestTime);
}

module.exports = mountMiddleware;
