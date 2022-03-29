'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/v1/login', controller.login.index);
  router.get('/api/v1/getOpenId', controller.wx.getOpenId);
  router.resources('users', '/api/v1/users', controller.users);
};
