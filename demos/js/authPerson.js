function AuthPerson() {
    this.userInfor = JSON.parse(util.getUrlParam(window.location.href,'userInfor'));
    $('.myName').val(this.userInfor.name);
    $('.myId').val(this.userInfor.id_card);
    if(this.userInfor.is_real == "A"||this.userInfor.is_real == "P"){
        this.nextBtnBg = "nextBtnBg";
    }else {
        this.nextBtnBg = "";

    }
}
//是否让修改
AuthPerson.prototype.isFalse = function(){
    var that = this;
    if(this.userInfor.is_real == "A"||this.userInfor.is_real == "P"){
        $('.myName').attr('disabled',true);
        $('.myId').attr('disabled',true);
        $('.shenqing').addClass('weui-btn_disabled').click(function () {

        });
    }else{
        $('.myName').removeAttr('disabled');
        $('.myId').removeAttr('disabled');
        $('.shenqing').removeClass('weui-btn_disabled').click(function () {
            that.returnPerson();
        });
    }
};
//返回提示语
AuthPerson.prototype.returnHint = function(){
    switch (this.userInfor.is_real){
        case 'N':
            return "请准确填写你的身份信息，实名认证一旦成功将不能修改";
        case 'A':
            return "审核需要3-7个工作日，请耐心等待"
        case 'E':
            return "认证失败，请确认后重新输入"
        case 'P':
            return "认证成功"
        default:
            return "请准确填写你的身份信息，实名认证一旦成功将不能修改";
    }
};
AuthPerson.prototype.returnPerson = function(){
    var nameItem = this.getName();
    var cardItem = this.getId();
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(!nameItem){$.toast("请先填写姓名");return}
    if(!cardItem){$.toast("请先填写身份证号");return}
    if(!reg.test(cardItem)){$.toast("身份证号格式错误，请重新输入");return}
    var token = localStorage.getItem("loginToken");
    util.showLoading("保存中");
    httpServe.request({
        method:"POST",
        url:'web/api/user/realNameAuth.action?token='+token,
        data:{name:nameItem,id_card:cardItem},
        sf:function (result) {
            util.hideLoading()
            if(result.data.code == "001000"){
                localStorage.setItem("is_real",'A');
                this.navCtrl.pop();
            }else{
                $.toast(result.data.message)
            }
        },
        ef:function (result) {
            util.hideLoading();
            $.toast(result.statusText)
        }
    })
};
AuthPerson.prototype.getName = function () {
    return $('.myName').val();
};
AuthPerson.prototype.getId = function () {
    return $('.myId').val();
};
AuthPerson.prototype.setNode = function (msg) {
    $('.markedWords')[0].innerHTML = msg;
};
AuthPerson.prototype.init = function () {
    this.setNode( this.returnHint() );
    this.isFalse();
};

AuthPerson.prototype.renderData = function () {

};

var authPersonPage = new AuthPerson();

window.onload = function () {
    this.authPersonPage.init();
};