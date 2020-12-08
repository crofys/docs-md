'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const user = { a: 1 };
    return user;
  }
}

module.exports = UserService;
