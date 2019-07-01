// pages/func/func.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //按钮处理函数——安装条件计算
  btn1(e) {
wx.navigateTo({
  url: '/pages/function/function',
})

  },

  //按钮处理函数——修正系数计算
  btn2(e) {
   wx.navigateTo({
     url: '/pages/function2/function2',
 })

  },


  //按钮处理函数——流速流量换算
  btn3(e) {
    wx.navigateTo({
      url: '/pages/function3/function3',
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