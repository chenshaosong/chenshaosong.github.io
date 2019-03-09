function Util(){

}
Util.prototype.getUrlParam = function (url,name) {
    var url_param = url.substring(url.indexOf("?")+1);
    var params = url_param.split("&");
    var value = null;
    params.forEach(element =>{
        var ps = element.split("=");
        if(ps[0]==name){
            value=ps[1];
            return;
        }
    });
    return decodeURI(value);
};
Util.prototype.showLoading = function(msg){
        $.showLoading(msg);
        setTimeout(function() {
            $.hideLoading();
        }, 3000)
}
Util.prototype.hideLoading = function(){
        $.hideLoading();
}
var util = new Util();