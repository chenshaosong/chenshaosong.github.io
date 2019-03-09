function HomePage(){
    this.userImg = '';
    this.phone = '';
    this.all_carbon = '';
    this.integral = '';
    this.latitude = '';
    this.longitude = '';
}
//获取个人信息
HomePage.prototype.getUserInfo = function(){
    var token = localStorage.getItem("loginToken");
    var that = this;
    httpServe.request({
        method: 'POST',
        url:'web/api/user/getUserInfo.action',
        data: {
            token:token,
        },
        sf:function(result){
            var  userInfor = result.data.response;
            if(result.data.code=="001000"){
                that.phone = userInfor.phone;
                that.integral = userInfor.integral;
                that.all_carbon = userInfor.all_carbon;

                if(userInfor.photo.indexOf("http")>-1){

                    that.userImg = userInfor.photo;


                }else if( userInfor.photo == ""){
                    that.userImg = "assets/imgs/avator_default.png";

                } else{
                    that.userImg =  commonUrl.commentImgBaseUrl+userInfor.photo;
                }
                that.renderTop();
            }else{
            }

        },
        ef:function(result){
            console.log(result);
        }
    })
};
//渲染页面数据
HomePage.prototype.renderTop = function(){
    $('.header_photo_p')[0].innerHTML = this.phone;
    $('.header_photo img').attr('src',this.userImg);
    $('.ldye')[0].innerHTML = this.integral;
    $('.jstpl')[0].innerHTML = this.all_carbon;
}
// 注册微信jssdk
HomePage.prototype.registWXsdk = function() {
    var openid = localStorage.getItem("openid");
    var that = this;
    var url = window.location.href;
    return httpServe.request({
        method: "POST",
        url: commonUrl.getWeChatUrl,
        data: {
            url:url,
            openid:openid
        },
        sf:function(result){
            console.log(result.data); //打印返回的数据
            let userInfo = result.data.response;

            if (result.data.code == "001000") {
                that.wxconfig(userInfo.CorpID,userInfo.timestamp,userInfo.noncestr,userInfo.signature);

            } else {

            }
        },
        ef:function(result){
            console.log(result);
        }
    })
};
//微信配置
HomePage.prototype.wxconfig = function(appId,timestamp,nonceStr,signature) {
    var that = this;
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: ["scanQRCode","getLocation","translateVoice"] // 必填，需要使用的JS接口列表
    });

    wx.ready(function(){
        // wx.hideOptionMenu();
        //   alert("成功了");
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

        that.hideMenuItemList();
    });
    wx.checkJsApi({
        jsApiList: ["scanQRCode","getLocation","translateVoice"], //需要检测的JS接口列表
        success: function (res) {
            // 以键值对的形式返回，可用的api值true，不可用为false
            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            console.log(res);
            // alert(JSON.stringify("checkJsApi="+res));

        },
        fail:function () {
            $.toast('微信接口不可用');
        }
    });
    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        //console.log(res)
        // alert(JSON.stringify("error="+res));
        $.toast('config身份验证失败');
    });
}
//隐藏右上角按钮
HomePage.prototype.hideMenuItemList = function() {
    wx.hideMenuItems({
        menuList: ["menuItem:copyUrl"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    });
}
// 获取附近垃圾包
HomePage.prototype.attachment = function(){
    var cuureThis = this;
    console.log(wx);
    wx.getLocation({
        type: 'wgs84', //默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
            cuureThis.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            cuureThis.longitude = res.longitude ; // 经度，浮点数，范围为180 ~ -180。
            window.location.href = 'wasterList.html?'+'latitude='+cuureThis.latitude+'&longitude='+cuureThis.longitude;

        },
        fail:function () {
            $.toast('地址获取失败');
        }
    });
}


HomePage.prototype.scanQr = function(){
    wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
            var needResult = res.resultStr; // 当needResult 为 1 时，扫码返回的结果

            var ResultStr = JSON.stringify(needResult);

            var id = util.getUrlParam(ResultStr,"id");

            var token = localStorage.getItem("loginToken")

            httpServe.request({
                method: "POST",
                url: commonUrl.scanCodeURl + 'token=' + token,
                data: {"id": id},
                sf:function (result) {
                    if (result.data.code == "001000") {
                        $.toast("扫码成功，请开始投放垃圾!");
                    } else {
                        $.toast("垃圾已满，请到附近投放垃圾!");
                    }
                },
                ef:function (result) {
                    console.log(result);
                }
            })
        },
        fail:function () {
            $.toast('二维码扫描开启失败！');
        }
    });
}
//跳转二维码
HomePage.prototype.goMyRqcode = function(){
    window.location.href = 'qrCode.html';
}
// 个人中心
HomePage.prototype.goUserCenter = function(){
    window.location.href = 'personal-center.html';
}
// 历史订单
HomePage.prototype.goHistoryOrder = function(){
    window.location.href = 'historyList.html';
}
// 意见反馈
HomePage.prototype.goFeedback = function(){
    window.location.href = 'feedBack.html';
}
// 帮助中心
HomePage.prototype.goHelpCenter = function(){
    window.location.href = 'helpCenter.html';
}
// 跳转下载页面
HomePage.prototype.dowladAppLink = function(){
    window.location.href = 'http://android.myapp.com/myapp/detail.htm?apkName=com.xteamsoft.RefuseClassFicatio&ADTAG=mobile';
}

HomePage.prototype.init = function(){
    this.getUserInfo();
    this.registWXsdk();
};
HomePage.prototype.beforeInit = function(){
    var url = window.location.href;
    var openid = util.getUrlParam(url,"openid");
    // openid = "oRg270-xUYmywwswYAgA0bJVJSV8";
    console.log(openid);
    localStorage.setItem("openid",openid);
    function bindingPhone() {
        var data = httpServe.request({
            method: "POST",
            url: commonUrl.isBundlePhoneUrl+"?openid="+openid,
            data: {  /*openid:this.openid*/},
            sf:function(result){
                let userInfo = result.data;
                if (userInfo.code == "001000") {
                    localStorage.setItem("loginToken",result.data.response.token);
                    localStorage.setItem("userInfo",JSON.stringify(userInfo.response));
                    $(document.body).show();
                } else {
                    // 进入login页面
                    $.alert(userInfo.code);
                    // window.location.href = 'login.html';
                }
            },
            ef:function(result){
                $.alert('请求失败');
                // window.location.href = 'login.html';
            }
        });
        return data;
    }
    bindingPhone();
};



var homePage = new HomePage();
$.ready(homePage.beforeInit());
window.onload = function(){
    homePage.init();
};



