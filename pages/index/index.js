//index.js
//获取应用实例
const app = getApp()
var initData ="安装距离：";
var distance = 0 ;
var inputValue='';
var radioValue='' ;
Page({
  data: {
    txt_D: initData,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //收集内径
  bindKeyInput(e) {
      inputValue = e.detail.value;
  },

  //安装方法radio
  radioChange(e){
     radioValue = e.detail.value;
  },

  //按钮处理函数——计算安装距离
  btn1(e){
    if(radioValue=="radio1")
     {distance = inputValue / Math.sqrt(3);
    console.log('radio发生change事件，携带value值为：', radioValue);
      console.log('radio发生change事件，携带value值为：', inputValue);}
      else
      distance = this.data.inputValue / Math.sqrt(2);
    //console.log('radio发生change事件，携带value值为：', radioValue)
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})


