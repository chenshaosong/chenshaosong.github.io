function BankList(){
    this.bankList = [
        {name: "中国工商银行", src: "assets/imgs/logo_bank_gs.png",id:11},
        {name: "中国银行", src: "assets/imgs/logo_bank_zg.png",id:12},
        {name: "中国邮政储蓄银行", src: "assets/imgs/logo_bank.png",id:13},
        {name: "招商银行", src: "assets/imgs/logo_bank_zs.png",id:14},
        {name: "中国农业银行", src: "assets/imgs/logo_bank_ny.png",id:15},
        {name: "中国建设银行", src: "assets/imgs/logo_bank_js.png",id:16},
        {name: "交通银行", src: "assets/imgs/logo_bank_jt.png",id:17},
        {name: "中信银行", src: "assets/imgs/logo_bank_zx.png",id:18},
        {name: "中国光大银行", src: "assets/imgs/logo_bank_gd.png",id:19},
        {name: "华夏银行", src: "assets/imgs/logo_bank_hx.png",id:20},
        {name: "中国民生银行", src: "assets/imgs/logo_bank_ms.png",id:21},
        {name: "广发银行", src: "assets/imgs/logo_bank_gf.png",id:22},
        {name: "深圳发展银行", src: "assets/imgs/logo_bank_szfz.png",id:23},
        {name: "兴业银行", src: "assets/imgs/logo_bank_xy.png",id:24},
        {name: "上海浦东发展银行", src: "assets/imgs/logo_bank_shpf.png",id:25},
        {name: "恒丰银行", src: "assets/imgs/logo_bank_hf.png",id:26},
        {name: "浙商银行", src: "assets/imgs/logo_bank_zheshang.png",id:27},
        {name: "渤海银行", src: "assets/imgs/logo_bank_bh.png",id:28}
    ];
    this.bankName = util.getUrlParam(window.location.href,'bankName');
}
BankList.prototype.init = function () {
    this.renderData();
};
//选择银行卡
BankList.prototype.selectBank = function (index) {
    var bank = this.bankList[index].name;
    localStorage.setItem("bankName",bank);
    window.location.href = 'addBank.html?type=add';
}
BankList.prototype.renderData = function () {
    var that = this;
    var str = '';

    this.bankList.forEach(function (v,k) {
        if(v.name == that.bankName){
            str += `
        <label class="weui-cell weui-check__label" for="${v.id}" onclick="bankListPage.selectBank(${k})">
          <div class="weui-cell__hd"><img src="${v.src}"></div>
          <div class="weui-cell__bd">
            <p>${v.name}</p>
          </div>
          <div class="weui-cell__ft">
            <input type="radio" class="weui-check" name="radio1" id="${v.id}" checked>
            <span class="weui-icon-checked"></span>
          </div>
        </label>
        `;
        }else{
            str += `
        <label class="weui-cell weui-check__label" for="${v.id}" onclick="bankListPage.selectBank(${k})">
          <div class="weui-cell__hd"><img src="${v.src}"></div>
          <div class="weui-cell__bd">
            <p>${v.name}</p>
          </div>
          <div class="weui-cell__ft">
            <input type="radio" class="weui-check" name="radio1" id="${v.id}">
            <span class="weui-icon-checked"></span>
          </div>
        </label>
        `;
        }
    });
    $('.bankLists')[0].innerHTML = str;
};
var bankListPage = new BankList();

window.onload = function () {
    bankListPage.init();
}