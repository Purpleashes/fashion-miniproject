App({
  onLaunch() {
    console.log('时尚女装小程序启动')
    this.checkLoginStatus()
    this.loadCartFromStorage()
  },

  globalData: {
    userInfo: null,
    isLogin: false,
    cart: [],
    favorites: []
  },

  checkLoginStatus() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.globalData.userInfo = userInfo
      this.globalData.isLogin = true
    }
  },

  loadCartFromStorage() {
    const cart = wx.getStorageSync('cart')
    if (cart) {
      this.globalData.cart = cart
    }
  },

  saveCartToStorage() {
    wx.setStorageSync('cart', this.globalData.cart)
  },

  addToCart(product, sku) {
    const cart = this.globalData.cart
    const existItem = cart.find(item => item.id === product.id && item.skuId === sku.id)

    if (existItem) {
      existItem.quantity += sku.quantity || 1
    } else {
      cart.push({
        id: product.id,
        skuId: sku.id,
        name: product.name,
        image: product.images[0],
        price: product.price,
        originalPrice: product.originalPrice,
        spec: sku.spec,
        quantity: sku.quantity || 1,
        selected: true
      })
    }

    this.saveCartToStorage()
    wx.showToast({
      title: '已加入购物车',
      icon: 'success'
    })
  },

  getCartCount() {
    return this.globalData.cart.reduce((sum, item) => sum + item.quantity, 0)
  }
})
