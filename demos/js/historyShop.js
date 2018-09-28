function HistoryShop(){
    this.tabData = [
        {title: "全部", status: "all", num: "0", class: "active", currentPage: "0"},
        {title: "待付款", status: "no_pay", num: "1", class: "", currentPage: "0"},
        {title: "待发货", status: "wait", num: "2", class: "", currentPage: "0"},
        {title: "待收货", status: "running", num: "3", class: "", currentPage: "0"},
        {title: "已完成", status: "end", num: "4", class: "", currentPage: "0"}
    ];
    this.token = localStorage.getItem("loginToken");
    this.icon = "camera";
    this.modalClass = null;
    this.typeName = "recommend";
    this.safari = 'exchange';
    this.allStatusData = {};
    this.doInfiniteNum = 1;
    this.dataTotal = 1;
    this.pageSize = "10";
    this.returnData = [];//全部数据
    this.paymentData = [];//待付款
    this.waitData = [];//待发货数据
    this.runningData = [];//待收货数据
    this.endData = [];//已完成数据
    this.molTypeData = []//某个下拉数据
    this.listData = {};
    this.freight = '';
    this.currentStatus = 'all';
    this.currentTabData = {};
    this.basepath = commonUrl.commentImgBaseUrl;
}
//点击列表进入详情页
HistoryShop.prototype.clickinfor = function(key)
{
    var par = this.returnData[key];
    par["freight"] = this.freight;
    par = JSON.stringify(par);
    window.location.href = 'historyShopDetail.html?inforProductInfor='+par;
    // this.navCtrl.push("HistoricalOrderInforPage", {"inforProductInfor": par})
};
HistoryShop.prototype.getFee = function(){
    var that = this;
    httpServe.request({
        method: "POST",
        url: 'web/api/order/getFee.action?token=' + this.token,
        data: {},
        sf:function (result) {
            if (result.data.code == "001000") {
                if (result.data.response.fee == "" || result.data.response.fee == null) {
                    that.freight = 10;
                } else {
                    that.freight = result.data.response.fee;

                }
            } else {
                $.toast(result.data.message)
            }
        },
        ef:function (result) {
            console.log(result);
        }
    })
};

//点击切换横向tab
HistoryShop.prototype.clickTab = function(number){
    //debugger;
    this.classTopple(number,this.tabData,"active");
    //this.slides.slideTo(number,500,true)
};
//点击进入商城
HistoryShop.prototype.refreshMailList = function(){
    // this.navCtrl.push("OnlineMallPage")
    this.requestAllData('1',this.currentStatus);
};
//监听slide变化
/*HistoryShop.prototype.slideChanged = function(){
    var currentIndex = this.slides.getActiveIndex();//返回slide变化的索引值
    if(currentIndex>this.tabData.length-1){
        currentIndex = this.tabData.length-1
    }
    this.classTopple(currentIndex,this.tabData,"active");
}*/
//切换class
HistoryShop.prototype.classTopple = function(number,arr,cla){
    var that = this;
    this.currentTabData = arr[number];
    arr.forEach(function (v) {
        v.class = "";
    });
    arr.forEach(function(element){

        if(element.num == number){
            element.class = cla;
            that.renderData();
            that.currentStatus = element.status;
            that.doInfiniteNum = 1;
            that.requestAllData('1',element.status)
        }
    })
};
/***
 * 跳转线下商城
 * ***/
/*HistoryShop.prototype.jumpUnderMessage =function(){
    this.navCtrl.push('HistoricalUnderlineOrderPage');
};*/
//请求全部数据
HistoryShop.prototype.requestAllData = function(num,status){
    this.returnData = [];//全部数据
    this.waitData = [];//待发货数据
    this.runningData = [];//待收货数据
    this.endData = [];
    util.showLoading("请求中");
    this.requestStatusData(num,status)
};
/***
 *
 * ***/
HistoryShop.prototype.requestStatusData = function(num,status){
    var that = this;
    httpServe.request({
        method:"POST",
        url:'web/api/order/getOrderList.action?token='+this.token,
        data:{page:num,pageSize:this.pageSize,status:status},
        sf:function (result) {
            util.hideLoading();
            if(result.data.code == "001000"){
                //this.returnData = result.data.response.rows;
                that.dataTotal = result.data.response.total;
                result.data.response.rows.forEach(element=>{
                    that.returnData.push(element);
                })
                that.renderList(that.returnData);

            }else{
                $.toast(result.data.message);
                $('.no_order_show').show();
            }
        },
        ef:function (result) {
            util.hideLoading();
            $('.no_order_show').show();
        }
    })
};
/***
 * 上拉加载
 * ***/
HistoryShop.prototype.doInfinite = function(){
    var that = this;
    $(document.body).infinite(100).on("infinite", function() {
        //加载页数增加
        that.doInfiniteNum++;
        //如果页数小于总页数 关闭加载 提示
        if(that.doInfiniteNum == Math.ceil(that.dataTotal/parseInt(that.pageSize))||Math.ceil(that.dataTotal/parseInt(that.pageSize)) == 1){
            $.toast('没有更多信息');
            //移除滚动加载
            $(document.body).destroyInfinite();
            return;
        }else {
            //否则加载数据
            util.showLoading();
            var loading = false;
            if (loading) return;
            loading = true;
            that.requestStatusData(that.doInfiniteNum.toString(),that.currentStatus);
        }
    });
};
// 取消订单
/*HistoryShop.prototype.cancerOrder = function(item){
    var that = this;
    this.stopPro();
    util.showLoading("");
    httpServe.request({
        method:"POST",
        url:commonUrl.cancelOrderURL+"?token="+that.token,
        data:{order_id:item.id},
        sf:function (result) {
            if(result.data.code =="001000"){
                $.toast("取消成功");
                that.requestAllData('1',this.currentStatus);

            }else{
                $.toast(result.data.message)

            }
            util.hideLoading();
        },
        ef:function (result) {
            util.hideLoading();
        }
    })
};*/
//阻止冒泡
/*HistoryShop.prototype.stopPro = function(){
    event.stopPropagation()
};*/
//判断modal框是否存在
/*HistoryShop.prototype.modalShowHide = function(){
    this.modalClass = this.modalClass == ""?"showBox":"";
};
HistoryShop.prototype.getItems = function(type) {
    return this.listData[type];
};*/
//点击按钮
/*HistoryShop.prototype.clickStatus = function(item){
    var that = this;
    this.stopPro();
    if(item.express_status == 'no_pay'){
        let allPrice = '';
        item.product.forEach(element=>{
            allPrice += parseInt(element.product_price);
        })
        let jumpData = {
            "order_num":item.order_no,
            "integral":item.price,
            "totalPrice":allPrice,
            "is_real":item.is_real,
            "order_id":item.id,
            "express_company":item.express_company,
            "express_no":item.express_no,
            "create_time":item.create_time,
            "freight":that.freight
        }
        // this.navCtrl.push("PayOrderPage",jumpData)
    }else if(item.express_status == 'wait'){
        util.showLoading("催单中");
        httpServe.request({
            method:"POST",
            url:'web/api/order/remind.action?token='+that.token,
            data:{order_id:item.id},
            sf:function (result) {
                util.hideLoading();
                if(result.data.code == "001000"){

                    $.toast(result.data.message);
                }else{
                    $.toast(result.data.message)

                }
            },
            ef:function (result) {
                util.hideLoading();
            }
        })
    }else if(item.express_status == "running"){
        $.confirm({
            title: '确认收货',
            text: '是否确认已收货',
            onOK: function () {
                util.showLoading("确认中");
                httpServe.request({
                    method:"POST",
                    url:'web/api/order/receipt.action?token='+that.token,
                    data:{order_id:item.id},
                    sf:function (result) {
                        util.hideLoading();
                        if(result.data.code == "001000"){
                            that.requestAllData('1',this.currentStatus)
                        }else{
                            $.toast(result.data.message)

                        }
                    },
                    ef:function (result) {
                        util.hideLoading();
                    }
                })
            },
            onCancel:function () {
                console.log('Cancel clicked');
            }
        });
        alert.present();
    }else if(item.express_status == "end"){
       var alert = $.alert({
            // title: '标题',
            text: '该订单已完成',
            onOK: function () {
                //点击确认
            }
        });
    }
}*/



HistoryShop.prototype.init = function () {
    this.renderData();
    this.currentTabData = this.tabData[0];
    this.getFee();
    this.requestAllData('1', 'all');
    this.doInfinite();
};
//滚动加载
/*HistoryShop.prototype.infData = function(){
    var loading = false;  //状态标记
    $(document.body).infinite().on("infinite", function() {
        this.doInfiniteNum++;

        setTimeout(() => {
            if(loading) return;
            loading = true;
            this.requestStatusData(this.doInfiniteNum.toString(),status);
            if(this.doInfiniteNum == Math.ceil(this.dataTotal/parseInt(this.pageSize))||Math.ceil(this.dataTotal/parseInt(this.pageSize)) == 1){
                $(document.body).destroyInfinite()//移除滚动加载
            }
        }, 500);
    });
};*/
//渲染tab页面
HistoryShop.prototype.renderData = function () {
    var str = '';
    this.tabData.forEach(function(v){
        str += `<div onclick="historyShopPage.clickTab(${v.num})"><div class="${v.class}">${v.title}</div></div>`
    });
    $('.del_tab')[0].innerHTML = str;
};
//渲染列表
HistoryShop.prototype.renderList = function (list) {
    var str = '';
    var that = this;
    if(!list){
        list = [];
    }
    list.forEach(function (v,k) {
        v.product.forEach(function (m,n) {
            str += `
               <div class="weui-cells" onclick="historyShopPage.clickinfor(${k})">
                  <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                      <p>订单编号</p>
                    </div>
                    <div class="weui-cell__ft">
                      ${v.order_no}
                    </div>
                  </a>
                  <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="${that.basepath+m.product_image}" class="img1" /></div>
                    <div class="weui-cell__bd">
                      <h3 class="grop">${m.product_name}</h3>
                      <p class="paragraph">乐豆：<span>${m.product_price}</span>  数量：${m.product_num}</p>
                    </div>
                  </a>
                  <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                      <p>下单时间：${v.create_time}</p>
                    </div>
                    <!--<div class="weui-cell__ft">-->
                      <!--<p class="btn_his">去支付</p>-->
                    <!--</div>-->
                  </a>
                </div>
           `;
        })
    });
    $('.data_list')[0].innerHTML = str;
    $('.no_order_show').hide();
};
var historyShopPage = new HistoryShop();

window.onload = function () {
    historyShopPage.init();
};