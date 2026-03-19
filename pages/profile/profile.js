const app = getApp()

Page({
  data: {
    isLogin: false,
    userInfo: {
      name: '时尚达人',
      avatar: '/images/profile/avatar.jpg',
      desc: 'VIP会员 · 关注时尚'
    },
    orderCount: {
      pending: 2,
      shipped: 1,
      delivered: 0,
      review: 3
    },
    userAssets: {
      coupons: 5,
      balance: '128.00',
      points: 2680
    }
  },

  onLoad() {
    this.checkLoginStatus()
  },

  onShow() {
    this.checkLoginStatus()
  },

  checkLoginStatus() {
    this.setData({
      isLogin: app.globalData.isLogin
    })
  },

  goToLogin() {
    wx.showModal({
      title: '登录提示',
      content: '请先登录后再使用',
      confirmText: '去登录',
      success: (res) => {
        if (res.confirm) {
          this.doLogin()
        }
      }
    })
  },

  doLogin() {
    wx.showLoading({
      title: '登录中...'
    })
    setTimeout(() => {
      wx.hideLoading()
      app.globalData.isLogin = true
      app.globalData.userInfo = this.data.userInfo
      this.setData({
        isLogin: true
      })
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      })
    }, 1000)
  },

  doLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          app.globalData.isLogin = false
          app.globalData.userInfo = null
          this.setData({
            isLogin: false
          })
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          })
        }
      }
    })
  },

  goToAllOrders() {
    if (!this.checkLogin()) return
    wx.showToast({
      title: '查看全部订单',
      icon: 'none'
    })
  },

  goToOrder(e) {
    if (!this.checkLogin()) return
    const status = e.currentTarget.dataset.status
    wx.showToast({
      title: `查看${status}订单`,
      icon: 'none'
    })
  },

  goToPage(e) {
    if (!this.checkLogin()) return
    const url = e.currentTarget.dataset.url
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  goToSetting() {
    if (!this.checkLogin()) return
    wx.showToast({
      title: '设置页面',
      icon: 'none'
    })
  },

  checkLogin() {
    if (!this.data.isLogin) {
      this.goToLogin()
      return false
    }
    return true
  }
})
