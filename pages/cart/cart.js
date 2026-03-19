const app = getApp()

Page({
  data: {
    isEditing: false,
    isAllSelected: false,
    cartList: [],
    totalPrice: '0.00',
    selectedCount: 0,
    recommendProducts: [
      { id: 1, name: '时尚百搭针织衫', price: '199', image: '/images/cart/rec1.jpg' },
      { id: 2, name: '显瘦高腰半身裙', price: '259', image: '/images/cart/rec2.jpg' },
      { id: 3, name: '气质小香风外套', price: '459', image: '/images/cart/rec3.jpg' },
      { id: 4, name: '简约牛仔裤', price: '229', image: '/images/cart/rec4.jpg' }
    ]
  },

  onLoad() {
    this.loadCart()
  },

  onShow() {
    this.loadCart()
  },

  loadCart() {
    const cart = app.globalData.cart
    this.setData({
      cartList: cart.length > 0 ? cart : [
        {
          id: 1,
          skuId: 'black-M',
          name: '2024春季新款法式复古连衣裙收腰显瘦气质女神范中长裙',
          image: '/images/cart/cart1.jpg',
          price: '299',
          originalPrice: '399',
          spec: '黑色 M',
          quantity: 1,
          selected: true
        },
        {
          id: 2,
          skuId: 'white-L',
          name: '设计感小众衬衫女装2024新款春秋时尚洋气上衣',
          image: '/images/cart/cart2.jpg',
          price: '189',
          originalPrice: '259',
          spec: '白色 L',
          quantity: 2,
          selected: true
        }
      ]
    })
    this.calculateTotal()
  },

  toggleSelectAll() {
    const { cartList, isAllSelected } = this.data
    const newList = cartList.map(item => ({
      ...item,
      selected: !isAllSelected
    }))
    this.setData({
      cartList: newList,
      isAllSelected: !isAllSelected
    })
    this.calculateTotal()
  },

  toggleItemSelect(e) {
    const index = e.currentTarget.dataset.index
    const cartList = [...this.data.cartList]
    cartList[index].selected = !cartList[index].selected

    const isAllSelected = cartList.every(item => item.selected)

    this.setData({
      cartList,
      isAllSelected
    })
    this.calculateTotal()
  },

  decreaseQuantity(e) {
    const index = e.currentTarget.dataset.index
    const cartList = [...this.data.cartList]
    if (cartList[index].quantity > 1) {
      cartList[index].quantity--
      this.setData({ cartList })
      this.calculateTotal()
    }
  },

  increaseQuantity(e) {
    const index = e.currentTarget.dataset.index
    const cartList = [...this.data.cartList]
    cartList[index].quantity++
    this.setData({ cartList })
    this.calculateTotal()
  },

  deleteItem(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '确定要删除这个商品吗？',
      success: (res) => {
        if (res.confirm) {
          const cartList = [...this.data.cartList]
          cartList.splice(index, 1)
          this.setData({ cartList })
          this.calculateTotal()
          this.syncToApp()
        }
      }
    })
  },

  deleteSelected() {
    const selectedItems = this.data.cartList.filter(item => item.selected)
    if (selectedItems.length === 0) {
      wx.showToast({
        title: '请选择要删除的商品',
        icon: 'none'
      })
      return
    }

    wx.showModal({
      title: '提示',
      content: `确定要删除选中的 ${selectedItems.length} 个商品吗？`,
      success: (res) => {
        if (res.confirm) {
          const cartList = this.data.cartList.filter(item => !item.selected)
          this.setData({
            cartList,
            isAllSelected: false
          })
          this.calculateTotal()
          this.syncToApp()
        }
      }
    })
  },

  toggleEdit() {
    this.setData({
      isEditing: !this.data.isEditing
    })
  },

  calculateTotal() {
    const { cartList } = this.data
    let total = 0
    let count = 0

    cartList.forEach(item => {
      if (item.selected) {
        total += parseFloat(item.price) * item.quantity
        count += item.quantity
      }
    })

    this.setData({
      totalPrice: total.toFixed(2),
      selectedCount: count
    })
  },

  syncToApp() {
    app.globalData.cart = this.data.cartList
    app.saveCartToStorage()
  },

  goShopping() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/product-detail/product-detail?id=' + id
    })
  },

  goCheckout() {
    const { selectedCount, cartList } = this.data

    if (selectedCount === 0) {
      wx.showToast({
        title: '请选择要结算的商品',
        icon: 'none'
      })
      return
    }

    wx.showToast({
      title: '请先登录',
      icon: 'none'
    })
  }
})
