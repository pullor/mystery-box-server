'use strict';

const Controller = require('egg').Controller;

class WxController extends Controller {
  async getOpenId() {
    const { ctx } = this;
    const code = ctx.query.code 
    const openid = await ctx.service.wx.getOpenId(code)
    ctx.body = { openid };
  }
}

module.exports = WxController;
