const db = {
  'users': [
    {
      id: 1,
      name: 'Nicolas',
      username: 'nicolastobon09'
    },
    {
      id: 2,
      name: 'Valentina',
      username: 'valgasca'
    },
  ]
}

async function list(table) {
  const data = db[table]
  if (!data) throw data
  return data
}

async function get(table, id) {
  const collection = await list(table)
  const data = collection.find((user) => user.id === id)

  if (!data) throw ('Not found')
  return data
}

function insert(table, data) {
  if (!db[table]) {
    db[table] = []
  }

  db[table].push(data)

  return data
}

async function remove(table, id) {
  const collection = await list(table)
  const data = collection.filter((user) => user.id !== id)
  db[table] = data

  if (!data) throw ('Not found')
  return "success"
}

async function query(table, data) {
  const collection = await list(table)
  const key = Object.keys(data)[0];

  return collection.find((user) => user[key] === data[key])
}

module.exports = {
  list,
  get,
  insert,
  remove,
  query,
}
