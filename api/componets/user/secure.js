const Auth = require('../../../auth/index');

module.exports = function check(action) {

  function middleware(req, res, next) {
    switch(action) {
      case 'update':
        const owner = req.body.id
        Auth.checkOwn(req, owner)
        break;
      default:
        next();
    }
  }

  return middleware

}
