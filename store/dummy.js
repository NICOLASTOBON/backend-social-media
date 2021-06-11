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

const list = async (table) => {
  const data = db[table]
  if (!data) throw data
  return data
}

const get = async (table, id) => {
  const collection = await list(table)
  const data = collection.find((user) => user.id === id)

  if (!data) throw ('Not found')
  return data
}

const insert = async (table, data) => {
  db[table].push(data)
  return data
}

const remove = async (table, id) => {
  const collection = await list(table)
  const data = collection.filter((user) => user.id !== id)
  db[table] = data

  if (!data) throw ('Not found')
  return "success"
}

module.exports = {
  list,
  get,
  insert,
  remove,
}
