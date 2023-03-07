function mountRoutes(app, config) {
  app.use('/users', config.usersApp.router);
}

module.exports = mountRoutes;
