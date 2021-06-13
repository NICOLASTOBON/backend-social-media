const jwt = require('jsonwebtoken');

class JWT {
  static sign(data) {
    return jwt.sign(data, 'secret')
  }
}

module.exports = JWT;
