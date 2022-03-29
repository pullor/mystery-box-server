const Service = require('egg').Service;

const base = {
	appid:"wxb546960d45a7684f", //公众号的appid
	secret:"ad0ee0d25fcf73a4c7412fc1a73ac73e", //公众号的secret 重要不要暴露给前端
	wxapi:"https://api.weixin.qq.com/cgi-bin"
};

class WxService extends Service {
  async getOpenId(code) {
    const { ctx } = this
    const { data } = await ctx.curl(`https://api.weixin.qq.com/sns/oauth2/access_token`,
      { 
        method: 'GET',
        data: {
          appid: base.appid,
          secret: base.secret,
          code,
          grant_type: 'authorization_code'
        },
        dataType: 'json' 
    });
    const { openid, access_token, expires_in, refresh_token, scope, errcode, errmsg} = data
    // this.getUserInfo({access_token, openid})
    if(errcode) {
      ctx.throw(500, errmsg)
    } 
    return openid
  }
  async getUserInfo({access_token, openid }) {
    const { ctx } = this
    const { data } = await ctx.curl(`https://api.weixin.qq.com/sns/userinfo`,
      { 
        method: 'GET',
        data: {
          access_token,
          openid,
          lang:'zh_CN'
        },
        dataType: 'json' 
    });
    console.log(data, '>>>> ')
  }
}

module.exports = WxService;