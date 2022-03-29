'use strict';

const base = {
	appid:"wxb546960d45a7684f", //公众号的appid
	secret:"ad0ee0d25fcf73a4c7412fc1a73ac73e", //公众号的secret 重要不要暴露给前端
	wxapi:"https://api.weixin.qq.com/cgi-bin"
};

let AccessToken = null


module.exports = {
  async getAccessToken(ctx){
    if(AccessToken) return AccessToken
    const {data: {access_token, expires_in}} = await ctx.curl(`${base.wxapi}/token`,
      { 
          method: 'GET',
          data: {
            appid: base.appid,
            secret: base.secret,
            grant_type: 'client_credential'
          },
          dataType: 'json' 
      })
    return AccessToken = access_token
  }
}