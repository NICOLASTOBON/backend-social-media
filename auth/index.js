const jwt = require('jsonwebtoken');
const config = require('../config')

const { decodeHeader } = require('./helpers')

class Auth {
  static sign(data) {
    return jwt.sign(data, config.jwt.secret)
  }

  static checkOwn(req, own) {
    const decoded = decodeHeader(req);
    console.log(decoded)
  }
}

module.exports = Auth;
