function LextDetail(){
    var nowUrl = window.location.href;
    var parm = JSON.parse(util.getUrlParam(nowUrl,"parm"));
    this.token=localStorage.getItem("loginToken");
    this.choosedProduct = null;//选中数据
    this.handleData = null;//处理数据
    this.shop_name = null;//商铺name
    this.allPrice = 0;//总价格
    this.userIntegral = null;//剩余乐豆
    this.shop_id = null;//商户ID
    this.is_real = null;//是否设置支付密码
    this.getUserInforData = null;
    this.pay_password = null;
    this.type = null;
    this.btnTex ="结算";
    this.is_pay = null;
    this.status = null;
    this.basepath = commonUrl.commentImgBaseUrl;
    this.islife = null;
    this.isbg = null;
    this.shop_address = null;
    this.choosedProduct = parm.choosedProduct;
    this.shop_name = parm.shop_name;
    this.allPrice = parm.allPrice;
    this.userIntegral = parm.userIntegral;
    this.shop_id = parm.shop_id;
    this.is_real = parm.is_real;
    this.type = parm.type;
    this.is_pay = parm.is_pay;
    this.status = parm.status;
    this.shop_address = parm.shop_address;

    if(this.type == "history") {
        if (this.is_pay == "Y") {
            this.btnTex = "已支付";
        }
    }
    if(this.status == 'C'){
        this.islife=true;
        this.isbg = {background:'#E68D76',opacity:1};
        this.btnTex = '已取消';
    }
}
// LextDetail.prototype.initSelect = function(){
//     // $("#methods").select({
//     //     title: "配送方式",
//     //     items: ["自提"]
//     // });
// };
/*LextDetail.prototype.jumpExchange = function(){
    var that = this;
    if(this.type == "history"){
        if(this.is_pay == "N"){
            this.navCtrl.push("PayPavilionOrderPage",{
                order_num:this.navParams.get("order_no"),
                totalPrice:this.allPrice,
                is_real:this.is_real,
                order_id:this.navParams.get("id"),
            })
        }else {
            $.toast("该订单已经支付")
        }

    }else {
        if(this.is_real != "P"){this.promptModal('您还未实名认证，或者认证未通过，请先去认证!',"certification");return}
        if(this.pay_password != "Y"){this.promptModal('您还未设置密码，请先去设置!',"");return}
        util.showLoading("请求中");
        httpServe.request({
            method:"POST",
            url:commonUrl.orderNumberURL +'token='+that.token,
            data:{},
            sf:function (result) {
                if(result.data.code="001000"){
                    debugger;
                    var order_no = result.data.response.order_no;
                    httpServe.request({
                        method:"POST",
                        url:commonUrl.addOrderURL +'token='+that.token,
                        data:{order_no:order_no,price:that.allPrice,shop_id:that.shop_id,product:that.getChoosedId(this.choosedProduct)},
                        sf:function (result) {
                            util.hideLoading();

                            if(result.data.code="001000"){
                                if(result.data.response){
                                    this.navCtrl.push("PayPavilionOrderPage",{
                                        order_num:order_no,
                                        totalPrice:that.allPrice,
                                        is_real:that.is_real,
                                        order_id:result.data.response.order_id
                                    })
                                }else{
                                    $.toast(result.data.message)
                                }

                            }else{
                                $.toast(result.data.message)
                            }
                        },
                        ef:function (result) {
                            util.hideLoading()
                            $.toast(result)
                        }
                    })
                }else{
                    $.toast(result.data.message)
                }
            },
            ef:function (result) {
                util.hideLoading()
            }
        })
    }

}*/
//操作提示
/*LextDetail.prototype.promptModal = function(text,type){
    var that = this;
    if(type == "certification"){
        $.modal({
            title: "操作提示",
            text: text,
            buttons: [
                { text: "去实名认证", onClick: function(){
                        console.log('Saved clicked');
                        window.onload.href = 'authPerson.html?userInfor='+ that.getUserInforData;
                    } },
                { text: "取消", className: "default", onClick: function(){
                        console.log('Cancel clicked');
                    } },
            ]
        });
    }else {
        $.modal({
            title: "操作提示",
            text: text,
            buttons: [
                { text: "设置支付密码", onClick: function(){
                        console.log('Saved clicked');
                        var passwordTurn = localStorage.getItem("is_password");
                        if(passwordTurn != "Y"){
                            window.onload.href = 'setPayPassword.html';
                        }else{
                        }
                    } },
                { text: "取消", className: "default", onClick: function(){
                        console.log('Cancel clicked');
                    } },
            ]
        });
    }
}*/
/***
 * 处理选中数据
 * ***/
/*LextDetail.prototype.getChoosedId = function(arr){
    var newArr = [];
    arr.forEach(element=>{
        newArr.push({id:element.id,num:element.num})
    })
    return arr
}*/
/***
 * 获取个人信息
 * ***/
LextDetail.prototype.getUserInfor = function(){
    var that = this;
    console.log(this.token);
    httpServe.request({
        method: "POST",
        url: commonUrl.userInforURL + 'token=' + that.token,
        data:{},
        sf:function (result) {
            util.hideLoading();
            if (result.data.code = "001000") {
                that.getUserInforData = result.data.response;
                that.userIntegral = result.data.response.integral;
                that.is_real = result.data.response.is_real;
                that.pay_password = result.data.response.pay_password;
            }else{
                $.toast(result.data.message)
            }
        },
        ef:function (result) {
            util.hideLoading();
        }
    })
};
//渲染数据
LextDetail.prototype.renderData = function(){
    var that = this;
    $('.grop')[0].innerHTML = this.shop_name;
    var str = '';
    var list = this.choosedProduct;
    console.log(list);
    if(!list){
        list = [];
    }
    if(this.type != 'history'){
        list.forEach(function (v) {
            if(v.data.activity_price != 0){
                str += `<a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="${that.basepath+v.data.product_image}" class="img1" /></div>
                    <div class="weui-cell__bd">
                        <h3 class="grop">${v.data.product_name}</h3>
                        <div class="no_history">
                            <p class="paragraph_pay paragraph">乐豆：<span>${v.data.online_integral}</span>  数量：${v.num}</p>
                        </div> 
                    </div>
                </a>`
            }else{
                str += `<a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="${that.basepath+v.data.product_image}" class="img1" /></div>
                    <div class="weui-cell__bd">
                        <h3 class="grop">${v.data.product_name}</h3>
                        <div class="no_history">
                            <p class="paragraph">乐豆：<span>${v.data.online_integral}</span>  数量：${v.num}</p>
                        </div> 
                    </div>
                </a>`
            }

        });
    }else{
        list.forEach(function (v) {
            str += `<a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="${this.basepath+v.data.product_image}" class="img1" /></div>
                    <div class="weui-cell__bd">
                        <h3 class="grop">${v.data.product_name}</h3>     
                        <p class="paragraph history">乐豆：<span>${v.data.product_integral}</span> 数量：${v.num}</p>
                    </div>
                </a>`
        });
    }
    $('.list_msg')[0].innerHTML = str;

};
//init
LextDetail.prototype.init = function () {
    this.getUserInfor();
    this.renderData();
};
var lextDetailPage = new LextDetail();
// LextDetailPage.initSelect();
window.onload = function () {
    lextDetailPage.init();
}