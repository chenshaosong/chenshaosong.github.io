function CommonUrl(){
    //开发环境
this.commentBaseUrl = "http://net-dev1.xteamsoft.com/"
// this.commentBaseUrl = "http://192.168.1.107:8080/";
// this.commentImgBaseUrl = "http://192.168.1.107:8080/web";
this.commentImgBaseUrl = "http://net-dev1.xteamsoft.com/web";
    //2018-9-21
// this.commentBaseUrl = "http://192.168.1.149:8124/";
// this.commentImgBaseUrl = "http://192.168.1.149:8124/web";
// 公网环境
// this.commentBaseUrl = "http://47.106.162.153:8080/";
// this.commentImgBaseUrl = "http://47.106.162.153:8080/web";
// 测试环境
// this.commentBaseUrl = "http://192.168.1.209:8080/";
// this.commentImgBaseUrl = "http://192.168.1.209:8080/";

     // this.commentBaseUrl = " http://www.sxzxyj.net/";
    // this.commentImgBaseUrl = " http://www.sxzxyj.net/web";
//android版本更新
    this.AndroidUpdtaURl = "/interfaces/version/versionUpdate.action";
//获取省市区地址
    this.getAddressListURl = "web/api/user/getAddressList.action?";
//获取用户信息
    this.userInforURL = "web/api/user/getUserInfo.action?";
//自动登录
    this.autoLoginURl = "web/api/login/autoLogin.action";
//扫码开箱
    this.scanCodeURl = "web/api/equ/scanCode.action?";
//获取垃圾箱列表
    this.ustbinListURl = "web/api/equ/dustbinList.action?";
//获取乐享停，无人售货机列表
    this.shopLimitURL = "web/api/shop/shopLimit.action?";
//发送短信
    this.sendSmsURl = "web/api/login/sendSms.action";
    this.sendSmsURl1 = "web/api/login/loginSms.action";
//获取商城类型
    this.shopTypeURl = "web/api/shop/shopType.action";
//提现
    this.drawCashURl = "web/api/draw/drawCash.action";
//提现规则
    this.getSettingURl = "web/api/draw/getSetting.action";
//交易日志
    this.amountLogURl = "web/api/draw/amountLog.action";
//支付宝充值
    this.alipayURl = "web/api/pay/aliPay.action";
//微信充值
    this.wxPayURl = "web/api/pay/wxPay.action";
//获取乐享停，无人售货机菜单
    this.shopMenuURL = "web/api/shop/shopMenu.action?";
//商铺产品菜单
    this.menuProDuctURL = "web/api/shop/menuProduct.action?";
//获取订单号
    this.orderNumberURL = "web/api/order/getOrderNum.action?";
//商城(乐享停-无人售货机)
    this.addOrderURL = "web/api/shop/order/addOrder.action?";
//商品详情(乐享停-无人售货机)
    this.productDetailURL = "web/api/shop/productDetails.action?";
//银行卡列表
    this.bankListURL = "web/api/bank/list.action";
//绑定银行卡
    this.bindBankURL = "web/api/bank/bind.action";
//获取达人榜
    this.manListURL = "web/api/list/manList.action?";
//获取发现列表
    this.findListURL = "web/api/message/discover.action?";
//获取乐享停banner列表
    this.shopBannerURL = "web/api/shop/shopBanner.action?";
// 上传图片流
    this.base64UploadUrl = "web/upload/base64UploadJson.action";
// 上传图片
    this.addPhotoUrl = "web/api/user/addPhoto.action";
//解绑
    this.unbindCardUrl = "web/api/bank/unbind.action";
//帮助中心列表
    this.helpCenterURL = "web/api/user/helpCenter.action";
//帮助中心详情
    this.helpInfoURL = "web/api/user/helpInfo.action";
    this.isBundlePhoneUrl = "web/api/weixin/isBind.action";
//获取公众号关键信息
    this.getWeChatUrl = "web/api/weixin/getAccessToken.action";
//取消订单
    this.cancelOrderURL = "web/api/order/cancel.action";
    //生成二维码
    this.qrCodeURL = "web/api/user/qrCode.action";
    //扫码开门
    this.openMarketDoorUrl = "web/api/noManMarket/openMarketDoorByScanCode.action";
    //二维码支付状态
    this.payStatusUrl = 'web/api/noManMarket/queryPayStatus.action';
    //订单列表
    this.noOrderListUrl = 'web/api/noManMarket/orderList.action';
    //上传经纬度
    this.uploadLocationUrl = 'web/api/user/uploadLocation.action?token=';
    //查询注册
    this.isRegisterUrl = 'web/api/user/isRegistered.action';
}
var commonUrl = new CommonUrl();
