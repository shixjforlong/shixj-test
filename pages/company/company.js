// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     disabled:true,
     btnstate:"default"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  accountBlur:function(e){
     var content = e.detail.value;
    if (content!=""){
         this.setData({
           disabled:false,
           btnstate:"primary"
         });
     }else{
      this.setData({
        disabled: true,
        btnstate: "default"
      });
     }
  },
  formReset:function(){
    console.log("222");
  },
  formSubmit:function(e){
  
     var user = new Object();
     user.account = e.detail.value.loginName;
     user.password = e.detail.value.password;
     user.company = e.detail.value.company;
     user.userName = e.detail.value.userName;
     user.code = e.detail.value.code;
     user.mobile = e.detail.value.mobile;
     user.switch = e.detail.value.switch;
     wx.setStorageSync('user', user);
     console.log(wx.getStorageSync("user"));
     wx.showToast({
       title: '注册成功',
       icon:"succes",
       duration:1000,
       success:function(){
         wx.navigateTo({
           url: '../login/login',
         })
       }
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})