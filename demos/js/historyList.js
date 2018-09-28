function HistoryList() {
    
}
HistoryList.prototype.goWeb = function (web) {
    window.location.href = web;
};
var historyListPage = new HistoryList();