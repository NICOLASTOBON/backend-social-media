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

  insert({ id, name, username }) {
    if (!id || !name ||!username) throw ('Inavlid data')
    
    const user = { id, name, username }
    return this.#store.insert(TABLE, user)
  }

  remove(id) {
    return this.#store.remove(TABLE, id)
  }
}

module.exports = UserController
