function HelpDetail(){
    this.nowUrl = window.location.href;
    this.temp = '';
    this.content = '';
    this.pageSize = '';
    this.page = '';
    this.nameInfor = util.getUrlParam(this.nowUrl,'nameInfor');
    this.listId = util.getUrlParam(this.nowUrl,'listId');
    $('title')[0].innerHTML = this.nameInfor;
}
//   获取消息详情
HelpDetail.prototype.gethelpInfoList = function(){
    var that = this;
    var token = localStorage.getItem("loginToken");
   httpServe.request({
        method:"POST",
        url:commonUrl.helpInfoURL+"?token="+token,
        data:{
            id:that.listId,
        },
       sf:function (result) {
           util.hideLoading();
           if(result.data.code="001000"){
               var content  = result.data.response.content;
               that.renderData(content);
           }else{
               $.toast(result.data.message)
           }
       },
       ef:function (result) {
           util.hideLoading();
       }
    })
}
HelpDetail.prototype.init = function () {
    this.gethelpInfoList();
};
HelpDetail.prototype.renderData = function (msg) {
    $('.msg')[0].innerHTML = msg;
};
var helpDetailPage = new HelpDetail();

window.onload = function () {
    helpDetailPage.init();
};