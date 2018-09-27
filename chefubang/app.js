App({
  onLaunch: function () {
  },
  globalData:{
    url:'http://192.168.1.114:8080/car_fans/app/', // 全局参数
    carCheck:'',
    userInfo:null,
    token: wx.getStorageSync('userInfo').token, // 用户token
    types:0 // 跳转订单类型
  }
})
