'use strict';
const app = getApp();
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    current3: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    tabStyle: {
      'flex': '0 0 40px'
    },
    background: [],
    shopNum:0 //购买人数
  },
  handleChange3: function handleChange3(e) {
    var index = e.detail.index;
    this.setData({
      current3: index
    });
  },
  handleContentChange3: function handleContentChange3(e) {
    var current = e.detail.current;
    this.setData({
      current3: current
    });
  },
  swichload(e){
    wx.switchTab({
      url: '../index/index',
    })
  },
  shopCarload(e){
    wx.switchTab({
      url: '../shop/shop',
    })
  },
  onLoad(options){
    let that = this;
    let goods_id = options.goods_id
    // 获取商品详情
    wx.request({
      url: `${app.globalData.url}goods/goods_detail`,
      data: {
        goods_id,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      success(res) {
        that.setData({
          shopNum: res.data.data.sale_count,
          price: res.data.data.price,
          titleName: res.data.data.name,
          shopInfo: res.data.dataintro,
          otherPrice: res.data.data.other_price
        })
        console.log(res.data.data);
      },
    })
    // 商品评价列表
    wx.request({
      url: `${app.globalData.url}goods/goods_discuss`,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        goods_id
      },
      success: res=> {
        console.log(res.data.data)
      }

    })
    // banner
    wx.request({
      url: `${app.globalData.url}home/banner_list`,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        goods_id
      },
      success: res=>{
        that.setData({
          background: res.data.data
        })
      }
    })
  },
  
  onShow() {
    
  }
});