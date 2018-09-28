function AddBank() {
    var nowUrl = window.location.href;
    this.token = localStorage.getItem("loginToken");
    this.cardName = util.getUrlParam(nowUrl,'cardName');
    this.cardNum = util.getUrlParam(nowUrl,'cardNum');
    this.BankName = util.getUrlParam(nowUrl,'BankName');
    this.phoneNum = util.getUrlParam(nowUrl,'phoneNum');
    this.type = util.getUrlParam(nowUrl,'type');
    this.cardId = util.getUrlParam(nowUrl,"cardId");
    this.cardNum = this.type == 'add'?"":'**** **** **** '+this.cardNum.substring(this.cardNum.length-4,this.cardNum.length);
}
//获取个人信息
AddBank.prototype.updatePersonInfor = function(){
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
            var userInfor = result.data.response;
            if(result.data.code=="001000"){
                if(that.type == "add"){
                    $('.myCardName')[0].value = userInfor.name;
                }else {
                    $('.myCardName')[0].value = util.getUrlParam(window.location.href,'cardName');

                }
            }else{
                $.toast(result.data.message)
            }
            util.hideLoading();
        },
        ef:function (rsult) {
            util.hideLoading();
        }
    })
};
/**
 * 选择银行
 * **/
AddBank.prototype.chooseBank = function(){
    if(this.type != 'add'){return}
    //获取当前的值
    var val = $('.sBank')[0].innerHTML;
    window.location.href = 'bankList.html?bankName='+val;
};
/**
 * 下一步
 * **/
AddBank.prototype.nextsStep = function(){
    var phoneNum = this.getPhone();
    if(phoneNum == "" || phoneNum == null){
        $.toast("手机号不能为空");
    }else {
        this.bindBank();
    }

}
// 删除银行卡
AddBank.prototype.deleteCard = function(){
    var that = this;
   util.showLoading();
   httpServe.request({
        method:"POST",
        url:commonUrl.unbindCardUrl +"?token="+that.token,
        data:{
            bank_id:that.cardId,
        },
       sf:function (result) {
           util.hideLoading();
           if(result.data.code=="001000"){
               $.toast("解绑成功");
               window.location.href = 'myBank.html';
           }else{
               $.toast(result.data.message)
           }
       },
       ef:function (result) {
           util.hideLoading();
       }
    })
};
// 添加银行卡
AddBank.prototype.bindBank = function(){
    var that = this;
    util.showLoading();
    console.log(that.getCard(),that.getPhone());
    httpServe.request({
        method:"POST",
        url:commonUrl.bindBankURL +"?token="+that.token,
        data:{
            bank_name:that.BankName,
            card_no:that.cardNum,
            card_holder:that.getCard(),
            holder_phone:that.getPhone()
        },
        sf:function (result) {
            if(result.data.code =="001000"){
                $.toast(result.data.message);
                window.location.href = 'myBank.html';
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
//离开页面
AddBank.prototype.leaveWeb = function () {
    window.onbeforeunload = function () {
        localStorage.removeItem("bankName");
    }
};
//绑定元素
AddBank.prototype.addEl = function () {
    if (this.type == 'add'){
        $('.next').show();
        $('.delete').hide();
    }else{
        $('.next').hide();
        $('.delete').show();
    }

};
//初始化
AddBank.prototype.init = function () {
    var bankName = localStorage.getItem("bankName");
    console.log("==="+localStorage.getItem("bankName"));
    if(bankName){
        this.BankName = bankName;
    }else {

    }

    if(this.BankName == '' ||this.BankName == null ||this.BankName == '""'){
        this.BankName = "请选择银行";
    }
    if (this.phoneNum == '' ||this.phoneNum == null ||this.phoneNum == '""'){
        this.phoneNum = '';
    }
    if (this.cardName == '' ||this.cardName == null ||this.cardName == '""'){
        this.cardName = '';
    }
    //渲染到页面
    // console.log($('.phoneNum')[0]);
    $('.sBank')[0].innerHTML = this.BankName;
    $('.phoneNum')[0].value = this.phoneNum;
    $('.myCardNum')[0].value = this.cardNum;
    $('.myCardName')[0].value = this.cardName;

    this.addEl();
    this.updatePersonInfor();
};
//获取手机号
AddBank.prototype.getPhone = function () {
   return $('.phoneNum').val();
};
//获取卡号
AddBank.prototype.getCard = function () {
    return $('.myCardNum').val();
};
//实例化
var addBank = new AddBank();

//加载
window.onload = function () {
  addBank.init();
};
