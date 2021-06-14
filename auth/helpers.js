const jwt = require('jsonwebtoken');
const config = require('../config')

const secret = config.jwt.secret

function verify(token) {
  return jwt.verify(token, secret)
}

function getToken(auth) {
  if (!auth) throw 'Not Token'
  if (auth.indexOf('Bearer ') === -1 ) throw 'Invalid format'
  return auth.replace('Bearer ', '')
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || ''
  const token = getToken(authorization)
  const decoded = verify(token)

  req.user = decoded
  return decoded
}

module.exports = { decodeHeader }
