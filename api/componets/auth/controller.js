const TABLE = 'auth';

class AuthController {
  #store

  constructor(store = require('../../../store/dummy')) {
    this.#store = store
  }

  insert(authData) {
    return this.#store.insert(TABLE, authData)
  }
}

module.exports = AuthController
