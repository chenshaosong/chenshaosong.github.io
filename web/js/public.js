(function(){
    $('.same_case_content_list').click(function () {
        window.location.href = "./gcal-in.html";
    });
    $('.section_content_product_right_content_mainl').click(function () {
        window.location.href = "./newscenter-in.html";
    });
    $('.same_product_content_list').click(function () {
        window.location.href = "./productcenter-in.html";
    });
    //处理头部active样式囧
    let str = window.location.pathname;
    str = str.split('/');
    str = "./"+str[str.length-1];
    console.log(str);
    $('.header_nav li').find('a').each((k,v)=>{
        if($(v).attr("href") == str){
            $(v).parent().addClass('active');
        }
    });
})();