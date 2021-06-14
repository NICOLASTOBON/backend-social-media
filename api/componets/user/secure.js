const Auth = require('../../../auth/index');

class CheckAuth {
  constructor(action) {
    this.action = action;
  }

  middleware(req, res, next) {
    switch(this.action) {
      case 'update':
        const owner = req.body.id
        Auth.checkOwn(req, owner)
        break;
      default:
        next();
    }
  }
}