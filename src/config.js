const createDbClient = require('./db-client');
const createUsersApp = require('./app/users');
function createConfig({ env }) {
  const db = createDbClient({
    sqlFilePath: env.sqlFilePath,
  });

  const usersApp = createUsersApp({ db });

  return {
    env,
    db,
    usersApp,
  }
}

module.exports = createConfig;
