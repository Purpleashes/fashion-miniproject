const app = getApp()

Page({
  data: {
    productId: null,
    product: {
      id: 1,
      name: '2024春季新款法式复古连衣裙收腰显瘦气质女神范中长裙',
      desc: '法式优雅，收腰显瘦，精选优质面料，舒适透气',
      price: '299',
      originalPrice: '399',
      discount: '7.5',
      sales: 2341,
      stock: 99,
      shipping: '包邮',
      service: '7天无理由·运费险·极速退款',
      tags: ['新品首发', '限时优惠', '爆款热销'],
      images: [
        '/images/product/detail1.jpg',
        '/images/product/detail2.jpg',
        '/images/product/detail3.jpg',
        '/images/product/detail4.jpg'
      ]
    },
    isFavorite: false,
    cartCount: 0,
    showSpecModal: false,
    modalActionType: 'cart',
    selectedColor: null,
    selectedSize: null,
    selectedSpec: '',
    quantity: 1,
    colors: ['黑色', '白色', '红色', '蓝色'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colorImages: {
      '黑色': '/images/product/color-black.jpg',
      '白色': '/images/product/color-white.jpg',
      '红色': '/images/product/color-red.jpg',
      '蓝色': '/images/product/color-blue.jpg'
    },
    sizeTips: {
      'S': '建议80-95斤',
      'M': '建议95-105斤',
      'L': '建议105-115斤',
      'XL': '建议115-125斤',
      '2XL': '建议125-140斤'
    },
    reviewStats: {
      good: 98,
      withImage: 368,
      repeat: 256
    },
    reviews: [
      {
        id: 1,
        name: '小仙女***',
        avatar: '/images/product/avatar1.jpg',
        time: '2024-02-15',
        spec: '黑色 M',
        content: '质量非常好，版型很显瘦，颜色也很正，物流也很快，下次还会再来！',
        images: ['/images/product/review1.jpg', '/images/product/review2.jpg']
      },
      {
        id: 2,
        name: '爱美的***',
        avatar: '/images/product/avatar2.jpg',
        time: '2024-02-10',
        spec: '红色 L',
        content: '衣服很合身，面料舒适，红色很显白，推荐购买！',
        images: []
      }
    ],
    detailImages: [
      '/images/product/detail-img1.jpg',
      '/images/product/detail-img2.jpg',
      '/images/product/detail-img3.jpg',
      '/images/product/detail-img4.jpg'
    ]
  },

  onLoad(options) {
    const id = options.id
    this.setData({
      productId: id
    })
    this.loadProductDetail(id)
    this.updateCartCount()
  },

  onShareAppMessage() {
    return {
      title: this.data.product.name,
      path: '/pages/product-detail/product-detail?id=' + this.data.productId,
      imageUrl: this.data.product.images[0]
    }
  },

  loadProductDetail(id) {
    wx.showLoading({
      title: '加载中...'
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
  },

  updateCartCount() {
    this.setData({
      cartCount: app.getCartCount()
    })
  },

  goBack() {
    wx.navigateBack()
  },

  shareProduct() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  goHome() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  toggleFavorite() {
    this.setData({
      isFavorite: !this.data.isFavorite
    })
    wx.showToast({
      title: this.data.isFavorite ? '已收藏' : '已取消收藏',
      icon: 'success'
    })
  },

  goToCart() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },

  viewAllReviews() {
    wx.showToast({
      title: '查看全部评价',
      icon: 'none'
    })
  },

  openSpecModal(e) {
    const type = e.currentTarget?.dataset?.type || 'cart'
    this.setData({
      showSpecModal: true,
      modalActionType: type
    })
  },

  closeSpecModal() {
    this.setData({
      showSpecModal: false
    })
  },

  selectColor(e) {
    const color = e.currentTarget.dataset.color
    this.setData({
      selectedColor: color
    })
    this.updateSelectedSpec()
  },

  selectSize(e) {
    const size = e.currentTarget.dataset.size
    this.setData({
      selectedSize: size
    })
    this.updateSelectedSpec()
  },

  updateSelectedSpec() {
    const { selectedColor, selectedSize } = this.data
    if (selectedColor && selectedSize) {
      this.setData({
        selectedSpec: `${selectedColor} ${selectedSize}`
      })
    } else if (selectedColor) {
      this.setData({
        selectedSpec: selectedColor
      })
    } else if (selectedSize) {
      this.setData({
        selectedSpec: selectedSize
      })
    }
  },

  decreaseQuantity() {
    let quantity = this.data.quantity
    if (quantity > 1) {
      this.setData({
        quantity: quantity - 1
      })
    }
  },

  increaseQuantity() {
    let quantity = this.data.quantity
    if (quantity < this.data.product.stock) {
      this.setData({
        quantity: quantity + 1
      })
    }
  },

  showSizeGuide() {
    wx.showModal({
      title: '尺码指南',
      content: 'S: 80-95斤\nM: 95-105斤\nL: 105-115斤\nXL: 115-125斤\n2XL: 125-140斤',
      showCancel: false
    })
  },

  confirmSpec() {
    const { selectedColor, selectedSize, quantity, modalActionType } = this.data

    if (!selectedColor) {
      wx.showToast({
        title: '请选择颜色',
        icon: 'none'
      })
      return
    }

    if (!selectedSize) {
      wx.showToast({
        title: '请选择尺码',
        icon: 'none'
      })
      return
    }

    const product = this.data.product
    const sku = {
      id: `${selectedColor}-${selectedSize}`,
      spec: `${selectedColor} ${selectedSize}`,
      quantity: quantity
    }

    if (modalActionType === 'cart') {
      app.addToCart(product, sku)
      this.updateCartCount()
      this.closeSpecModal()
    } else {
      app.addToCart(product, sku)
      this.closeSpecModal()
      wx.switchTab({
        url: '/pages/cart/cart'
      })
    }
  }
})
