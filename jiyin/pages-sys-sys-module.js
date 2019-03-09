(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sys-sys-module"],{

/***/ "./src/app/pages/sys/sys-manger/sys-manger.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/sys/sys-manger/sys-manger.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-table\r\n  #editRowTable\r\n  nzBordered=\"false\"\r\n  [nzData]=\"dataSet\"\r\n  nzPageSize=\"10\"\r\n  nzShowSizeChanger = 'true'\r\n>\r\n  <thead>\r\n  <tr>\r\n    <th>No</th>\r\n    <th>系统模块</th>\r\n    <th>操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let data of editRowTable.data\">\r\n    <td>{{data.id}}</td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.code\">\r\n        <p *ngSwitchCase=\"'register'\">注册协议</p>\r\n        <p *ngSwitchCase=\"'integral'\">积分说明</p>\r\n        <p *ngSwitchCase=\"'user'\">用户须知</p>\r\n        <p *ngSwitchCase=\"'about-us'\">关于我们</p>\r\n      </div>\r\n    </td>\r\n    <td>\r\n      <button nz-button nzType=\"default\" (click)=\"goPager({url:'/article/edit-article',data:data})\" >编辑</button>\r\n    </td>\r\n\r\n  </tr>\r\n  </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./src/app/pages/sys/sys-manger/sys-manger.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/sys/sys-manger/sys-manger.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5cy9zeXMtbWFuZ2VyL3N5cy1tYW5nZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/sys/sys-manger/sys-manger.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/sys/sys-manger/sys-manger.component.ts ***!
  \**************************************************************/
/*! exports provided: SysMangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysMangerComponent", function() { return SysMangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SysMangerComponent = /** @class */ (function () {
    function SysMangerComponent(http, router, url, msg, util) {
        this.http = http;
        this.router = router;
        this.url = url;
        this.msg = msg;
        this.util = util;
    }
    SysMangerComponent.prototype.ngOnInit = function () {
    };
    //获取数据
    SysMangerComponent.prototype.getData = function (name, url, icon) {
    };
    //跳转页面
    SysMangerComponent.prototype.goPager = function (option) {
        this.util.goPage(option);
    };
    SysMangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sys-manger',
            template: __webpack_require__(/*! ./sys-manger.component.html */ "./src/app/pages/sys/sys-manger/sys-manger.component.html"),
            styles: [__webpack_require__(/*! ./sys-manger.component.scss */ "./src/app/pages/sys/sys-manger/sys-manger.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__["UrlServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_3__["UtilServeService"]])
    ], SysMangerComponent);
    return SysMangerComponent;
}());



/***/ }),

/***/ "./src/app/pages/sys/sys-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sys/sys-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysRoutingModule", function() { return SysRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sys_manger_sys_manger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sys-manger/sys-manger.component */ "./src/app/pages/sys/sys-manger/sys-manger.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _sys_manger_sys_manger_component__WEBPACK_IMPORTED_MODULE_2__["SysMangerComponent"], data: { breadcrumb: '系统管理' } }
];
var SysRoutingModule = /** @class */ (function () {
    function SysRoutingModule() {
    }
    SysRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SysRoutingModule);
    return SysRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sys/sys.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/sys/sys.module.ts ***!
  \*****************************************/
/*! exports provided: SysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysModule", function() { return SysModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sys_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sys-routing.module */ "./src/app/pages/sys/sys-routing.module.ts");
/* harmony import */ var _sys_manger_sys_manger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sys-manger/sys-manger.component */ "./src/app/pages/sys/sys-manger/sys-manger.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SysModule = /** @class */ (function () {
    function SysModule() {
    }
    SysModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sys_routing_module__WEBPACK_IMPORTED_MODULE_2__["SysRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"]
            ],
            declarations: [_sys_manger_sys_manger_component__WEBPACK_IMPORTED_MODULE_3__["SysMangerComponent"]]
        })
    ], SysModule);
    return SysModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sys-sys-module.js.map