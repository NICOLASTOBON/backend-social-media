const bcrypt = require('bcrypt');
const Auth = require('../../../auth/index')

const TABLE = 'auth';

class AuthController {
  #store

  constructor(store = require('../../../store/dummy')) {
    this.#store = store
  }

  async login({ username, password }) {
    if (!username, !password) throw 'Invalid Data';

    const data = await this.#store.query(TABLE, { username })
    const pass = await bcrypt.compare(password, data.password)

    if (pass) {
      return Auth.sign(data);
    } else {
      throw 'Invalid Data';
    }
  }

  insert(authData) {
    return this.#store.insert(TABLE, authData)
  }
}

module.exports = AuthController
