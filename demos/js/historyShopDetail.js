function HistoryShopDetail() {
    this.nowUrl = window.location.href;
    this.token = localStorage.getItem("loginToken");

    this.product = null;//订单数据
    this.addressData = {};//地址数据
    this.subAddress = null;
    this.inforProductInfor = JSON.parse(util.getUrlParam(this.nowUrl,"inforProductInfor"));//
    this.buttonStatus = this.inforProductInfor.express_status;
    this.basepath = commonUrl.commentImgBaseUrl;
    this.sendData =publicServe.returnSendPart(this.inforProductInfor.express_type);//配送方式
    this.allPrice = null;//总价格
    this.jumpData = null;//跳转传值
    this.express_company = null;
    this.express_no = null;
    this.product = this.inforProductInfor.product;
    if(this.inforProductInfor.express_company == null || this.inforProductInfor.express_company == ""){
        this.express_company = "暂无物流信息";
    }else {
        this.express_company = this.inforProductInfor.express_company;
        this.express_no = this.inforProductInfor.express_no;
    }
}
//请求收货地址
HistoryShopDetail.prototype.returnAddress = function(){
    var that = this;
    util.showLoading("请等待");
    httpServe.request({
        method:"POST",
        url:'web/api/address/list.action?token='+that.token,
        data:{"page":"1","pageSize":"10"},
        sf:function (result) {
            util.hideLoading();
            if(result.data.code="001000"){
                let arr = result.data.response.rows;
                if(arr.length >= 0){
                    that.addressData = arr[0];
                    that.subAddress = that.addressData.address.substring(0,that.addressData.address.length-2);
                    //渲染数据
                    $('.name')[0].innerHTML = that.addressData.name;
                    $('.phone')[0].innerHTML = that.addressData.phone;
                    $('.grop')[0].innerHTML = that.subAddress + that.addressData.details_address;
                }
            }else{
                $.toast(result.data.message)
            }
        },
        ef:function (result) {
            util.hideLoading();
        }
    })
};

//初始化
HistoryShopDetail.prototype.init = function () {
    var that = this;
    this.returnAddress();
    this.allPrice = 0;
    this.product.forEach(element=>{
        that.allPrice += parseInt(element.product_price);
    })
    this.jumpData = {
        "order_num":this.inforProductInfor.order_no,
        "integral":this.inforProductInfor.price,
        "totalPrice":this.allPrice,
        "is_real":this.inforProductInfor.is_real,
        "order_id":this.inforProductInfor.id,
        "freight":this.inforProductInfor.freight
    }
    this.renderData();
};
//渲染数据
HistoryShopDetail.prototype.renderData = function () {
    var str = '';
    this.product.forEach(function(v,k){
        str += `<a class="weui-cell weui-cell_access" href="javascript:;">
                  <div class="weui-cell__hd"><img src="${commonUrl.basepath + v.product_image}" class="img1" /></div>
                  <div class="weui-cell__bd">
                    <h3 class="grop">${v.product_name}</h3>
                    <p class="paragraph">乐豆：<span>${v.product_price}</span>  数量：${v.product_num}</p>
                  </div>
                </a>`;
    });
    $('.detailList')[0].innerHTML = str;
    $('.detailNum')[0].innerHTML = this.inforProductInfor.freight;
    $('.delivery')[0].innerHTML = this.express_company;
    $('.no_msg')[0].innerHTML = this.express_no;
    $('.bianhao')[0].innerHTML = this.inforProductInfor.order_no;
    $('.time')[0].innerHTML = this.inforProductInfor.create_time;
};
//按钮点击时间
/*HistoryShopDetail.prototype.expressClick = function(status){
    var that = this;
    if(status == "wait"){
        util.showLoading("催单中");
        httpServe.request({
            method:"POST",
            url:'web/api/order/remind.action?token='+that.token,
            data:{order_id:that.inforProductInfor.id}
        }).then(result=>{
            util.hideLoading();
            if(result.data.code="001000"){

            }else{

            }
            $.toast(result.data.message)
        }).catch(result=>{
            util.hideLoading();
            $.toast(result.data.message)
        })
    }else if(status == "no_pay"){
        // this.navCtrl.push("PayOrderPage",this.jumpData)
    }else if(status == "running"){
        $.confirm({
            title: '确认收货',
            text: '是否确认已收货',
            onOK: function () {
                util.showLoading("确认中");
                httpServe.request({
                    method:"POST",
                    url:'web/api/order/receipt.action?token='+that.token,
                    data:{order_id:that.inforProductInfor.id},
                    sf:function (result) {
                        util.hideLoading();
                        if(result.data.code="001000"){
                            that.buttonStatus = "end"
                        }else{

                        }
                        $.toast(result.data.message)
                    },
                    ef:function (result) {
                        util.hideLoading();
                        $.toast(result.data.message)
                    }
                })
            },
            onCancel:function () {
                console.log('Cancel clicked');
            }
        });
        alert.present();

    }else if(status == "end"){
        let alert = this.alertCtrl.create({
            //title: '确认收货',
            subTitle: '该订单已完成',
            buttons: ['知道了']
        });
    }
}*/
var historyShopDetailPage = new HistoryShopDetail();

window.onload = function () {
    historyShopDetailPage.init();
}