function QrCode(){
    this.userId = JSON.parse(localStorage.getItem("userInfo")).id;
    this.qrCode = null;
    this.timer = null;
    this.codeData = null;
    this.timer = null;
    this.payTimer = null;
}
//选择二维码
QrCode.prototype.chooseQrCode = function(){
    var that = this;
    $('.choose_code').on('click','.qrcode_choose',function () {
        $('.choose_code .qrcode_choose').removeClass('current_code');
        $(this).addClass('current_code');
        console.log($(this).find('i').hasClass('ico_code_put'));
        if ($(this).find('i').hasClass('ico_code_put')){
            that.refreshQrCode(that.userId,'user');
            clearInterval(that.timer);
            clearInterval(that.payTimer);
        }else{
            that.refreshQrCode(that.userId,'pay');
            that.autoCheckPayStatus();
            that.checkPayStatus();
        }
    });
};
//渲染二维码
QrCode.prototype.refreshQrCode = function(id,type){
    var that = this;
    // let userCode = this.requestUrl.commentBaseUrl+"web/static/qrcode/download-app.html?userId="+id+'&type='+type;
    var userCode = "userId="+id+'&type='+type;
    if(this.qrCode){
        // this.qrCode.makeCode(this.requestUrl.commentBaseUrl+'?userId='+id+'&type='+type)
        if(type == "user"){
            this.qrCode.makeCode(userCode);
        }else{
            this.qrCode.makeCode(this.codeData);
        }
    }else{
        if(type == "user"){
            this.generateQrcode(userCode);
        }else{
            this.generateQrcode(this.codeData);
        }
    }
};
//生成二维码
QrCode.prototype.generateQrcode = function(content){
    this.qrCode = new QRCode(this.container.nativeElement,{
        // text:this.requestUrl.commentBaseUrl+'?userId='+id+'&type='+type,
        text:content,
        width:180,
        height:180
    });
    console.log(this.qrCode);
};
//检查支付状态
QrCode.prototype.checkPayStatus = function(){
    var that = this;
    var token = localStorage.getItem("loginToken");
   httpServe.request({
        method: "POST",
        url: commonUrl.payStatusUrl,
        data: { "qrCode": that.codeData,'token':token },
       sf:function (result) {
           console.log(result);
           if (result.data.code == "001000") {
               $.toast('支付成功');
           } else {
               // this.pqrcode_str = '二维码已过期，请点击更新！';
           }
       },
       ef:function (result) {
           // this.tool.showToast(result.data.message)
       }
    })
};
//渲染二维码
QrCode.prototype.refreshQrCode = function(id,type){
    if(this.qrCode){
        // this.qrCode.makeCode(this.requestUrl.commentBaseUrl+'?userId='+id+'&type='+type)
        this.qrCode.makeCode(commonUrl.commentBaseUrl+"web/static/qrcode/download-app.html"+"?userId="+id+"&type="+type);

    }else{
        this.qrCode = new QRCode(document.getElementById('qr_codes'),{
            // text:this.requestUrl.commentBaseUrl+'?userId='+id+'&type='+type,
            text:commonUrl.commentBaseUrl+"web/static/qrcode/download-app.html"+"?userId="+id+"&type="+type,
            width:180,
            height:180
        });
    }
};
//二维码自动更新
QrCode.prototype.autoQrcode = function(){
    var that = this;
    this.timer = setInterval(()=>{
        //获取二维码
        that.requestData();
        //渲染二维码
        that.refreshQrCode(that.userId,'pay');
        console.log('重新渲染')
    },3000);
};
QrCode.prototype.autoCheckPayStatus = function(){
    var that = this;
    this.payTimer = setInterval(()=>{
        that.checkPayStatus();
    },3000);
}
//请求数据
QrCode.prototype.requestData = function(){
    var that = this;
    var token = localStorage.getItem("loginToken");
    httpServe.request({
        method:"POST",
        url:commonUrl.qrCodeURL,
        data:{
            type:"pay",
            token:token
        },
        sf:function (result) {
            console.log(result);
            that.codeData = result.data.response;
        },
        ef:function (result) {
            console.log(result);
        }
    })
}
//初始化
QrCode.prototype.init = function () {
    this.refreshQrCode(this.userId,'user');
    this.chooseQrCode();
    this.requestData();
};
//创建实例
var qrCodePage = new QrCode();
window.onload = function () {
    qrCodePage.init();
};
window.onbeforeunload = function () {
    clearInterval(this.timer);
    clearInterval(this.payTimer);
}