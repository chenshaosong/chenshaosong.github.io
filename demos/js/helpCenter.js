function HelpCenter(){
    this.listArr = [];
    this.pageSize = '';
    this.page = '';
    this.total = '';
}
// 获取帮助列表
HelpCenter.prototype.getHelpList = function(){
    var that = this;
    this.page = 1;
    this.pageSize = 10;
    var token = localStorage.getItem("loginToken");
    httpServe.request({
        method:"POST",
        url:commonUrl.helpCenterURL+"?token="+token,
        data:{
            page:that.page.toString(),
            pageSize:that.pageSize.toString()
        },
        sf:function (result) {
            util.hideLoading();
            that.total =  Math.ceil(result.data.response.total/parseInt(that.pageSize));
            if(result.data.code="001000"){
                that.listArr = result.data.response.rows;
                // this.updata.detectChanges();
                that.renderData(that.listArr);
            }else{
                $.toast(result.data.message)
            }
        },
        ef:function (result) {
            util.hideLoading();
        }
    })
};
// 获取更多消息
HelpCenter.prototype.doInfinite = function(infiniteScroll){
    var that = this;
    //滚动加载
    $(document.body).infinite(100).on("infinite", function() {
        //加载页数增加
        that.page ++;
        //如果页数小于总页数 关闭加载 提示
        if(that.page > that.total){
            $.toast('没有更多信息');
            $(document.body).destroyInfinite();
            return;
        }else {
            //否则加载数据
            util.showLoading();
            var loading = false;
            if (loading) return;
            loading = true;
            var token = localStorage.getItem("loginToken");
            httpServe.request({
                method:"POST",
                url:commonUrl.helpCenterURL+"?token="+token,
                data:{
                    page:that.page.toString(),
                    pageSize:that.pageSize.toString()
                },
                sf:function (result) {
                    util.hideLoading();
                    if(result.data.code="001000"){
                        that.listArr.push(result.data.response.rows);
                        that.renderData(that.listArr);
                    }else{
                        $.toast(result.data.message);
                    }
                },
                ef:function (result) {
                    util.hideLoading();
                }
            })
        }
    });
};
// 跳转详情
HelpCenter.prototype.itemSelected = function(key){
    var nameInfor = this.listArr[key].title;
    var listId =this.listArr[key].id;
    window.location.href = 'helpDetail.html?nameInfor='+nameInfor+'&listId='+listId;
};
//渲染数据
HelpCenter.prototype.renderData = function(list){
    var str = '';
    if(!list){
        list = [];
    }
    list.forEach(function (v,k) {
        str +=`<a class="weui-cell weui-cell_access listMenu" href="javascript:;" onclick="helpCenterPage.itemSelected(${k})">
                    <div class="weui-cell__bd">
                      <p>${v.title}</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                 </a>`
    });

   $('.help_msg')[0].innerHTML = str;
    if(this.page > this.total){
        $.toast('没有更多信息');
        $('.weui-loadmore').hide();
        return;
    }
};
HelpCenter.prototype.init = function(){
    this.getHelpList();
    this.doInfinite();
};
var helpCenterPage = new HelpCenter()
window.onload = function(){
    helpCenterPage.init();
};