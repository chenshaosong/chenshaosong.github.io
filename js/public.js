$('.clickclose').on("touchend",function () {
    $('.static_nav').hide();
});
$('.allmenu').on("touchend",function () {
    $('.static_nav').show();
});
$('.goback').on("touchend",function () {
    history.go(-1);
});
$('.gcal_detail_list').on("touchend",function () {
    window.location.href = "./gcal-in.html"
});
// var arr = [].slice.call(document.querySelectorAll(".gcal_detail_list"))
// arr.forEach(v=>{
//     v.ontouchend =function(){
//         // window.location.href = "gcal-in.html"
//     }
// })
$('.news_same_content_list').on("touchend",function () {
    window.location.href = "./newscenter-in.html"
});
$('.product_list_same').on("touchend",function () {
    window.location.href = "./produceCenter-in.html"
});