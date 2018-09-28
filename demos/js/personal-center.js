function PersonalCenter(){
    this.userInfor = null;
    this.avatarPath = null;
};
//页面跳转
PersonalCenter.prototype.goWeb = function (web) {
    window.location.href = web;
};
//跳转身份页面
PersonalCenter.prototype. personAuth = function(){
    var usermsg = JSON.stringify(this.userInfor);
    window.location.href = 'authPerson.html?userInfor='+usermsg;
};
//更新个人信息
PersonalCenter.prototype.updatePersonInfor = function(){
    var that = this;
    util.showLoading("");
    var token = localStorage.getItem("loginToken");
    httpServe.request({
        method: 'POST',
        url:'web/api/user/getUserInfo.action',
        data: {
            token:token,
        },
        sf:function (result) {
            that.userInfor = result.data.response;
            if(result.data.code=="001000"){
                localStorage.setItem("is_password",that.userInfor.pay_password);
                localStorage.setItem("is_real",that.userInfor.is_real);
                // if(this.userInfor.photo == ""){
                //     this.avatarPath = "assets/imgs/avator_default.png"; //用户默认头像
                //
                // }else {
                //     this.avatarPath = this.commentUrl.commentImgBaseUrl+this.userInfor.photo;
                // }
                if(that.userInfor.photo.indexOf("http")>-1){

                    that.avatarPath = that.userInfor.photo;

                }else if( that.userInfor.photo == ""){
                    that.avatarPath = "assets/imgs/avator_default.png";

                } else{

                    that.avatarPath = commonUrl.commentImgBaseUrl+that.userInfor.photo;
                }
                that.renderData();
            }else{
                $.toast(result.data.message)
            }
            util.hideLoading();
        },
        ef:function (result) {
            util.hideLoading();
        }
    })
};
//确认身份信息
PersonalCenter.prototype.authentication = function(){
    var is_real = localStorage.getItem("is_real");
    var already = $('.already')[0].innerHTML;
    switch (is_real){
        case "N":
            already = "未认证";
            break;
        case "P":
            already = "已认证";
            break;
        case "A":
            already = "审核中";
            break;
        case "E":
            already = "认证失败";
            break;
    }
};
//渲染页面
PersonalCenter.prototype.renderData = function(){
    $('.perPic').attr('src',this.avatarPath);
    $('.perName')[0].innerHTML = this.userInfor.phone;
};

PersonalCenter.prototype.init = function () {
    this.authentication();
    this.updatePersonInfor();
};
//实例化
var personalCenterPage = new PersonalCenter();
window.onload = function () {
    personalCenterPage.init();
}