const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt');

const AuthController  = require('../auth/index');

const TABLE = 'users'

class UserController {
  #store

  constructor(store = require('../../../store/dummy')) {
    this.#store = store
  }

  list() {
    return this.#store.list(TABLE)
  }

  get(id) {
    return this.#store.get(TABLE, id)
  }

  async insert({ id, name, username, password }) {
    if (!name ||!username || !password) throw ('Inavlid data')
    
    const user = {
      id: id ? id : nanoid(),
      name,
      username,
    }

    await AuthController.insert({
      id: user.id,
      username,
      password: await bcrypt.hash(password, 5)
    })

    return this.#store.insert(TABLE, user)
  }

  remove(id) {
    return this.#store.remove(TABLE, id)
  }
}

module.exports = UserController
