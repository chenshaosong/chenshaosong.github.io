function FeedBack() {

}
//提交
FeedBack.prototype.submitOption = function(){
    var optionValue = this.getMsg();
    if( optionValue  == '' || !optionValue){
        $.toast("意见不能为空");
        return;
    }
    var token = localStorage.getItem("loginToken");
    util.showLoading("提交中");
    httpServe.request({
        method:"POST",
        url:'web/api/user/feedback.action?token='+token,
        data:{"content":optionValue},
        sf:function (result) {
            util.hideLoading();
            if(result.data.code=="001000"){
                $.toast("提交成功");
                window.location.href = 'index.html';
            }else{
                $.toast(result.data.message);
            }
        },
        ef:function (result) {
            util.hideLoading();
            $.toast(result.data.message);
        }
    })
};
FeedBack.prototype.getMsg = function(){
     return $('.weui-textarea')[0].value;
};
var feedBack = new FeedBack();