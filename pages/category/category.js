Page({
  data: {
    currentCategory: 1,
    sortType: 'default',
    priceOrder: 'desc',
    hasMore: true,
    categories: [
      { id: 1, name: '推荐', banner: '/images/category/cat-banner1.jpg' },
      { id: 2, name: '连衣裙', banner: '/images/category/cat-banner2.jpg' },
      { id: 3, name: '上衣', banner: '/images/category/cat-banner3.jpg' },
      { id: 4, name: '裤子', banner: '/images/category/cat-banner4.jpg' },
      { id: 5, name: '外套', banner: '/images/category/cat-banner5.jpg' },
      { id: 6, name: '套装', banner: '/images/category/cat-banner6.jpg' },
      { id: 7, name: '毛衣', banner: '/images/category/cat-banner7.jpg' },
      { id: 8, name: '配饰', banner: '/images/category/cat-banner8.jpg' }
    ],
    currentCategoryData: {
      banner: '/images/category/cat-banner1.jpg',
      children: [
        { id: 11, name: '新品上架', icon: '/images/category/sub1.png' },
        { id: 12, name: '热卖爆款', icon: '/images/category/sub2.png' },
        { id: 13, name: '特惠专区', icon: '/images/category/sub3.png' },
        { id: 14, name: '品牌精选', icon: '/images/category/sub4.png' }
      ]
    },
    brands: [
      { id: 1, name: '优雅时光', logo: '/images/category/brand1.png' },
      { id: 2, name: '时尚前线', logo: '/images/category/brand2.png' },
      { id: 3, name: '淑女坊', logo: '/images/category/brand3.png' },
      { id: 4, name: '名媛风', logo: '/images/category/brand4.png' }
    ],
    products: [
      {
        id: 1,
        name: '2024春季新款法式复古连衣裙收腰显瘦气质女神范',
        desc: '收腰显瘦 法式优雅',
        price: '299',
        originalPrice: '399',
        images: ['/images/prod1.jpg'],
        sales: 2341,
        isHot: true,
        isNew: false
      },
      {
        id: 2,
        name: '设计感小众衬衫女装2024新款春秋时尚洋气上衣',
        desc: '设计感小众 时尚洋气',
        price: '189',
        originalPrice: '259',
        images: ['/images/prod2.jpg'],
        sales: 1567,
        isHot: false,
        isNew: true
      },
      {
        id: 3,
        name: '高腰显瘦直筒牛仔裤女2024新款宽松百搭阔腿裤子',
        desc: '高腰显瘦 宽松百搭',
        price: '259',
        originalPrice: '339',
        images: ['/images/prod3.jpg'],
        sales: 3210,
        isHot: true,
        isNew: false
      },
      {
        id: 4,
        name: '小个子短款风衣外套女2024新款春秋韩版气质大衣',
        desc: '小个子友好 韩版气质',
        price: '499',
        originalPrice: '699',
        images: ['/images/prod4.jpg'],
        sales: 987,
        isHot: false,
        isNew: true
      },
      {
        id: 5,
        name: '温柔风针织连衣裙女装2024新款春季配大衣的内搭',
        desc: '温柔风 内搭外穿皆宜',
        price: '269',
        originalPrice: '369',
        images: ['/images/prod5.jpg'],
        sales: 2100,
        isHot: true,
        isNew: true
      },
      {
        id: 6,
        name: '时尚套装女2024新款春秋小个子显高穿搭轻熟两件套',
        desc: '小个子显高 轻熟风',
        price: '399',
        originalPrice: '559',
        images: ['/images/prod6.jpg'],
        sales: 1876,
        isHot: true,
        isNew: false
      }
    ]
  },

  onLoad(options) {
    if (options.id) {
      this.setData({
        currentCategory: parseInt(options.id)
      })
    }
    this.loadCategoryData()
  },

  selectCategory(e) {
    const id = e.currentTarget.dataset.id
    this.setData({
      currentCategory: id
    })
    this.loadCategoryData()
  },

  loadCategoryData() {
    // 根据分类加载对应数据
    const category = this.data.categories.find(c => c.id === this.data.currentCategory)
    if (category) {
      this.setData({
        currentCategoryData: {
          banner: category.banner,
          children: [
            { id: 11, name: '全部', icon: '/images/category/sub1.png' },
            { id: 12, name: '新品', icon: '/images/category/sub2.png' },
            { id: 13, name: '热卖', icon: '/images/category/sub3.png' },
            { id: 14, name: '特惠', icon: '/images/category/sub4.png' }
          ]
        }
      })
    }
    // 模拟加载商品
    wx.showLoading({
      title: '加载中...'
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 500)
  },

  setSort(e) {
    const type = e.currentTarget.dataset.type
    let priceOrder = this.data.priceOrder

    if (type === 'price') {
      if (this.data.sortType === 'price') {
        priceOrder = priceOrder === 'asc' ? 'desc' : 'asc'
      } else {
        priceOrder = 'desc'
      }
    }

    this.setData({
      sortType: type,
      priceOrder: priceOrder
    })
    this.sortProducts()
  },

  sortProducts() {
    const { sortType, priceOrder, products } = this.data
    let sorted = [...products]

    if (sortType === 'sales') {
      sorted.sort((a, b) => b.sales - a.sales)
    } else if (sortType === 'price') {
      if (priceOrder === 'asc') {
        sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      } else {
        sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      }
    }

    this.setData({
      products: sorted
    })
  },

  openFilter() {
    wx.showActionSheet({
      itemList: ['仅显示有货', '仅显示新品', '仅显示特惠', '价格区间'],
      success: (res) => {
        console.log('筛选条件:', res.tapIndex)
      }
    })
  },

  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  goToSubCategory(e) {
    const id = e.currentTarget.dataset.id
    console.log('子分类:', id)
  },

  selectBrand(e) {
    const id = e.currentTarget.dataset.id
    console.log('品牌:', id)
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/product-detail/product-detail?id=' + id
    })
  },

  onReachBottom() {
    if (this.data.hasMore) {
      wx.showLoading({
        title: '加载更多...'
      })
      setTimeout(() => {
        wx.hideLoading()
        this.setData({
          hasMore: false
        })
      }, 1000)
    }
  }
})
