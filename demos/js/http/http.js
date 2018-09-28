function HttpServe(){

}
HttpServe.prototype.request = function(params){
    console.log(commonUrl.commentBaseUrl + params["url"]);
    if (params["method"] == "post" || params["method"] == "POST") {
        if (params["data"]["token"] == null) {
            return this.post(
                commonUrl.commentBaseUrl + params["url"],
                params["data"],params['ef'],params['sf']
            );

        } else {
            return this.post(commonUrl.commentBaseUrl +
                params["url"] +
                "?token=" +
                params["data"]["token"],
                params["data"],params['ef'],params['sf']
            );

        }
    } else {
        return this.get(
            commonUrl.commentBaseUrl + params["url"],
            params["data"],params['ef'],params['sf']
        );
    }
}
HttpServe.prototype.get = function(url,params,ef,sf){
    var param = JSON.stringify(params);
    // $.alert('url='+url+'data='+params);
    return $.ajax({
        data:param,
        type:'POST',
        dataType:'json',
        contentType:'application/json',
        url:url,
        success: function(res){
            let data = JSON.stringify(res);
            const body = JSON.parse(data);
            if(body.code == '99999'){
                window.location.href = 'login.html';
            }
            if (body) {
                sf({
                    data: body,
                    statusText: res.statusText,
                    status: res.status,
                    success: true
                });
            } else {
                sf({
                    statusText: res.statusText,
                    status: res.status,
                    success: true
                });
            }

        },
        error: function(err){
            var res = ''; // 处理后的结果 /* new */
            var data = err; // 需要处理的值 /* new */
            /** 后台有返回错误信息时 */
            if (data.hasOwnProperty('error') && data.hasOwnProperty('message')) { /* new */
                res = data.message; /* new */

                /** 后台没有返回错误信息只有错误名时 */
            } else if (data.hasOwnProperty('name')) { /* new */
                var errName = data.name; /* new */

                /** 请求超时 */
                if (errName == 'TimeoutError') { /* new */
                    res = '对不起，请求超时了'; /* new */
                }

                /** 后台返回未授权时 */
            } else if (data == "Unauthorization") { /* new */
                res = '您没有权限，请重新登录' /* new */
            } else {
                res = "哎呀，不知道是啥错误~~"; /* new */
            }

            console.log(res);
            // return res; /* new */
            ef(res);
            // return  res; /* new */
        }
    });
}
HttpServe.prototype.post = function(url,params,ef,sf){
    var param = JSON.stringify(params);
    // $.alert('url='+url+'data='+params);
    return $.ajax({
        data: param,
        dataType: 'json',
        contentType:'application/json',
        type: 'POST',
        url: url,
        success: function(res){
            let data = JSON.stringify(res);
            const body = JSON.parse(data);
            if(body.code == '99999'){
                window.location.href = 'index.html';
            }
            if (body) {
                sf({
                    data: body,
                    statusText: res.statusText,
                    status: res.status,
                    success: true
                });
            } else {
                sf({
                    statusText: res.statusText,
                    status: res.status,
                    success: true
                });
            }

        },
        error: function(err){
            var res = ''; // 处理后的结果 /* new */
            var data = err; // 需要处理的值 /* new */
            /** 后台有返回错误信息时 */
            if (data.hasOwnProperty('error') && data.hasOwnProperty('message')) { /* new */
                res = data.message; /* new */

                /** 后台没有返回错误信息只有错误名时 */
            } else if (data.hasOwnProperty('name')) { /* new */
                var errName = data.name; /* new */

                /** 请求超时 */
                if (errName == 'TimeoutError') { /* new */
                    res = '对不起，请求超时了'; /* new */
                }

                /** 后台返回未授权时 */
            } else if (data == "Unauthorization") { /* new */
                res = '您没有权限，请重新登录' /* new */
            } else {
                res = "哎呀，不知道是啥错误~~"; /* new */
            }

            console.log(res);
            // return res; /* new */
            ef(res);
            // return  res; /* new */
        }
    });
};

var httpServe = new HttpServe();