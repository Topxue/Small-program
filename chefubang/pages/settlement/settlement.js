// pages/settlement/ settlement.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressLIst: [],
    shopLists: [],
    piceNumber: 0
  },
  // 新增地址
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _that = this;
    let allPrice = options.totalPrice;
    this.setData({
      number: options.number,
      piceNumber: allPrice
    })
  // 服务站列表
  // wx.request({
  //   url: `${app.globalData.url}home/store_list`,
  //   method: 'POST',
  //   header: {
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   },
  //   data: {

  //   }
  // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    const _that = this;
    // 获取已选商品
    let shopList = wx.getStorageSync('shopList');
    _that.setData({
      shopLists: shopList
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 获取收货地址
    const _that = this;
    let addressDate = wx.getStorageSync('address');
    _that.setData({
      addressLIst: addressDate
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})