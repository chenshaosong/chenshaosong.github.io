function HistoryLext(){
    this.token = localStorage.getItem("loginToken");
    this.basepath = commonUrl.commentImgBaseUrl;
    this.underLineData = [];
    this.doInfiniteNum = 1;
    this.pageSize = "10";
    this.userIntegral = null;
    this.is_real = null;
    this.returnData = [];//全部数据
    this.paymentData = [];//待付款
    this.waitData = [];//待发货数据
    this.runningData = [];//待收货数据
    this.endData = [];//已完成数据
    this.listData = {};
    this.dataTotal = 0;
    this.currentStatus = 'all';
    this.type = util.getUrlParam("type");
    //横向过滤的数据
    this.tabData = [
        {title: "全部", status: "", num: "0", class: "active", currentPage: "0"},
        {title: "待支付", status: "no_pay", num: "1", class: "", currentPage: "0"},
        {title: "待提货", status: "N", num: "2", class: "", currentPage: "0"},
        {title: "已完成", status: "Y", num: "3", class: "", currentPage: "0"}
    ];
    this.currentTabData = this.tabData[0];
}
//点击列表进入详情页
HistoryLext.prototype.clickinfor = function(key)
{
    console.log(this.returnData[key]);
    var price = 0;
    var product = [];
    var params = this.returnData[key];
    params.product.forEach(element =>{
        price += element.product_integral;
        product.push({
            data:element,
            num:element.product_num,
            id:element.product_id
        });
    })
    var parm = {
        "shop_id":params.shop_id,
        "choosedProduct":product,
        "shop_name":"",
        "allPrice":price,
        "userIntegral":this.userIntegral,
        "is_real":this.is_real,
        "order_no":params.order_no,
        "type":"history",
        "id":params.id,
        "is_pay":params.is_pay
    };
    parm = JSON.stringify(parm);
    window.location.href = 'historylextDetail.html?parm='+parm;
};
//点击切换横向tab
HistoryLext.prototype.clickTab = function(number){
    this.classTopple(number,this.tabData,"active");

    //debugger;
    //this.slides.slideTo(number,500,true)
};
//刷新
HistoryLext.prototype.refreshMailList = function(){
    // this.navCtrl.push("OnlineMallPage")
    if(this.type != "vm"){
        this.requestAllData('1',this.currentStatus);
    }
};
//监听slide变化
/*HistoryLext.prototype.slideChanged = function(){
    let currentIndex = this.slides.getActiveIndex();//返回slide变化的索引值
    if(currentIndex>this.tabData.length-1){
        currentIndex = this.tabData.length-1
    }
    this.classTopple(currentIndex,this.tabData,"active");
};*/
//切换class
HistoryLext.prototype.classTopple = function(number,arr,cla){
    this.currentTabData = arr[number];
    var that = this;
    arr.forEach(function(v){
        v.class = "";
    });
    arr.forEach(element=>{
        if(element.num == number){
            element.class = cla;
            that.currentStatus = element.status;
            that.doInfiniteNum = 1;
            if(that.type != "vm"){
                that.requestAllData('1',element.status)
            }
        }
    });
    this.renderData();
};
/***
 * 跳转线下商城
 * ***/
/*HistoryLext.prototype.jumpUnderMessage = function(){
    this.navCtrl.push('HistoricalUnderlineOrderPage');
};*/
//请求全部数据
HistoryLext.prototype.requestAllData = function(num,status){
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
HistoryLext.prototype.requestStatusData = function(num,status){
    // web/api/shop/order/limit.action
    var that = this;
    httpServe.request({
        method:"POST",
        url:'web/api/shop/order/limit.action?token='+that.token,
        data:{page:num,pageSize:that.pageSize,status:status},
        sf:function (result) {
            util.hideLoading();
            if(result.data.code="001000"){
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
    });
};
/***
 * 上拉加载
 * ***/
HistoryLext.prototype.doInfinite = function(){
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
/*HistoryLext.prototype.cancerOrder = function(item){
    this.stopPro();
    this.tool.showLoading("");
    this.httpServer.request({
        method:"POST",
        url:this.requestUrl.cancelOrderURL+"?token="+this.token,
        data:{order_id:item.id}
    }).then(result=>{
        if(result.data.code == "001000"){
            this.tool.showToast("取消成功");
            this.requestAllData('1',this.currentStatus);

        }else{
            this.tool.showToast(result.data.message)

        }
        this.tool.hideLoading();
    }).catch(result=>{
        this.tool.hideLoading();
    })
};*/
//阻止冒泡
/*HistoryLext.prototype.stopPro = function(){
    event.stopPropagation()
};
HistoryLext.prototype.getItems = function(type: any) {
    return this.listData[type];
};*/
//点击按钮
/*HistoryLext.prototype.clickStatus = function(item){
    this.stopPro();

    // if(item.is_pay == 'N'){
    let allPrice = 0;
    item.product.forEach(element=>{
        allPrice += parseInt(element.product_integral);
    })
    this.navCtrl.push("PayPavilionOrderPage",{
        order_num:item.order_no,
        totalPrice:allPrice,
        is_real:this.is_real,
        order_id:item.id,
    })
    // let jumpData = {
    //     "order_num":item.order_no,
    //     "integral":item.price,
    //     "totalPrice":allPrice,
    //     "is_real":item.is_real,
    //     "order_id":item.id,
    //     "express_company":item.express_company,
    //     "express_no":item.express_no,
    //     "create_time":item.create_time,
    //     "freight":"0"
    // }
    // this.navCtrl.push("PayOrderPage",jumpData)
};*/
// }
/***
 * 获取个人信息
 * ***/
HistoryLext.prototype.getUserInfor = function(){
    console.log(this.token);
    var that = this;
    httpServe.request({
        method: "POST",
        url: commonUrl.userInforURL + 'token=' + that.token,
        data:{},
        sf:function (result) {
            util.hideLoading();
            if (result.data.code = "001000") {
                that.is_real = result.data.response.is_real;
                that.userIntegral = result.data.response.userIntegral;

            }else{
                $.toast(result.data.message)
            }
        },
        ef:function (result) {
            util.hideLoading();
        }
    });
};
//渲染tab页面
HistoryLext.prototype.renderData = function () {
    var str = '';
    this.tabData.forEach(function(v){
        str += `<div onclick="historyLextPage.clickTab(${v.num})"><div class="${v.class}">${v.title}</div></div>`
    });
    $('.del_tab')[0].innerHTML = str;
};
//渲染列表
HistoryLext.prototype.renderList = function (list) {
    var str = '';
    var that = this;
    console.log(list);
    list.forEach(function (v,k) {
        v.product.forEach(function (m,n) {
            str += `
               <div class="weui-cells" onclick="historyLextPage.clickinfor(${k})">
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
                      <p class="paragraph">乐豆：<span>${v.price}</span>  数量：${m.product_num}</p>
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

HistoryLext.prototype.init = function () {
    this.renderData();
    this.getUserInfor();
    if(this.type != "vm"){
        this.requestAllData('1', '')
    }
    this.doInfinite();
}

var historyLextPage = new HistoryLext();

window.onload = function () {
    historyLextPage.init();
}