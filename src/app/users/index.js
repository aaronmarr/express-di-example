const express = require('express');

function createHandlers({ queries }) {
  function index(req, res, next) {
    const users = queries.getUsers();

    return res.json(users)
      .catch(next)
  }

  function show(req, res, next) {
    const { params: { userId } } = req;
    const user = queries.getUser(userId);

    return res.json(user)
      .catch(next);
  }

  return {
    index,
    show,
  }
}

function createQueries({ db }) {
  function getUsers() {
    return db.prepare('SELECT * FROM users').all();
  }

  function getUser(userId) {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  }

  return {
    getUsers,
    getUser,
  }
}

function createUsers({ db }) {
  const queries = createQueries({ db });
  const handlers = createHandlers({ queries });

  const router = express.Router();

  router.route('/').get(handlers.index);
  router.route('/:userId').get(handlers.show);

  return {
    handlers,
    queries,
    router,
  }
}

module.exports = createUsers;
