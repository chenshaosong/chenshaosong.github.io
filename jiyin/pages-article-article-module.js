(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-article-article-module"],{

/***/ "./src/app/pages/article/article-manger/article-manger.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/article/article-manger/article-manger.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-table\r\n  #editRowTable\r\n  nzBordered=\"false\"\r\n  [nzData]=\"dataSet\"\r\n  nzPageSize=\"10\"\r\n  nzShowSizeChanger = 'true'\r\n>\r\n  <thead>\r\n  <tr>\r\n    <th>No</th>\r\n    <th>文章名</th>\r\n    <th>操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let data of editRowTable.data\">\r\n    <td>{{data.id}}</td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.code\">\r\n        <p *ngSwitchCase=\"'register'\">注册协议</p>\r\n        <p *ngSwitchCase=\"'integral'\">积分说明</p>\r\n        <p *ngSwitchCase=\"'user'\">用户须知</p>\r\n        <p *ngSwitchCase=\"'about-us'\">关于我们</p>\r\n      </div>\r\n    </td>\r\n    <td>\r\n      <button nz-button nzType=\"default\" (click)=\"goPager({url:'/article/edit-article',data:data})\" >编辑</button>\r\n    </td>\r\n\r\n  </tr>\r\n  </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./src/app/pages/article/article-manger/article-manger.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/article/article-manger/article-manger.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGljbGUvYXJ0aWNsZS1tYW5nZXIvYXJ0aWNsZS1tYW5nZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/article/article-manger/article-manger.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/article/article-manger/article-manger.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArticleMangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMangerComponent", function() { return ArticleMangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticleMangerComponent = /** @class */ (function () {
    function ArticleMangerComponent(http, router, url, msg, util) {
        this.http = http;
        this.router = router;
        this.url = url;
        this.msg = msg;
        this.util = util;
    }
    ArticleMangerComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    //获取数据
    ArticleMangerComponent.prototype.getData = function (pnum, rnum) {
        var _this = this;
        if (pnum === void 0) { pnum = ''; }
        if (rnum === void 0) { rnum = ''; }
        this.http.get(this.url.articleList, {
            page: pnum,
            rows: rnum
        }, function (data) {
            // console.log(data);
            if (data.code = '001000') {
                _this.dataSet = data.response;
            }
            else {
                _this.msg.error(data.message);
            }
        });
    };
    //跳转页面
    ArticleMangerComponent.prototype.goPager = function (option) {
        this.util.goPage(option);
    };
    ArticleMangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-manger',
            template: __webpack_require__(/*! ./article-manger.component.html */ "./src/app/pages/article/article-manger/article-manger.component.html"),
            styles: [__webpack_require__(/*! ./article-manger.component.scss */ "./src/app/pages/article/article-manger/article-manger.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_1__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__["UrlServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_5__["UtilServeService"]])
    ], ArticleMangerComponent);
    return ArticleMangerComponent;
}());



/***/ }),

/***/ "./src/app/pages/article/article-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/article/article-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleRoutingModule", function() { return ArticleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_manger_article_manger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-manger/article-manger.component */ "./src/app/pages/article/article-manger/article-manger.component.ts");
/* harmony import */ var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-article/edit-article.component */ "./src/app/pages/article/edit-article/edit-article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _article_manger_article_manger_component__WEBPACK_IMPORTED_MODULE_2__["ArticleMangerComponent"], data: { breadcrumb: '文章管理' } },
    { path: 'edit-article', component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_3__["EditArticleComponent"], data: { breadcrumb: '编辑文章' } }
];
var ArticleRoutingModule = /** @class */ (function () {
    function ArticleRoutingModule() {
    }
    ArticleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ArticleRoutingModule);
    return ArticleRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/article/article.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/article/article.module.ts ***!
  \*************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-routing.module */ "./src/app/pages/article/article-routing.module.ts");
/* harmony import */ var _article_manger_article_manger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-manger/article-manger.component */ "./src/app/pages/article/article-manger/article-manger.component.ts");
/* harmony import */ var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-article/edit-article.component */ "./src/app/pages/article/edit-article/edit-article.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _article_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArticleRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ],
            declarations: [_article_manger_article_manger_component__WEBPACK_IMPORTED_MODULE_3__["ArticleMangerComponent"], _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_4__["EditArticleComponent"]]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/pages/article/edit-article/edit-article.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/article/edit-article/edit-article.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" style=\"max-width: 1200px;padding-top: 40px;\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\">文章名</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n        <div [ngSwitch]=\"allData.code\">\r\n          <p *ngSwitchCase=\"'register'\">注册协议</p>\r\n          <p *ngSwitchCase=\"'integral'\">积分说明</p>\r\n          <p *ngSwitchCase=\"'user'\">用户须知</p>\r\n          <p *ngSwitchCase=\"'about-us'\">关于我们</p>\r\n        </div>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>文章内容</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <div id=\"edit\">\r\n\r\n      </div>\r\n      <p style=\"color:red\" *ngIf=\"p_life\">请填写内容</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"primary\" (click)=\"submitForm($event,validateForm.value)\">保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/article/edit-article/edit-article.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/article/edit-article/edit-article.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .w-e-toolbar {\n  flex-wrap: wrap; }\n\n:host ::ng-deep p {\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJ0aWNsZS9lZGl0LWFydGljbGUvSDpcXG5ld1xcanNfcGx1Z2luXFxqaXlpbi9zcmNcXGFwcFxccGFnZXNcXGFydGljbGVcXGVkaXQtYXJ0aWNsZVxcZWRpdC1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sZ0JBQWUsRUFDaEI7O0FBSkw7RUFNTSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcnRpY2xlL2VkaXQtYXJ0aWNsZS9lZGl0LWFydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICA6Om5nLWRlZXB7XHJcbiAgICAudy1lLXRvb2xiYXJ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/article/edit-article/edit-article.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/article/edit-article/edit-article.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function() { return EditArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var E = __webpack_require__(/*! wangeditor */ "./node_modules/wangeditor/release/wangEditor.js");
var EditArticleComponent = /** @class */ (function () {
    function EditArticleComponent(msg, http, fb, utilServe, route, url) {
        var _this = this;
        this.msg = msg;
        this.http = http;
        this.fb = fb;
        this.utilServe = utilServe;
        this.route = route;
        this.url = url;
        this.patt = /\w{1,100}/;
        this.p_life = false;
        //提交
        this.submitForm = function ($event, value) {
            var that = _this;
            $event.preventDefault();
            // for (const key in this.validateForm.controls) {
            //   this.validateForm.controls[ key ].markAsDirty();
            //   this.validateForm.controls[ key ].updateValueAndValidity();
            // }
            // if(!this.validateForm.valid) {
            //
            // }
            //获取html
            var content = _this.editor.txt.html();
            console.log(content);
            if (content == '<p><br></p>') {
                _this.p_life = true;
                return;
            }
            _this.p_life = false;
            _this.http.get(_this.url.updateArticle, {
                id: _this.allData.id,
                name: _this.allData.code,
                content: content,
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.msg.success('修改完成！');
                    history.back();
                }
                else {
                    _this.msg.error(data.message);
                }
            });
        };
        //验证用户名
        this.checkName = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (!_this.patt.test(control.value)) {
                return { error: true };
            }
        };
        this.validateForm = this.fb.group({});
        route.queryParams.subscribe(function (res) {
            _this.allData = JSON.parse(res.data);
        });
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        //创建富文本
        this.editor = new E('#edit');
        this.editor.create();
        this.editor.txt.html(this.allData.content);
    };
    //取消
    EditArticleComponent.prototype.cancleForm = function (e) {
        history.back();
    };
    EditArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-article',
            template: __webpack_require__(/*! ./edit-article.component.html */ "./src/app/pages/article/edit-article/edit-article.component.html"),
            styles: [__webpack_require__(/*! ./edit-article.component.scss */ "./src/app/pages/article/edit-article/edit-article.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__["ResetHttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_3__["UtilServeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__["UrlServeService"]])
    ], EditArticleComponent);
    return EditArticleComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-article-article-module.js.map