// pages/function2/function2.js
var error;
var coefficient;
var new_coefficient;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt_D: "新系数：",
  },

  //收集平均误差
  bindInput_error(e) {
    error = e.detail.value;
  },

  //收集原系数
  bindInput_coef(e) {
    coefficient = e.detail.value;
  },

  //按钮处理函数——计算修正系数
  btn1(e) {
    if (error != "" & coefficient != "" & error != undefined & coefficient != undefined)
    {
    this.setData({
      new_coefficient: (coefficient * 100  / (error*1 + 100)).toFixed(5), 
      });
    }
    
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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