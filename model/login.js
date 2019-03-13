var md5 = require("../utils/md5.js");
var util = require("../utils/util.js");
function toLogin(userName, password, callback){
  console.log(userName + "----" + password);
  var pwd = md5.md5(password).toUpperCase();
  console.log(pwd);
  wx.request({
    url: 'https://svc-test.inhand.com.cn/oauth2/access_token',
    method: 'POST',
    data:{
      client_id: '17953450251798098136',
      client_secret: '08E9EC6793345759456CB8BAE52615F3',
      grant_type: 'password',
      password_type: "2",
      username: userName,
      password: pwd
    },
    header: { "Content-Type": "application/x-www-form-urlencoded" },
    success: function (res) {
      callback && callback(res);
    }
  });
}

module.exports = {
  toLogin: toLogin
}