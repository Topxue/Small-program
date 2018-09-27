// pages/address/address.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [],
    reqPath: "all",
    types: '' //跳转类型
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reqPath = options.types;
    this.setData({
      reqPath: reqPath,
      types: options.type_id
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
    this.getAddressList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
  * 获取地址列表
  */
  getAddressList: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var userInfo = app.globalData.token;
    wx.request({
      url: app.globalData.url + "user/address_list",
      data: {
        token: app.globalData.token
      }, success: function (obj) {
        setTimeout(() => {
          wx.hideLoading();
        }, 100)
        if (obj.data.state == 1 || obj.data.state == "1") {
          that.setData({
            addressList: obj.data.data
          })
        }
      }
    })
  },

  /**
   * 选择地址
   */
  chooseDefaultAddress: function (e) {
    let that = this;
    let a_id = e.currentTarget.dataset.aid;
    let downLoad = that.data.types
    var reqPath = that.data.reqPath;
    if (reqPath == "all") {
      return;
    }
    var aid = e.currentTarget.dataset.aid;
    var addressList = that.data.addressList;
    if (downLoad == 1 || downLoad == '1') {
      wx.navigateTo({
        url: `../addAddr/addAddr?typs_id=1&a_id=${a_id}`,
      })
    } else {
      for (var i = 0; i < addressList.length; i++) {
        if (addressList[i].a_id == aid) {
          wx.setStorageSync("address", addressList[i]);
          wx.navigateBack({
            delta: 1
          })
          return;
        }
      }
    }
  },

  /**
   * 添加地址页面
   */
  addAddr: function () {
    wx.navigateTo({
      url: '../addAddr/addAddr',
    })
  },

  /**
   * 删除地址
   */
  removeAddress: function (e) {
    var that = this;
    console.log(that.data.addressList)
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var addId = e.currentTarget.dataset.addid;
    console.log(e);
    var token = app.globalData.token;
    wx.request({
      url: app.globalData.url + "user/remove_address",
      data: {
        token,
        a_id: addId
      }, success: function (obj) {
        console.log(obj.data);
        setTimeout(function () {
          wx.hideLoading();
        }, 100)
        if (obj.data.state == 1 || obj.data.state == "1") {
          var addressList = that.data.addressList;
          for (var i = 0; i < addressList.length; i++) {
            if (addressList[i].a_id == addId) {
              addressList.splice(i, 1);
              that.setData({
                addressList: addressList
              })
              return;
            }
          }
        }
      }
    })
  }
})