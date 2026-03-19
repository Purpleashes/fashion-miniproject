const app = getApp()

Page({
  data: {
    banners: [
      { id: 1, image: '/images/home/banner1.jpg', link: 'new' },
      { id: 2, image: '/images/home/banner2.jpg', link: 'sale' },
      { id: 3, image: '/images/home/banner3.jpg', link: 'category' }
    ],
    quickNavs: [
      { id: 1, name: '新品', icon: '/images/home/nav-new.png', type: 'new' },
      { id: 2, name: '连衣裙', icon: '/images/home/nav-dress.png', type: 'category', cid: 1 },
      { id: 3, name: '上衣', icon: '/images/home/nav-top.png', type: 'category', cid: 2 },
      { id: 4, name: '裤子', icon: '/images/home/nav-pants.png', type: 'category', cid: 3 },
      { id: 5, name: '外套', icon: '/images/home/nav-coat.png', type: 'category', cid: 4 },
      { id: 6, name: '配饰', icon: '/images/home/nav-accessory.png', type: 'category', cid: 5 },
      { id: 7, name: '特惠', icon: '/images/home/nav-sale.png', type: 'sale' },
      { id: 8, name: '全部', icon: '/images/home/nav-all.png', type: 'all' }
    ],
    flashSale: [
      { id: 1, image: '/images/home/flash1.jpg', price: '99', originalPrice: '299', progress: 85 },
      { id: 2, image: '/images/home/flash2.jpg', price: '159', originalPrice: '399', progress: 72 },
      { id: 3, image: '/images/home/flash3.jpg', price: '199', originalPrice: '499', progress: 60 },
      { id: 4, image: '/images/home/flash4.jpg', price: '129', originalPrice: '329', progress: 45 }
    ],
    newProducts: [
      {
        id: 1,
        name: '2024春季新款法式优雅连衣裙',
        price: '369',
        originalPrice: '499',
        images: ['/images/home/new1.jpg'],
        tags: ['new'],
        tagTexts: ['新品'],
        sales: 2345
      },
      {
        id: 2,
        name: '温柔风碎花雪纺上衣',
        price: '169',
        originalPrice: '239',
        images: ['/images/home/new2.jpg'],
        tags: ['new'],
        tagTexts: ['新品'],
        sales: 1856
      },
      {
        id: 3,
        name: '高腰显瘦阔腿牛仔裤',
        price: '229',
        originalPrice: '299',
        images: ['/images/home/new3.jpg'],
        tags: ['new'],
        tagTexts: ['新品'],
        sales: 1234
      },
      {
        id: 4,
        name: '气质小香风短款外套',
        price: '459',
        originalPrice: '599',
        images: ['/images/home/new4.jpg'],
        tags: ['new'],
        tagTexts: ['新品'],
        sales: 987
      },
      {
        id: 5,
        name: '简约针织打底衫',
        price: '129',
        originalPrice: '179',
        images: ['/images/home/new5.jpg'],
        tags: ['new'],
        tagTexts: ['新品'],
        sales: 3456
      }
    ],
    hotProducts: [
      {
        id: 1,
        name: '小个子显高穿搭套装裙',
        images: ['/images/home/hot1.jpg'],
        sales: 8888
      },
      {
        id: 2,
        name: '减龄学院风针织开衫',
        images: ['/images/home/hot2.jpg'],
        sales: 6666
      },
      {
        id: 3,
        name: '显瘦高腰A字半身裙',
        images: ['/images/home/hot3.jpg'],
        sales: 5555
      },
      {
        id: 4,
        name: '宽松百搭卫衣女',
        images: ['/images/home/hot4.jpg'],
        sales: 4444
      }
    ],
    recommendProducts: [
      {
        id: 1,
        name: '2024新款春装复古V领连衣裙收腰显瘦气质女神范中长裙',
        price: '299',
        originalPrice: '399',
        images: ['/images/home/prod1.jpg'],
        tags: ['hot'],
        tagTexts: ['热销'],
        sales: 2341
      },
      {
        id: 2,
        name: '设计感小众衬衫女装2024新款春秋时尚洋气上衣',
        price: '189',
        originalPrice: '259',
        images: ['/images/home/prod2.jpg'],
        tags: ['new'],
        tagTexts: ['新品'],
        sales: 1567
      },
      {
        id: 3,
        name: '高腰显瘦直筒牛仔裤女2024新款宽松百搭阔腿裤子',
        price: '259',
        originalPrice: '339',
        images: ['/images/home/prod3.jpg'],
        tags: [],
        sales: 3210
      },
      {
        id: 4,
        name: '小个子短款风衣外套女2024新款春秋韩版气质大衣',
        price: '499',
        originalPrice: '699',
        images: ['/images/home/prod4.jpg'],
        tags: ['sale'],
        tagTexts: ['特惠'],
        sales: 987
      },
      {
        id: 5,
        name: '温柔风针织连衣裙女装2024新款春季配大衣的内搭打底裙',
        price: '269',
        originalPrice: '369',
        images: ['/images/home/prod5.jpg'],
        tags: ['new'],
        tagTexts: ['新品'],
        sales: 2100
      },
      {
        id: 6,
        name: '时尚套装女2024新款春秋小个子显高穿搭轻熟两件套',
        price: '399',
        originalPrice: '559',
        images: ['/images/home/prod6.jpg'],
        tags: ['hot'],
        tagTexts: ['热销'],
        sales: 1876
      }
    ],
    countdown: {
      hours: '02',
      minutes: '30',
      seconds: '15'
    }
  },

  onLoad() {
    this.startCountdown()
  },

  onShow() {
    // 页面显示时刷新数据
  },

  onShareAppMessage() {
    return {
      title: '时尚女装 - 发现你的美',
      path: '/pages/index/index'
    }
  },

  // 倒计时
  startCountdown() {
    let time = 2 * 3600 + 30 * 60 + 15
    setInterval(() => {
      time--
      if (time < 0) {
        time = 24 * 3600
      }
      const hours = Math.floor(time / 3600).toString().padStart(2, '0')
      const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0')
      const seconds = (time % 60).toString().padStart(2, '0')
      this.setData({
        countdown: { hours, minutes, seconds }
      })
    }, 1000)
  },

  // 搜索
  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  // 轮播图点击
  onBannerTap(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '查看活动 ' + id,
      icon: 'none'
    })
  },

  // 快捷入口点击
  onNavTap(e) {
    const { type, cid } = e.currentTarget.dataset
    if (type === 'category') {
      wx.switchTab({
        url: '/pages/category/category?id=' + cid
      })
    } else if (type === 'new') {
      wx.showToast({
        title: '查看新品',
        icon: 'none'
      })
    } else if (type === 'sale') {
      wx.showToast({
        title: '查看特惠',
        icon: 'none'
      })
    } else if (type === 'all') {
      wx.switchTab({
        url: '/pages/category/category'
      })
    }
  },

  // 查看更多限时秒杀
  goToFlashSale() {
    wx.showToast({
      title: '查看更多秒杀',
      icon: 'none'
    })
  },

  // 查看更多新品
  goToNewArrivals() {
    wx.switchTab({
      url: '/pages/category/category?tab=new'
    })
  },

  // 商品详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/product-detail/product-detail?id=' + id
    })
  }
})
