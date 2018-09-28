function LoginPage() {
    this.phoneExc = /^1(3|4|5|7|8)\d{9}$/;
}
/**
 *
 * 登录按钮
 * @memberof toLogin
 */
LoginPage.prototype.runningLogin = function () {
    window.location.href = 'index.html';
};
LoginPage.prototype.toLogin = function () {
    var _this = this;
    var openid = localStorage.getItem("openid");
    console.log(this.getCodeUser());
    // openid = "oRg270-xUYmywwswYAgA0bJVJSV8";
    if (!this.checkPhone()) {
        $.toast("请输入正确的手机号");
    }
    else if (!this.getCodeUser()) {
        $.toast("请输入验证码");
    }
    else {
        util.showLoading("绑定中...");
        httpServe.request({
            method: 'POST',
            url: 'web/api/weixin/bindPhone.action?openid=' + openid + "&code=" + _this.getCodeUser() + "&phone=" + _this.getPhoneUser(),
            data: {},
            sf:function (result) {
                console.log(JSON.stringify(result, null, 4)); //打印返回的数据
                util.hideLoading();
                var userInfo = result.data;
                if (userInfo.code == "001000") {
                    localStorage.setItem("loginToken", result.data.response.token);
                    localStorage.setItem("userInfo", JSON.stringify(userInfo.response));
                    _this.runningLogin();
                }
                else if (result.data.code == "901015") {
                    $.toast(userInfo.message);
                    // _this.runningLogin();
                }
                else {
                    $.toast(userInfo.message);
                }
            },
            ef:function(result){
                util.hideLoading();
            }
        })
    }
};
/**
 * 快速注册
 * **/
// LoginPage.prototype.jumpRegister = function () {
//     this.navCtrl.push("RegisterPage", { phone: "" });
// };
/**
 *
 * 忘记密码
 * @memberof forgotPsw
 */
// LoginPage.prototype.forgotPsw = function () {
//     this.navCtrl.push("ForgotPswPage");
// };
/**
 * 键盘事件
 * @memberof onKey
 */
LoginPage.prototype.onKey = function (event) {
    var keyCode = event.keyCode;
    var phone = this.getPhoneUser();
    if (keyCode > 11) {
        phone = phone.substring(0, 11);
        // event.returnValue = true;
    }
    else {
        // event.returnValue = false;
    }
    console.log("keycode");
};
/**
 *
 * 用户输入手机号
 */
LoginPage.prototype.getPhoneUser = function () {
    console.log($('.phone').val().length);
    return $('.phone').val();
};
/**
 *用户输入验证码
 */
LoginPage.prototype.getCodeUser =function(){
    console.log($('.qrcode').val().length);
    return $('.qrcode').val();
}
/**
 * 发送验证码
 * **/
LoginPage.prototype.getVerifyingCode = function () {
    var _this = this;
    console.log(_this.getPhoneUser().length);
    if (_this.getPhoneUser().length < 11) {
        $.toast("请输入正确的手机号");
    }
    else {
        //开始倒计时
        util.showLoading("发送中...");
        return httpServe.request({
            method: 'POST',
            url: commonUrl.sendSmsURl,
            data: {
                phone: _this.getPhoneUser()
            },
            sf:function (result) {
                util.hideLoading();
                var dataCode = result.data;
                if (dataCode.code == "001000") {
                    _this.backTime();
                    //绑定数值
                    $('.getCode')[0].value = dataCode.smsCode;
                }
                else if (dataCode.code == "901015") {
                    $.toast(result.data.message);
                }
                else {
                    $.toast(result.data.message);
                }
            },
            ef:function(result){
                $.toast(result);
                console.log(result); //打印错误信息
            }
        })
    }
};
/**
 *
 * 倒计时
 * @memberof backTime
 */
LoginPage.prototype.backTime = function () {
    $('.getCode').attr('disabled','true');
    var _this = this;
    var i = 60;
    this.timer = setInterval(function () {
        // 每隔10秒  刷新时间
        i = i - 1;
        $('.getCode')[0].innerHTML = i + "秒后重新发送";
        if (i == 0) {
            clearInterval(_this.timer);
            $('.getCode')[0].innerHTML = "重新发送";
            $('.getCode').removeAttr('disabled');
        }
    }, 1000);
};
/**
 *手机号正则
 **/
LoginPage.prototype.checkPhone = function () {
    //获取手机号
    var phone = this.getPhoneUser();
    if (this.phoneExc.test(phone)) {
        return true;
    }
    else {
        return false;
    }
};
/**
 * 手机号输入焦点移出
 * **/
LoginPage.prototype.checkPhoneBlur = function () {
    var that =this;
    $('.phone').blur(function(){
        if (!that.checkPhone()) {
            $.toast("请输入正确的手机号");
        }
    })
};

var loginPage = new LoginPage();
$('.loginNow').click(function(){
    loginPage.toLogin();
});
loginPage.checkPhoneBlur();


