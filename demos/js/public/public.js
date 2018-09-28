function Public() {

}
//返回行业value
Public.prototype.returnIndustryName = function(val){
    switch(val){
        case "computer":
            return "计算机/互联网/通信/电子";
        case "accounting":
            return "会计/金融/银行/保险";
        case "trade":
            return "贸易/消费/制造/运营";
        case "pharmacy":
            return "制药/医疗";
        case "advertisement":
            return "广告/媒体";
        case "realEstate":
            return "房地产/建筑";
        case "education":
            return "专业服务/教育/培训";
        case "service":
            return "服务业";
        case "logistics":
            return "物流/运输";
        case "energy":
            return "能源/原材料";
    }
};
//返回职称
Public.prototype.returnpositionName = function(val){
    switch (val){
        case "staffMember":
            return "职员";
        case "management":
            return "管理人员";
        case "seniorManagement":
            return "高级管理人员";
        case "other":
            return "其他";
    }
};
//返回婚姻状态
Public.prototype.returnMarriageName = function(val){
    switch (val){
        case "unmarried":
            return "未婚";
        case "married":
            return "已婚已育";
        case "marUnbred":
            return "已婚未育";
        case "divorce":
            return "离异";
    }
};
//返回爱好
Public.prototype.returnEnjoinName = function(val){
    switch (val){
        case "photography":
            return "摄影";
        case "greenPlanting":
            return "绿植";
        case "pet":
            return "宠物";
        case "fashion":
            return "时尚";
        case "painting":
            return "绘画";
        case "music":
            return "音乐";
        case "motion":
            return "运动";
    }
};
//返回配送方式
Public.prototype.returnSendPart = function(val){
    switch (val){
        case "deliveryService":
            return "送货上门";
        case "selfLifting":
            return "自提"
    }
};
//返回快递状态
Public.prototype.returnExpressStatus = function(status){
    switch (status){
        case "wait":
            return "待发货";
        case "no_pay":
            return "待支付";
        case "running":
            return "确认收货";
        case "end":
            return "已完成";
    }
};
var publicServe = new Public();