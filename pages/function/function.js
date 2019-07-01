// pages/function/function.js
var app = getApp()
var initData = "安装距离：";
var distance;
var soundVelocity;
var inputtime;
var computetime;
var timeratio;
var diameter = '';
var radioValue = '';
var temperature = '';
var is_input_diameter=0;
var is_select_radio=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    txt_D: initData,
    hasUserInfo: false,
    distance, diameter, radioValue, soundVelocity, inputtime, computetime, timeratio,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isshow_1: false,
    isshow_2:true,
    isshow_3: true,
    isshow_4:false,
  },

  //收集内径
  bindInput_diam(e) {
    diameter = e.detail.value;
    if (diameter == "") is_input_diameter = 0;
    else is_input_diameter=1;
  },
  //收集水温
  bindInput_temp(e) {
    temperature = e.detail.value;
  },
  //收集传播时间
  bindInput_time(e) {
    inputtime = e.detail.value;
  },
  //安装方法radio
  radioChange(e) {
    radioValue = e.detail.value;
    if (radioValue == "") is_select_radio = 0;
    else is_select_radio = 1;
  },

  //按钮处理函数——计算安装距离
  btn1(e) {
    if (radioValue == "radio1") {
      //这样才能上界面
      this.setData({
        distance: (diameter * 2 / Math.sqrt(3)).toFixed(1) + "mm",
      });
    }
    else if (radioValue == "radio2") {
      this.setData({
        distance: (diameter * 2 * 2 / Math.sqrt(3)).toFixed(1) + "mm",
      });
    }
  },
  //按钮处理函数——计算传播时间比
  btn2(e) {
    if (temperature != "" & temperature != undefined & inputtime != "" & inputtime != undefined)
      {
         /*** ****为什么分步计算会null？*******
   
        soundVelocity: (1402.335 + 5.033558 * temperature - 0.0579506 * temperature * temperature + 0.0003311632 * temperature * temperature * temperature - 0.000001452621 * temperature * temperature * temperature * temperature + 0.0000000030449 * temperature * temperature * temperature * temperature * temperature) ,
        computetime: (2 * diameter / Math.sqrt(3) / (1402.335 + 5.033558 * temperature - 0.0579506 * temperature * temperature + 0.0003311632 * temperature * temperature * temperature - 0.000001452621 * temperature * temperature * temperature * temperature + 0.0000000030449 * temperature * temperature * temperature * temperature * temperature))  ,*/
        if(radioValue == "radio1")
        {
          this.setData({
            timeratio: (inputtime * 100 / (2000 * diameter / Math.sqrt(3) / (1402.335 + 5.033558 * temperature - 0.0579506 * temperature * temperature + 0.0003311632 * temperature * temperature * temperature - 0.000001452621 * temperature * temperature * temperature * temperature + 0.0000000030449 * temperature * temperature * temperature * temperature * temperature))).toFixed(2) + "%"
          })
        }
        else{
          this.setData({
            timeratio: (inputtime * 100/ (4000 * diameter / Math.sqrt(3) / (1402.335 + 5.033558 * temperature - 0.0579506 * temperature * temperature + 0.0003311632 * temperature * temperature * temperature - 0.000001452621 * temperature * temperature * temperature * temperature + 0.0000000030449 * temperature * temperature * temperature * temperature * temperature))).toFixed(2) + "%"
          })
        }
      }
  },
  //按钮处理函数——下一步
  btn_next(e) {
    if((is_select_radio)&(is_input_diameter))
      this.setData({
        isshow_1: true,
        isshow_2: false,
        isshow_3: false,
        isshow_4: true ,
        timeratio:""
      })
    else{
      wx.showToast({
        title: '请先输入管道内径和安装方法！',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }
  },
  //按钮处理函数——上一步
  btn_prew(e) {
    is_select_radio= 0,
      is_input_diameter= 0,
    this.setData({
      isshow_1: false,
      isshow_2: true,
      isshow_3: true,
      isshow_4: false,
     
    })
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