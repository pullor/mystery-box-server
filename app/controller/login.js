'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const openId = ctx.query.openId 
    const data = await ctx.service.login.index(openId)
    ctx.body = { data };
  }
}

module.exports = LoginController;
