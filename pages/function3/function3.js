// pages/function3/function3.js
var flow;
var velocity;
var diam;
var txt_flow;
var txt_velocity;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt_D1: "流量：",
    txt_D2: "流速：",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //收集流速
  bindInput_V(e) {
    velocity = e.detail.value;
  },

  //收集内径1
  bindInput_D1(e) {
    diam = e.detail.value;
  },
  //收集流量
  bindInput_F(e) {
    flow = e.detail.value;
  },

  //按钮处理函数——计算流量
  btn1(e) {
    if (diam != "" & velocity != "" & diam != undefined & velocity != undefined){
      this.setData({
        txt_flow: ((velocity * 36 * 3.141592 * diam * diam) / 40000).toFixed(5) + "m3/h"
      });
    }
  },

  //按钮处理函数——计算流速
  btn2(e) {
    if (diam != "" & flow != "" & diam != undefined & flow != undefined) {
    this.setData({
      txt_velocity: (flow * 40000 / 36 / 3.141592 / diam / diam).toFixed(5) + "m/s"
    });
    }
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