function MyBank(){
    this.token = localStorage.getItem("loginToken");
    this.type = util.getUrlParam(window.location.href,"type");
    this.dataList = [];
};
//点击银行卡
MyBank.prototype.listItemClick = function(key){
    var item = this.dataList[key];
    if(this.type == "1"){
        localStorage.setItem("Bank_id",item.id);
        window.history.back();
    }else{
        window.location.href ='addBank.html?BankName='+item.bank_name+'&cardNum='+item.card_no+'&cardName='+item.card_holder+'&phoneNum='+item.holder_phone+'&cardId='+item.id+'&type='+"write";
    }

};
/**
 * 添加银行卡
 * **/
MyBank.prototype.addBankCard = function (){
    window.location.href ='addBank.html?BankName=&cardNum=&cardName=&phoneNum=&type=add';
};
// 获取银行卡列表
MyBank.prototype.getBankList = function(){
    util.showLoading();
    var that = this;
    httpServe.request({
        method:"POST",
        url:commonUrl.bankListURL +"?token="+that.token,
        data:{
        },
        sf:function (result) {
            if(result.data.code="001000"){
                that.dataList = result.data.response;
                var bankList = result.data.response;
                that.renderData(bankList);
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
//渲染页面
MyBank.prototype.renderData = function (list) {
    var listStr = '';
    list.forEach(function(v,k){
        listStr += `
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" onclick= "myBankPage.listItemClick(${k})">
            <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" src="assets/imgs/avator_default.png">
            </div>
            <div class="weui-media-box__bd">
                <h2>${v.bank_name}</h2>
                <p>储蓄卡</p>
                <div class="cardNum">
                    <div>****</div>
                    <div>****</div>
                    <div>****</div>
                    <div>${v.card_no.substring(v.card_no.length-4,v.card_no.length)}</div>
                </div>
            </div>
        </a>`;
    });
    $('.ulist')[0].innerHTML = listStr;
};
//初始化
MyBank.prototype.init = function () {
    this.getBankList();
};
var myBankPage = new MyBank();
window.onload = function () {
    myBankPage.init();
};