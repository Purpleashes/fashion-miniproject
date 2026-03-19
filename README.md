# 女装电商销售展示小程序

这是一个专为女装销售设计的电商小程序模板，包含完整的商品展示、分类浏览、购物车、个人中心等核心功能。

## 项目特色

- 👗 **专为女装设计** - 粉色主题，符合女装电商的视觉风格
- 🛍️ **完整购物流程** - 从浏览到下单的完整购物体验
- 📱 **移动端优先** - 完美适配手机屏幕
- 🎨 **精美UI设计** - 时尚的界面设计，提升用户体验

## 项目结构

```
fashion-miniproject/
├── app.js                    # 小程序入口
├── app.json                  # 全局配置
├── app.wxss                  # 全局样式
├── sitemap.json              # 站点地图
├── README.md                 # 说明文档
├── images/                   # 图片资源目录
│   ├── tabs/                 # TabBar 图标
│   ├── home/                 # 首页图片
│   ├── category/             # 分类页图片
│   ├── product/              # 商品详情页图片
│   ├── cart/                 # 购物车图片
│   ├── profile/              # 个人中心图片
│   └── common/               # 通用图标
└── pages/
    ├── index/                # 首页
    │   ├── index.js
    │   ├── index.json
    │   ├── index.wxml
    │   └── index.wxss
    ├── category/             # 分类页
    │   ├── category.js
    │   ├── category.json
    │   ├── category.wxml
    │   └── category.wxss
    ├── product-detail/       # 商品详情页
    │   ├── product-detail.js
    │   ├── product-detail.json
    │   ├── product-detail.wxml
    │   └── product-detail.wxss
    ├── cart/                 # 购物车
    │   ├── cart.js
    │   ├── cart.json
    │   ├── cart.wxml
    │   └── cart.wxss
    └── profile/              # 个人中心
        ├── profile.js
        ├── profile.json
        ├── profile.wxml
        └── profile.wxss
```

## 功能模块

### 1. 首页 (pages/index)
- **顶部搜索** - 商品搜索入口
- **轮播图** - 展示新品、活动、促销信息
- **快捷导航** - 快速进入各分类
- **限时秒杀** - 倒计时秒杀活动
- **新品上市** - 展示最新商品
- **热销榜单** - 销量排行榜
- **推荐商品** - 个性化推荐商品

### 2. 分类页 (pages/category)
- **左侧分类菜单** - 一级分类导航
- **分类Banner** - 分类主题图
- **二级分类** - 细分品类
- **品牌推荐** - 品牌专区
- **筛选排序** - 综合、销量、价格排序
- **商品列表** - 双列商品展示

### 3. 商品详情页 (pages/product-detail)
- **商品图片轮播** - 多图展示
- **价格区域** - 售价、原价、折扣
- **商品信息** - 名称、描述、标签
- **销量服务** - 销量、配送、售后
- **规格选择** - 颜色、尺码选择弹窗
- **商品评价** - 好评率、晒图、评价列表
- **详情图片** - 商品详情图
- **底部操作** - 收藏、购物车、加入购物车、立即购买

### 4. 购物车 (pages/cart)
- **空状态** - 引导购物
- **全选/编辑** - 批量操作
- **商品列表** - 商品信息、数量调整
- **商品规格** - 显示选择的颜色尺码
- **删除功能** - 编辑模式删除商品
- **猜你喜欢** - 推荐商品
- **结算栏** - 商品合计、数量、结算按钮

### 5. 个人中心 (pages/profile)
- **用户信息** - 头像、昵称、登录状态
- **我的订单** - 待付款、待发货、待收货、待评价、售后
- **我的资产** - 优惠券、余额、积分
- **我的收藏** - 收藏的商品
- **浏览足迹** - 浏览历史
- **收货地址** - 地址管理
- **客服帮助** - 联系客服、帮助中心、意见反馈
- **关于我们** - 品牌介绍
- **退出登录** - 安全退出

## 主题色配置

```css
/* 主色调 - 粉色系 */
$primary: #ff4d6d;
$primary-light: #ff8fa3;

/* 渐变色 */
$gradient: linear-gradient(135deg, #ff4d6d, #ff8fa3);

/* 辅助色 */
$warning: #ffd43b;
$success: #69db7c;
$text-primary: #333333;
$text-secondary: #666666;
$text-placeholder: #999999;
$background: #f8f8f8;
$border: #f0f0f0;
```

## 图片资源清单

### images/tabs/ - TabBar 图标 (81x81px)
- `tab-home.png` - 首页图标
- `tab-home-active.png` - 首页选中
- `tab-category.png` - 分类图标
- `tab-category-active.png` - 分类选中
- `tab-cart.png` - 购物车图标
- `tab-cart-active.png` - 购物车选中
- `tab-profile.png` - 我的图标
- `tab-profile-active.png` - 我的选中

### images/home/ - 首页图片
- `banner1.jpg` ~ `banner3.jpg` - 轮播图 (750x420px)
- `nav-new.png` ~ `nav-all.png` - 快捷导航图标 (88x88px)
- `flash1.jpg` ~ `flash4.jpg` - 秒杀商品图 (200x200px)
- `new1.jpg` ~ `new5.jpg` - 新品图片
- `hot1.jpg` ~ `hot4.jpg` - 热销商品图
- `prod1.jpg` ~ `prod6.jpg` - 推荐商品图

### images/category/ - 分类页图片
- `cat-banner1.jpg` ~ `cat-banner8.jpg` - 分类横幅
- `sub1.png` ~ `sub4.png` - 二级分类图标
- `brand1.png` ~ `brand4.png` - 品牌logo

### images/product/ - 商品详情页图片
- `detail1.jpg` ~ `detail4.jpg` - 商品轮播图 (750x750px)
- `color-black.jpg`, `color-white.jpg`, 等 - 颜色选择预览图
- `detail-img1.jpg` ~ `detail-img4.jpg` - 详情长图
- `avatar1.jpg`, `avatar2.jpg` - 评价用户头像
- `review1.jpg`, `review2.jpg` - 评价图片

### images/cart/ - 购物车图片
- `cart1.jpg`, `cart2.jpg` - 购物车商品图
- `rec1.jpg` ~ `rec4.jpg` - 推荐商品图
- `empty-cart.png` - 空购物车图片

### images/profile/ - 个人中心图片
- `avatar.jpg` - 用户头像
- `default-avatar.png` - 默认头像
- `setting.png` - 设置图标
- `order-pending.png` ~ `order-refund.png` - 订单状态图标
- `menu-favorite.png` ~ `menu-about.png` - 菜单项图标

### images/common/ - 通用图标
- `search-icon.png` - 搜索图标
- `back.png` - 返回按钮
- `share.png` - 分享按钮
- `arrow-right.png` - 右箭头
- `checkbox.png` / `checkbox-checked.png` - 复选框
- `home.png` - 首页
- `favorite.png` / `favorite-active.png` - 收藏
- `cart.png` - 购物车
- `close.png` - 关闭
- `delete.png` - 删除

## 快速开始

### 1. 环境准备
- 注册微信小程序账号：https://mp.weixin.qq.com/
- 获取 AppID
- 下载微信开发者工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 2. 导入项目
1. 打开微信开发者工具
2. 选择"导入项目"
3. 选择 `fashion-miniproject` 文件夹
4. 填入你的 AppID
5. 点击"导入"

### 3. 准备图片资源
将准备好的图片放入 `images` 目录，确保文件名与代码中引用的一致。

### 4. 修改配置
- 修改 `app.json` 中的小程序名称
- 修改各页面中的商品数据
- 配置服务器域名（如需对接后端）

### 5. 测试运行
1. 在开发者工具中预览
2. 使用真机调试测试
3. 检查各项功能是否正常

## 数据结构说明

### 商品数据格式
```javascript
{
  id: 1,
  name: '商品名称',
  desc: '商品描述',
  price: '299',
  originalPrice: '399',
  images: ['/images/home/prod1.jpg'],
  tags: ['新品'],
  sales: 1234,
  stock: 99
}
```

### 购物车数据格式
```javascript
{
  id: 1,
  skuId: 'black-M',
  name: '商品名称',
  image: '/images/cart/cart1.jpg',
  price: '299',
  spec: '黑色 M',
  quantity: 1,
  selected: true
}
```

## 后端对接

### 所需API接口
1. **首页数据** - 获取轮播图、推荐商品、秒杀等
2. **分类数据** - 获取商品分类、品牌
3. **商品列表** - 按条件搜索、筛选商品
4. **商品详情** - 获取单个商品的完整信息
5. **商品评价** - 获取评价列表、好评率
6. **登录注册** - 微信登录、手机号绑定
7. **购物车** - 增删改查购物车商品
8. **订单** - 创建订单、订单列表、订单详情
9. **支付** - 微信支付接口
10. **用户** - 用户信息、地址、收藏等

### 网络请求示例
```javascript
wx.request({
  url: 'https://your-api.com/api/products',
  method: 'GET',
  data: {
    category: 1,
    page: 1
  },
  success: (res) => {
    console.log(res.data)
  }
})
```

## 注意事项

### 开发阶段
1. **图片压缩** - 建议使用 Tinypng 等工具压缩图片
2. **包体积控制** - 主包不超过 2MB，分包不超过 20MB
3. **真机测试** - 务必在真机上测试体验
4. **网络域名** - 开发阶段可在开发者工具中关闭"不校验合法域名"

### 发布前准备
1. **服务器配置** - 在微信公众平台配置 request、uploadFile、downloadFile 合法域名
2. **用户隐私** - 收集用户信息前需要获取用户同意，并在后台配置
3. **内容审核** - 确保商品内容符合规范，避免违规内容
4. **支付配置** - 如需微信支付，需开通微信支付商户号

### 审核规范
- 不得包含虚假宣传
- 商品图片需真实
- 价格需真实有效
- 需有完整的售后政策
- 用户评价需真实展示

## 扩展功能建议

### 基础功能
- [ ] 用户登录/注册
- [ ] 搜索功能（含搜索历史、热门搜索）
- [ ] 商品分享（好友、朋友圈）
- [ ] 客服聊天功能
- [ ] 消息通知

### 营销功能
- [ ] 优惠券领取/使用
- [ ] 限时秒杀活动
- [ ] 拼团/团购
- [ ] 积分商城
- [ ] 会员体系
- [ ] 签到功能

### 运营功能
- [ ] 商品收藏
- [ ] 浏览历史
- [ ] 商品评价/晒单
- [ ] 退换货申请
- [ ] 物流查询

## 常见问题

### Q: 如何修改主题色？
A: 在 `app.wxss` 中修改颜色变量，同时搜索所有 `#ff4d6d` 并替换为你的颜色。

### Q: 如何添加支付功能？
A: 需要在微信商户平台开通支付功能，对接 `wx.requestPayment` 接口。

### Q: 如何上传商品图片？
A: 建议使用云开发存储或自己的对象存储服务，通过 `wx.chooseImage` 和 `wx.uploadFile` 上传。

## 技术支持

- 微信小程序官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/
- 组件文档：https://developers.weixin.qq.com/miniprogram/dev/component/
- API 文档：https://developers.weixin.qq.com/miniprogram/dev/api/

## 版权说明

本模板仅供学习参考使用，可自由修改和使用。

---

祝你生意兴隆！🎉
