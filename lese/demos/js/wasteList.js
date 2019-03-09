function WasteList(){
    this.listDataArr = [];
    this.currentAddressLong = util.getUrlParam("longitude");
    this.currentAddressLat = util.getUrlParam("latitude");
}
//获取垃圾箱数据
WasteList.prototype. getustbinList = function() {
    var that = this;
    var token = localStorage.getItem("loginToken");
    httpServe.request({
        method: 'POST',
        url: commonUrl.ustbinListURl + 'token=' + token,
        data: {
            lat: that.currentAddressLat,
            lng: that.currentAddressLong,
            distance: "2000",
        },
        sf:function (result) {
            if (result.data.code == "001000") {

                that.listDataArr = result.data.response;
                console.log(that.listDataArr);
                //渲染页面
                that.renderData(that.listDataArr);

            } else if (result.data.code == "99999") {

            }
        },
        ef:function (result) {
            console.log(result.msg);
        }
    })
};
//渲染页面
WasteList.prototype.renderData = function (list) {
    var listStr = '';
    list.forEach(function(v,k){
        listStr += `
        <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__hd"><img src="assets/imgs/thumb_rubbish.png" height="36" width="36"/></div>
      <div class="weui-cell__bd">
        <h3>${v.address}</h3>
        <p>${v.distance}米</p>
      </div>
      <div class="weui-cell__ft" onclick="wastePage.goNavigation(${v.lat},${v.lng},${v.address}${k})">
        到这儿去
      </div>
    </a>`;

    });
    $('.ulist')[0].innerHTML = listStr;
};
// 导航
WasteList.prototype.goNavigation = function(key) {
    // alert("功能开发中，敬请期待")
    var lat = this.listDataArr[key].lat;
    var lng = this.listDataArr[key].lng;
    var address = this.listDataArr[key].address;
    window.location.href = "http://api.map.baidu.com/direction?mode=driving&origin=" + this.currentAddressLat + "," + this.currentAddressLong + "&destination=" + lat + "," + lng + "&output=html&ak=gm7LF1KZn8Gwktv5Q2GCCLaM3d4WcdGt&region="+address
};
//刷新
WasteList.prototype.refreshMailList = function(){
    this.getustbinList();
};
//初始化
WasteList.prototype.init =function () {
    this.getustbinList();
};
//实例化
var wastePage = new WasteList();
window.onload =function () {
    wastePage.init();
};

