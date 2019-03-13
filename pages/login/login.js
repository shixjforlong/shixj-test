var loginModel = require("../../model/login.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
     account:"",
     password:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: res => {
        var code = res.code;//用户登录凭证
        // 发送 res.code 到后台换取 openId, sessionKey, unionId

      }
    })
  },
  loginFormSubmit: function (e) {
     var userName = e.detail.value.userName;
     var password = e.detail.value.password;
     if (userName == ""){
        wx.showToast({
          title: '账号不能为空',
          icon: 'loading',
          duration: 1500
        })
     }
     if (password == "") {
        wx.showToast({
          title: '密码不能为空',
          icon: 'loading',
          duration: 1500
        })
     }
    if (userName && password){
      loginModel.toLogin(userName, password, function (res){
          console.log(res);
          if (res.data.error_code != null) {
            if (res.data.error_code == 20003) {
                wx.showToast({
                  title: '账号不存在',
                  icon: 'loading',
                  duration: 1500
                })
            } else if (res.data.error_code == 21302) {
                wx.showToast({
                  title: '密码不正确',
                  icon: 'loading',
                  duration: 1500
                })
            }
            else if (res.data.error_code == 21304) {
              wx.showToast({
                title: '用户锁定',
                icon: 'loading',
                duration: 1500
              })
            }
          } else {
            wx.setStorageSync("access_token", res.data.access_token);
            wx.setStorageSync("refresh_token", res.data.refresh_token);
            wx.setStorageSync("expires_in", 3600);

            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1500,
              success: function () {
                wx.switchTab({
                  url: '../index/index'
                });
              }
            });
          }
      });
    }
  }
})