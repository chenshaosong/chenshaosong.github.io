(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consulting-consulting-module"],{

/***/ "./src/app/pages/consulting/add-consulting/add-consulting.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/consulting/add-consulting/add-consulting.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" style=\"max-width: 1200px;padding-top: 40px;\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>资讯分类</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select  nzAllowClear nzPlaceHolder=\"选择资讯分类\" formControlName=\"consultingList\">\r\n        <nz-option nzValue=\"news\" nzLabel=\"新闻\"></nz-option>\r\n        <nz-option nzValue=\"event\" nzLabel=\"活动\"></nz-option>\r\n        <nz-option nzValue=\"professor\" nzLabel=\"专业\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('consultingList').dirty && validateForm.get('consultingList').errors\">\r\n        <ng-container *ngIf=\"validateForm.get('consultingList').hasError('required')\">\r\n          请选择资讯分类\r\n        </ng-container>\r\n        <ng-container *ngIf=\"validateForm.get('consultingList').hasError('error')\">\r\n\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>资讯标题</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <input nz-input placeholder=\"资讯标题\" formControlName=\"consultingTitle\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('consultingTitle').dirty && validateForm.get('consultingTitle').errors\">\r\n        <ng-container *ngIf=\"validateForm.get('consultingTitle').hasError('required')\">\r\n          请输入资讯标题\r\n        </ng-container>\r\n        <ng-container *ngIf=\"validateForm.get('consultingTitle').hasError('error')\">\r\n\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\">资讯主图</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload class=\"avatar-uploader\"\r\n                 [nzAction]=\"imgUrl\"\r\n                 nzName=\"avatar\"\r\n                 nzListType=\"picture-card\"\r\n                 [nzShowUploadList]=\"false\"\r\n                 [nzBeforeUpload]=\"beforeUpload\"\r\n                 (nzChange)=\"handleChange($event)\">\r\n        <ng-container *ngIf=\"!avatarUrl\">\r\n          <i nz-icon type=\"plus\"></i>\r\n          <div class=\"ant-upload-text\">Upload</div>\r\n        </ng-container>\r\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\">\r\n      </nz-upload>\r\n      <p style=\"color:#ff9a91\">图片只能上传格式\"image/jpg和image/png\",大小限制为2mb</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>资讯内容</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <div id=\"edit\">\r\n\r\n      </div>\r\n      <p style=\"color: red;margin-bottom: 0\" *ngIf=\"life\">请输入内容</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"primary\" (click)=\"submitForm($event,validateForm.value)\">保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/consulting/add-consulting/add-consulting.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/consulting/add-consulting/add-consulting.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc3VsdGluZy9hZGQtY29uc3VsdGluZy9IOlxcbmV3XFxqc19wbHVnaW5cXGppeWluL3NyY1xcYXBwXFxwYWdlc1xcY29uc3VsdGluZ1xcYWRkLWNvbnN1bHRpbmdcXGFkZC1jb25zdWx0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uc3VsdGluZy9hZGQtY29uc3VsdGluZy9hZGQtY29uc3VsdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIDo6bmctZGVlcHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/consulting/add-consulting/add-consulting.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/consulting/add-consulting/add-consulting.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddConsultingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddConsultingComponent", function() { return AddConsultingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
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
var AddConsultingComponent = /** @class */ (function () {
    function AddConsultingComponent(url, http, fb, utilServe, msg) {
        var _this = this;
        this.url = url;
        this.http = http;
        this.fb = fb;
        this.utilServe = utilServe;
        this.msg = msg;
        this.patt = /\w{1,100}/;
        this.loading = false;
        this.life = false;
        this.imgUpLoad = '';
        //提交
        this.submitForm = function ($event, value) {
            console.log(value);
            var that = _this;
            //获取html
            var content = _this.edit.txt.html();
            console.log(content);
            $event.preventDefault();
            for (var key in _this.validateForm.controls) {
                _this.validateForm.controls[key].markAsDirty();
                _this.validateForm.controls[key].updateValueAndValidity();
            }
            if (content === '<p><br></p>') {
                console.log(12);
                _this.life = true;
                return;
            }
            else {
                _this.life = false;
            }
            // if(!this.imgUpLoad) {
            //   this.msg.error('请上传图片！');
            //   return;
            // }
            if (!_this.validateForm.valid)
                return;
            _this.http.get(_this.url.addNews, {
                type: _this.validateForm.controls['consultingList'].value,
                title: _this.validateForm.controls['consultingTitle'].value,
                image: _this.imgUpLoad,
                content: content
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.msg.success('资讯添加成功！');
                    history.back();
                }
                else {
                    _this.msg.error(data.message);
                }
            }, function (err) {
                console.log(err);
                _this.msg.error(err);
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
        //上传
        this.beforeUpload = function (file) {
            var isJPG = file.type === 'image/jpeg';
            var isPng = file.type === 'image/png';
            if (!(isPng || isJPG)) {
                _this.msg.error('只允许上传JPG 或者 PNG格式的图片');
            }
            var isLt2M = file.size / 1024 / 1024 < 1;
            if (!isLt2M) {
                _this.msg.error('大小不能超过2MB!');
            }
            return (isJPG || isPng) && isLt2M;
        };
        this.validateForm = this.fb.group({
            consultingList: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            consultingTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.imgUrl = this.url.commentBaseUrl + this.url.imgUpLoad;
    }
    AddConsultingComponent.prototype.ngOnInit = function () {
        // 创建编辑器
        this.edit = new E('#edit');
        this.edit.create();
    };
    //取消
    AddConsultingComponent.prototype.cancleForm = function (e) {
        history.back();
    };
    AddConsultingComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    AddConsultingComponent.prototype.handleChange = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.imgUpLoad = info.file.response.response.filePath;
            }
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                _this.loading = false;
                _this.avatarUrl = img;
            });
        }
    };
    AddConsultingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-consulting',
            template: __webpack_require__(/*! ./add-consulting.component.html */ "./src/app/pages/consulting/add-consulting/add-consulting.component.html"),
            styles: [__webpack_require__(/*! ./add-consulting.component.scss */ "./src/app/pages/consulting/add-consulting/add-consulting.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__["UrlServeService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__["ResetHttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_3__["UtilServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], AddConsultingComponent);
    return AddConsultingComponent;
}());



/***/ }),

/***/ "./src/app/pages/consulting/consulting-manger/consulting-manger.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/consulting/consulting-manger/consulting-manger.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"default\" (click)=\"goPager({url:'/consulting/add-consulting'})\" class=\"right_btn\">添加资讯</button>\r\n<nz-table\r\n  #editRowTable\r\n  nzBordered=\"false\"\r\n  [nzData]=\"dataSet\"\r\n  nzPageSize=\"10\"\r\n  nzShowSizeChanger = 'true'\r\n>\r\n  <thead>\r\n  <tr>\r\n    <th>资讯ID</th>\r\n    <th>资讯标题</th>\r\n    <th>资讯分类</th>\r\n    <th>添加时间</th>\r\n    <th>操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let data of editRowTable.data\">\r\n    <td>{{data.id}}</td>\r\n    <td>{{data.title}}</td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.type\">\r\n        <div *ngSwitchCase=\"'news'\">新闻</div>\r\n        <div *ngSwitchCase=\"'professor'\">专业</div>\r\n        <div *ngSwitchCase=\"'event'\">活动</div>\r\n      </div>\r\n    </td>\r\n    <td>{{data.create_time}}</td>\r\n    <td>\r\n      <button nz-button nzType=\"default\" (click)=\"goPager({url:'/consulting/edit-consulting',data:data.id})\" >编辑</button>\r\n\r\n      <button nz-button nzType=\"default\" (click)=\"dele(data)\" >删除</button>\r\n    </td>\r\n\r\n  </tr>\r\n  </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./src/app/pages/consulting/consulting-manger/consulting-manger.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/consulting/consulting-manger/consulting-manger.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnN1bHRpbmcvY29uc3VsdGluZy1tYW5nZXIvY29uc3VsdGluZy1tYW5nZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/consulting/consulting-manger/consulting-manger.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/consulting/consulting-manger/consulting-manger.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConsultingMangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultingMangerComponent", function() { return ConsultingMangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
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






var ConsultingMangerComponent = /** @class */ (function () {
    function ConsultingMangerComponent(util, http, router, modalService, url, msg) {
        this.util = util;
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.url = url;
        this.msg = msg;
        this.dataSet = [];
    }
    ConsultingMangerComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    //获取数据
    ConsultingMangerComponent.prototype.getData = function (pnum, rnum) {
        var _this = this;
        if (pnum === void 0) { pnum = ''; }
        if (rnum === void 0) { rnum = ''; }
        this.http.get(this.url.newsList, {
            page: pnum,
            rows: rnum
        }, function (data) {
            console.log(data);
            if (data.code == '001000') {
                _this.dataSet = data.response;
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            _this.msg.error(err);
        });
    };
    //跳转
    ConsultingMangerComponent.prototype.goPager = function (option) {
        this.util.goPage(option);
    };
    //删除
    ConsultingMangerComponent.prototype.dele = function (data) {
        var _this = this;
        var confirmModal = this.modalService.confirm({
            nzTitle: '删除资讯',
            nzContent: '删除操作将同时删除前端用户的资讯内容，确认删除吗？',
            nzOnCancel: function () { confirmModal.destroy(); },
            nzOnOk: function () { return new Promise(function (resolve, reject) {
                _this.http.get(_this.url.deleteNews, {
                    id: data.id
                }, function (data) {
                    console.log(data);
                    if (data.code == '001000') {
                        _this.msg.success('删除成功！');
                        _this.getData();
                    }
                    else {
                        _this.msg.error(data.message);
                    }
                }, function (err) {
                    _this.msg.error(err);
                });
                confirmModal.destroy();
            }).catch(function () { return console.log('Oops errors!'); }); }
        });
    };
    ConsultingMangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulting-manger',
            template: __webpack_require__(/*! ./consulting-manger.component.html */ "./src/app/pages/consulting/consulting-manger/consulting-manger.component.html"),
            styles: [__webpack_require__(/*! ./consulting-manger.component.scss */ "./src/app/pages/consulting/consulting-manger/consulting-manger.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_5__["UtilServeService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_1__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__["UrlServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], ConsultingMangerComponent);
    return ConsultingMangerComponent;
}());



/***/ }),

/***/ "./src/app/pages/consulting/consulting-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/consulting/consulting-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConsultingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultingRoutingModule", function() { return ConsultingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_consulting_edit_consulting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-consulting/edit-consulting.component */ "./src/app/pages/consulting/edit-consulting/edit-consulting.component.ts");
/* harmony import */ var _consulting_manger_consulting_manger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulting-manger/consulting-manger.component */ "./src/app/pages/consulting/consulting-manger/consulting-manger.component.ts");
/* harmony import */ var _add_consulting_add_consulting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-consulting/add-consulting.component */ "./src/app/pages/consulting/add-consulting/add-consulting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _consulting_manger_consulting_manger_component__WEBPACK_IMPORTED_MODULE_3__["ConsultingMangerComponent"], data: { breadcrumb: '资讯管理' } },
    { path: 'add-consulting', component: _add_consulting_add_consulting_component__WEBPACK_IMPORTED_MODULE_4__["AddConsultingComponent"], data: { breadcrumb: '添加资讯' } },
    { path: 'edit-consulting', component: _edit_consulting_edit_consulting_component__WEBPACK_IMPORTED_MODULE_2__["EditConsultingComponent"], data: { breadcrumb: '编辑资讯' } }
];
var ConsultingRoutingModule = /** @class */ (function () {
    function ConsultingRoutingModule() {
    }
    ConsultingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsultingRoutingModule);
    return ConsultingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/consulting/consulting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/consulting/consulting.module.ts ***!
  \*******************************************************/
/*! exports provided: ConsultingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultingModule", function() { return ConsultingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consulting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulting-routing.module */ "./src/app/pages/consulting/consulting-routing.module.ts");
/* harmony import */ var _consulting_manger_consulting_manger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulting-manger/consulting-manger.component */ "./src/app/pages/consulting/consulting-manger/consulting-manger.component.ts");
/* harmony import */ var _add_consulting_add_consulting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-consulting/add-consulting.component */ "./src/app/pages/consulting/add-consulting/add-consulting.component.ts");
/* harmony import */ var _edit_consulting_edit_consulting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-consulting/edit-consulting.component */ "./src/app/pages/consulting/edit-consulting/edit-consulting.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ConsultingModule = /** @class */ (function () {
    function ConsultingModule() {
    }
    ConsultingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consulting_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsultingRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"]
            ],
            declarations: [_consulting_manger_consulting_manger_component__WEBPACK_IMPORTED_MODULE_3__["ConsultingMangerComponent"], _add_consulting_add_consulting_component__WEBPACK_IMPORTED_MODULE_4__["AddConsultingComponent"], _edit_consulting_edit_consulting_component__WEBPACK_IMPORTED_MODULE_5__["EditConsultingComponent"]]
        })
    ], ConsultingModule);
    return ConsultingModule;
}());



/***/ }),

/***/ "./src/app/pages/consulting/edit-consulting/edit-consulting.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/consulting/edit-consulting/edit-consulting.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" style=\"max-width: 1200px;padding-top: 40px;\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>资讯分类</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select  nzAllowClear nzPlaceHolder=\"选择资讯分类\" formControlName=\"consultingList\" [(ngModel)]=\"selectCon\">\r\n        <nz-option nzValue=\"news\" nzLabel=\"新闻\"></nz-option>\r\n        <nz-option nzValue=\"event\" nzLabel=\"活动\"></nz-option>\r\n        <nz-option nzValue=\"professor\" nzLabel=\"专业\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('consultingList').dirty && validateForm.get('consultingList').errors\">\r\n        <ng-container *ngIf=\"validateForm.get('consultingList').hasError('required')\">\r\n          请选择资讯分类\r\n        </ng-container>\r\n        <ng-container *ngIf=\"validateForm.get('consultingList').hasError('error')\">\r\n\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>资讯标题</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <input nz-input placeholder=\"资讯标题\" formControlName=\"consultingTitle\" >\r\n      <nz-form-explain *ngIf=\"validateForm.get('consultingTitle').dirty && validateForm.get('consultingTitle').errors\">\r\n        <ng-container *ngIf=\"validateForm.get('consultingTitle').hasError('required')\">\r\n          请输入资讯标题\r\n        </ng-container>\r\n        <ng-container *ngIf=\"validateForm.get('consultingTitle').hasError('error')\">\r\n\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\">资讯主图</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload class=\"avatar-uploader\"\r\n                 [nzAction]=\"imgUrl\"\r\n                 nzName=\"avatar\"\r\n                 nzListType=\"picture-card\"\r\n                 [nzShowUploadList]=\"false\"\r\n                 [nzBeforeUpload]=\"beforeUpload\"\r\n                 (nzChange)=\"handleChange($event)\">\r\n        <ng-container *ngIf=\"!avatarUrl\">\r\n          <i nz-icon type=\"plus\"></i>\r\n          <div class=\"ant-upload-text\">Upload</div>\r\n        </ng-container>\r\n        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" class=\"avatar\">\r\n      </nz-upload>\r\n      <p style=\"color:#ff9a91\">图片只能上传格式\"image/jpg和image/png\",大小限制为2mb</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>资讯内容</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <div id=\"edit\">\r\n\r\n      </div>\r\n      <p style=\"color: red;margin-bottom: 0\" *ngIf=\"life\">请输入内容</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"primary\" (click)=\"submitForm($event,validateForm.value)\">保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/consulting/edit-consulting/edit-consulting.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/consulting/edit-consulting/edit-consulting.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep img {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uc3VsdGluZy9lZGl0LWNvbnN1bHRpbmcvSDpcXG5ld1xcanNfcGx1Z2luXFxqaXlpbi9zcmNcXGFwcFxccGFnZXNcXGNvbnN1bHRpbmdcXGVkaXQtY29uc3VsdGluZ1xcZWRpdC1jb25zdWx0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uc3VsdGluZy9lZGl0LWNvbnN1bHRpbmcvZWRpdC1jb25zdWx0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgOjpuZy1kZWVwe1xyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/consulting/edit-consulting/edit-consulting.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/consulting/edit-consulting/edit-consulting.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditConsultingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConsultingComponent", function() { return EditConsultingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var EditConsultingComponent = /** @class */ (function () {
    function EditConsultingComponent(route, url, http, fb, utilServe, msg) {
        var _this = this;
        this.route = route;
        this.url = url;
        this.http = http;
        this.fb = fb;
        this.utilServe = utilServe;
        this.msg = msg;
        this.patt = /\w{1,100}/;
        this.loading = false;
        this.life = false;
        //提交
        this.submitForm = function ($event, value) {
            console.log(_this.validateForm.controls.consultingContent);
            var that = _this;
            //获取html
            var content = _this.edit.txt.html();
            console.log(content);
            $event.preventDefault();
            for (var key in _this.validateForm.controls) {
                _this.validateForm.controls[key].markAsDirty();
                _this.validateForm.controls[key].updateValueAndValidity();
            }
            if (content === '<p><br></p>') {
                console.log(12);
                _this.life = true;
                return;
            }
            else {
                _this.life = false;
            }
            if (!_this.imgUpLoad) {
                _this.msg.error('请上传图片！');
                return;
            }
            if (!_this.validateForm.valid)
                return;
            _this.http.get(_this.url.updateNews, {
                type: _this.validateForm.controls['consultingList'].value,
                title: _this.validateForm.controls['consultingTitle'].value,
                image: _this.imgUpLoad,
                content: content,
                id: _this.newsId
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.msg.success('保存成功！');
                    history.back();
                }
                else {
                    _this.msg.error(data.message);
                }
            }, function (err) {
                _this.msg.error(err);
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
        //上传
        this.beforeUpload = function (file) {
            var isJPG = file.type === 'image/jpeg';
            var isPng = file.type === 'image/png';
            if (!(isPng || isJPG)) {
                _this.msg.error('只允许上传JPG 或者 PNG格式的图片');
            }
            var isLt2M = file.size / 1024 / 1024 < 1;
            if (!isLt2M) {
                _this.msg.error('大小不能超过2MB!');
            }
            return (isJPG || isPng) && isLt2M;
        };
        this.validateForm = this.fb.group({
            consultingList: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            consultingTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        //获取传递信息
        this.route.queryParams.subscribe(function (params) {
            _this.newsId = params.data;
        });
        this.imgUrl = this.url.commentBaseUrl + this.url.imgUpLoad;
    }
    EditConsultingComponent.prototype.ngOnInit = function () {
        // 创建编辑器
        this.edit = new E('#edit');
        this.edit.create();
        this.getData(this.newsId);
    };
    //获取数据
    EditConsultingComponent.prototype.getData = function (nid) {
        var _this = this;
        this.http.get(this.url.newsDetail, {
            id: nid
        }, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.allData = data.response;
                _this.avatarUrl = _this.allData.image;
                _this.selectCon = _this.allData.type;
                _this.validateForm.controls['consultingTitle'].setValue(_this.allData.title);
                _this.edit.txt.html(_this.allData.content);
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //取消
    EditConsultingComponent.prototype.cancleForm = function (e) {
        history.back();
    };
    EditConsultingComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    EditConsultingComponent.prototype.handleChange = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.imgUpLoad = info.file.response.response.filePath;
            }
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                _this.loading = false;
                _this.avatarUrl = img;
            });
        }
    };
    EditConsultingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-consulting',
            template: __webpack_require__(/*! ./edit-consulting.component.html */ "./src/app/pages/consulting/edit-consulting/edit-consulting.component.html"),
            styles: [__webpack_require__(/*! ./edit-consulting.component.scss */ "./src/app/pages/consulting/edit-consulting/edit-consulting.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__["UrlServeService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__["ResetHttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__["UtilServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], EditConsultingComponent);
    return EditConsultingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-consulting-consulting-module.js.map