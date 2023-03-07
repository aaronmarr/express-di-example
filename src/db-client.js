const db = require('better-sqlite3');

function createDbClient({ sqlFilePath }) {
  const client = db(sqlFilePath);

  return client;
}

module.exports = createDbClient;
