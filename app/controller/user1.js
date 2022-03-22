/**
 * @api {POST} /login 用户登录
 * @apiName login
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiParamExample {json} Request-Example
 *  {
 *    "username": "xiaoandx",
 *    "password": "Xiaoandx123."
 *  }
 *
 *
 * @apiUse respSuccessModel
 *
 * @apiSuccessExample  {json} Response-Example
    {
      "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2MzMzOTUwOTR9.Azjt6q23yXsw-q4Iil9wzn_EjpjBOlQekB9onrDOUMg"
      },
      "message": "success",
      "code": 200
    }

 * @apiErrorExample {json} Error-Response:
    {
      "message": "Permission verification error! please input correct username or password.",
      "data": null,
      "code": -1
    }
 */
