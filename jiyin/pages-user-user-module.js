(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./src/app/pages/user/add-user/add-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/add-user/add-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm($event,validateForm.value)\" style=\"max-width: 800px;\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>电话号码</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"phoneNum\" placeholder=\"\" type=\"password\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('phoneNum').dirty && validateForm.get('phoneNum').errors\">\r\n        <ng-container *ngIf=\"validateForm.get('phoneNum').hasError('required')\">\r\n          请输入电话号码\r\n        </ng-container>\r\n        <ng-container *ngIf=\"validateForm.get('phoneNum').hasError('error')\">\r\n          电话号码格式不对\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\">邀请码(选填)</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <input nz-input formControlName=\"invitationNum\" placeholder=\"\" type=\"password\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>服务商归属</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select formControlName=\"address\" nzPlaceHolder=\"选择服务商\">\r\n        <nz-option nzValue=\"西安\" nzLabel=\"西安\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('address').dirty && validateForm.get('address').errors\">请选择服务商！</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>vip用户</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-radio-group  formControlName=\"vip\">\r\n        <label nz-radio nzValue=\"N\">否</label>\r\n        <label nz-radio nzValue=\"Y\">是</label>\r\n      </nz-radio-group>\r\n      <nz-form-explain *ngIf=\"validateForm.get('vip').dirty && validateForm.get('vip').errors\">vip!</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"primary\" >保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/user/add-user/add-user.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/add-user/add-user.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-form {\n  max-width: 600px; }\n\n:host ::ng-deep .ant-btn {\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9hZGQtdXNlci9IOlxcbmV3XFxqc19wbHVnaW5cXGppeWluL3NyY1xcYXBwXFxwYWdlc1xcdXNlclxcYWRkLXVzZXJcXGFkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSU0saUJBQWdCLEVBQ2pCOztBQUxMO0VBT00sbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5hbnQtZm9ybSB7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbiAgICAuYW50LWJ0bntcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/user/add-user/add-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user/add-user/add-user.component.ts ***!
  \***********************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(util, fb, http, router, url, msg) {
        var _this = this;
        this.util = util;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.url = url;
        this.msg = msg;
        this.patt = /\w{6,12}/;
        //提交
        this.submitForm = function ($event, value) {
            $event.preventDefault();
            for (var key in _this.validateForm.controls) {
                _this.validateForm.controls[key].markAsDirty();
                _this.validateForm.controls[key].updateValueAndValidity();
            }
            if (!_this.validateForm.valid)
                return;
            var code_value = _this.validateForm.controls['invitationNum'].value;
            if (!code_value) {
                code_value = null;
            }
            _this.http.get(_this.url.addUser, {
                telephone: _this.validateForm.controls['phoneNum'].value,
                referee_code: code_value,
                merchant_id: _this.validateForm.controls['address'].value,
                vip_level: _this.validateForm.controls['vip'].value
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.util.initPassword();
                }
                else {
                    _this.msg.error(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        };
        //验证密码
        this.checkPhone = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (!_this.patt.test(control.value)) {
                return { error: true };
            }
        };
        this.validateForm = this.fb.group({
            invitationNum: ['', []],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            vip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phoneNum: ['', [this.checkPhone]]
        });
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    //取消
    AddUserComponent.prototype.cancleForm = function (e) {
        history.back();
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/pages/user/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.scss */ "./src/app/pages/user/add-user/add-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_6__["UtilServeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__["UrlServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-table\r\n  #editRowTable\r\n  nzBordered=\"false\"\r\n  [nzData]=\"dataSet\"\r\n  nzPageSize=\"10\"\r\n  nzShowSizeChanger = 'true'\r\n  nzHideOnSinglePage = 'true'\r\n>\r\n  <thead>\r\n  <tr>\r\n    <th>内容</th>\r\n    <th>积分变化记录</th>\r\n    <th>变化时间</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let data of editRowTable.data\">\r\n    <td>\r\n      {{data.action}}\r\n    </td>\r\n    <td>{{data.integral}}</td>\r\n    <td>{{data.create_time}}</td>\r\n  </tr>\r\n  </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbW9kYWwtY29kZWRldGFpbC11c2VyL21vZGFsLWNvZGVkZXRhaWwtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModalCodedetailUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCodedetailUserComponent", function() { return ModalCodedetailUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalCodedetailUserComponent = /** @class */ (function () {
    function ModalCodedetailUserComponent(nzmref, http, url) {
        this.nzmref = nzmref;
        this.http = http;
        this.url = url;
        this.dataSet = [];
    }
    ModalCodedetailUserComponent.prototype.ngOnInit = function () {
        this.customDetail = this.nzmref.getContentComponent();
        this.getData(this.customDetail.userid, this.customDetail.refreeid);
    };
    ModalCodedetailUserComponent.prototype.getData = function (uid, rid) {
        var _this = this;
        this.http.get(this.url.userGetRefereeLog, {
            userId: uid,
            refereeId: rid,
        }, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.dataSet = data.response;
            }
            else {
                console.log(data.message);
            }
        }, function (erro) {
            console.log(erro);
        });
    };
    ModalCodedetailUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-codedetail-user',
            template: __webpack_require__(/*! ./modal-codedetail-user.component.html */ "./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.html"),
            styles: [__webpack_require__(/*! ./modal-codedetail-user.component.scss */ "./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__["ResetHttpService"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__["UrlServeService"]])
    ], ModalCodedetailUserComponent);
    return ModalCodedetailUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/modal-edit-password/modal-edit-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/user/modal-edit-password/modal-edit-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\">登录名</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <p>{{datas.name}}</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>重置密码</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"oldPassword\" placeholder=\"请输入旧的密码\" type=\"password\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('oldPassword').dirty&&validateForm.get('oldPassword').errors\">\r\n        <ng-container *ngIf=\"validateForm.get('oldPassword').hasError('error')\">\r\n          密码最少6位\r\n        </ng-container>\r\n        <ng-container *ngIf=\"validateForm.get('oldPassword').hasError('required')\">\r\n          请输入你旧的密码\r\n        </ng-container>\r\n        <ng-container *ngIf=\"validateForm.get('oldPassword').hasError('fault')\">\r\n          密码错误\r\n        </ng-container>\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>你的密码</nz-form-label>\r\n    <div>\r\n      <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n        <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"请输入新的密码\">\r\n        <nz-form-explain *ngIf=\"validateForm.get('password').dirty&&validateForm.get('password').errors\">\r\n          <ng-container *ngIf=\"validateForm.get('password').hasError('error')\">\r\n            密码要求6-12位！\r\n          </ng-container>\r\n          <ng-container *ngIf=\"validateForm.get('password').hasError('required')\">\r\n            请输入密码\r\n          </ng-container>\r\n        </nz-form-explain>\r\n\r\n      </nz-form-control>\r\n    </div>\r\n  </nz-form-item>\r\n  <nz-form-item style=\"text-align: right\">\r\n    <nz-form-control>\r\n      <button nz-button nzType=\"primary\" (click)=\"commit()\" style=\"margin-right: 10px\">确认</button>\r\n      <button nz-button nzType=\"primary\" (click)=\"cancle()\" style=\"margin-right: 20px\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/user/modal-edit-password/modal-edit-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/user/modal-edit-password/modal-edit-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbW9kYWwtZWRpdC1wYXNzd29yZC9tb2RhbC1lZGl0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user/modal-edit-password/modal-edit-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/user/modal-edit-password/modal-edit-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalEditPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditPasswordComponent", function() { return ModalEditPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalEditPasswordComponent = /** @class */ (function () {
    function ModalEditPasswordComponent(fb, nzmref, http, msg, url) {
        var _this = this;
        this.fb = fb;
        this.nzmref = nzmref;
        this.http = http;
        this.msg = msg;
        this.url = url;
        this.patt = /\w{6,12}/;
        this.checkPassword = function (control) {
            if (!control.value) {
                return { required: true };
            }
            if (!_this.patt.test(control.value)) {
                return { error: true };
            }
        };
        this.validateForm = this.fb.group({
            oldPassword: ['', [this.checkPassword]],
            password: ['', [this.checkPassword]]
        });
    }
    ModalEditPasswordComponent.prototype.ngOnInit = function () {
        this.datas = this.nzmref.getContentComponent();
    };
    ModalEditPasswordComponent.prototype.commit = function () {
        var _this = this;
        for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        if (!this.validateForm.valid) {
            return;
        }
        else {
            //请求数据
            this.http.get(this.url.userResetPassword, {
                password: hex_md5(this.validateForm.controls.password),
                managerPassword: hex_md5(this.validateForm.controls.oldPassword),
                id: '1'
            }, function (res) {
                console.log(res);
                if (res.code == '901015') {
                    _this.validateForm.controls.oldPassword.setErrors({ 'fault': 'true', dirty: true, errors: true });
                }
                else if (res.code == '001000') {
                    _this.msg.success('修改成功');
                    //销毁modal
                    _this.nzmref.destroy({ data: 'success' });
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    ModalEditPasswordComponent.prototype.cancle = function () {
        this.nzmref.destroy({ data: '取消' });
    };
    ModalEditPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-edit-password',
            template: __webpack_require__(/*! ./modal-edit-password.component.html */ "./src/app/pages/user/modal-edit-password/modal-edit-password.component.html"),
            styles: [__webpack_require__(/*! ./modal-edit-password.component.scss */ "./src/app/pages/user/modal-edit-password/modal-edit-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__["ResetHttpService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__["UrlServeService"]])
    ], ModalEditPasswordComponent);
    return ModalEditPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user-manger/user-manger.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-manger/user-manger.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"default\" (click)=\"goPager({url:'/user/add'})\" class=\"right_btn\">新增用户</button>\r\n<form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" style=\"display:flex;justify-content:flex-end;\">\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"serveArea\" nzAllowClear nzPlaceHolder=\"服务大区\" name=\"serve\" >\r\n        <nz-option nzValue=\"h\" nzLabel=\"华北\"></nz-option>\r\n        <nz-option nzValue=\"x\" nzLabel=\"西北\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"vip\" nzAllowClear nzPlaceHolder=\"VIP用户\" name=\"vip\">\r\n        <nz-option nzValue=\"1\" nzLabel=\"vip\"></nz-option>\r\n        <nz-option nzValue=\"0\" nzLabel=\"非vip\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"state\" nzAllowClear nzPlaceHolder=\"账号状态\" name=\"state\">\r\n        <nz-option nzValue=\"Y\" nzLabel=\"启用\"></nz-option>\r\n        <nz-option nzValue=\"N\" nzLabel=\"禁用\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <input type=\"text\" formControlName=\"phone\" nz-input name=\"ak\"  placeholder=\"请输入手机号或者昵称\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <button nz-button nzType=\"primary\" (click)=\"searchMore()\">搜索</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n<nz-table\r\n  #editRowTable\r\n  nzBordered=\"false\"\r\n  [nzData]=\"dataSet\"\r\n  nzPageSize=\"10\"\r\n  nzShowSizeChanger = 'true'\r\n  [nzLoading]=\"isloading\"\r\n>\r\n  <thead>\r\n  <tr>\r\n    <th>用户ID</th>\r\n    <th>昵称</th>\r\n    <th>电话号码</th>\r\n    <th>积分</th>\r\n    <th>邀请码</th>\r\n    <th>VIP用户</th>\r\n    <th>服务商归属</th>\r\n    <th>账号状态</th>\r\n    <th>注册时间</th>\r\n    <th>操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let data of editRowTable.data\">\r\n    <td>\r\n      {{data.id}}\r\n    </td>\r\n    <td>{{data.name}}</td>\r\n    <td>{{data.telephone}}</td>\r\n    <td>{{data.integral}}</td>\r\n    <td>{{data.recomm_code}}</td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.vip_level\">\r\n        <div *ngSwitchCase=\"1\" style=\"color:green\">是</div>\r\n        <div *ngSwitchCase=\"0\" style=\"color:red\">否</div>\r\n      </div>\r\n    </td>\r\n    <td>{{data.region_name}}</td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.status\">\r\n        <div *ngSwitchCase=\"'Y'\" style=\"color:green\">启用</div>\r\n        <div *ngSwitchCase=\"'N'\" style=\"color:red\">停用</div>\r\n      </div>\r\n    </td>\r\n    <td>{{data.create_time}}</td>\r\n    <td>\r\n      <button nz-button nzType=\"default\" (click)=\"goPager({url:'/user/view',data:{id:data.id,allId:allId}})\" >查看</button>\r\n      <button nz-button nzType=\"default\" (click)=\"createModal(data)\" >重置密码</button>\r\n      <div [ngSwitch]=\"data.status\" style=\"display: inline-block\">\r\n        <div *ngSwitchCase=\"'Y'\"><button nz-button nzType=\"default\" (click)=\"isEnable(data)\" >停用</button></div>\r\n        <div *ngSwitchCase=\"'N'\"><button nz-button nzType=\"default\" (click)=\"isable(data)\">启用</button></div>\r\n      </div>\r\n\r\n    </td>\r\n\r\n  </tr>\r\n  </tbody>\r\n</nz-table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/user/user-manger/user-manger.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-manger/user-manger.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep form .ant-select {\n  max-width: 200px !important;\n  width: 200px; }\n\n:host ::ng-deep .editable-cell {\n  position: relative; }\n\n:host ::ng-deep .editable-cell-input-wrapper,\n:host ::ng-deep .editable-cell-text-wrapper {\n  padding-right: 24px; }\n\n:host ::ng-deep .editable-cell-text-wrapper {\n  padding: 5px 24px 5px 5px; }\n\n:host ::ng-deep .editable-cell-icon,\n:host ::ng-deep .editable-cell-icon-check {\n  position: absolute;\n  right: 0;\n  width: 20px;\n  cursor: pointer; }\n\n:host ::ng-deep .editable-cell-icon {\n  line-height: 18px;\n  display: none; }\n\n:host ::ng-deep .editable-cell-icon-check {\n  line-height: 28px; }\n\n:host ::ng-deep .editable-cell:hover .editable-cell-icon {\n  display: inline-block; }\n\n:host ::ng-deep .editable-cell-icon:hover,\n:host ::ng-deep .editable-cell-icon-check:hover {\n  color: #108ee9; }\n\n:host ::ng-deep .editable-add-btn {\n  margin-bottom: 8px; }\n\n:host ::ng-deep .ant-table {\n  padding-top: 20px; }\n\n:host ::ng-deep .ant-pagination-options {\n  position: absolute;\n  left: 0;\n  top: -35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci91c2VyLW1hbmdlci9IOlxcbmV3XFxqc19wbHVnaW5cXGppeWluL3NyY1xcYXBwXFxwYWdlc1xcdXNlclxcdXNlci1tYW5nZXJcXHVzZXItbWFuZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR00sNEJBQTBCO0VBQzFCLGFBQVksRUFDYjs7QUFMTDtFQVdNLG1CQUFrQixFQUNuQjs7QUFaTDs7RUFnQk0sb0JBQW1CLEVBQ3BCOztBQWpCTDtFQW9CTSwwQkFBeUIsRUFDMUI7O0FBckJMOztFQXlCTSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFlBQVc7RUFDWCxnQkFBZSxFQUNoQjs7QUE3Qkw7RUFnQ00sa0JBQWlCO0VBQ2pCLGNBQWEsRUFDZDs7QUFsQ0w7RUFxQ00sa0JBQWlCLEVBQ2xCOztBQXRDTDtFQXlDTSxzQkFBcUIsRUFDdEI7O0FBMUNMOztFQThDTSxlQUFjLEVBQ2Y7O0FBL0NMO0VBa0RNLG1CQUFrQixFQUNuQjs7QUFuREw7RUFxRE0sa0JBQWlCLEVBQ2xCOztBQXRETDtFQXdETSxtQkFBa0I7RUFDbEIsUUFBTTtFQUNOLFdBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1tYW5nZXIvdXNlci1tYW5nZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gIDo6bmctZGVlcCB7XHJcbiAgICBmb3JtIC5hbnQtc2VsZWN0e1xyXG4gICAgICBtYXgtd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmFudC1mb3JtLWlubGluZSAuYW50LWZvcm0taXRlbXtcclxuXHJcbiAgICB9XHJcbiAgICAvLyAg6KGo5qC8XHJcbiAgICAuZWRpdGFibGUtY2VsbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtY2VsbC1pbnB1dC13cmFwcGVyLFxyXG4gICAgLmVkaXRhYmxlLWNlbGwtdGV4dC13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtY2VsbC10ZXh0LXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMjRweCA1cHggNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1jZWxsLWljb24sXHJcbiAgICAuZWRpdGFibGUtY2VsbC1pY29uLWNoZWNrIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtY2VsbC1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWNlbGwtaWNvbi1jaGVjayB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1jZWxsOmhvdmVyIC5lZGl0YWJsZS1jZWxsLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWNlbGwtaWNvbjpob3ZlcixcclxuICAgIC5lZGl0YWJsZS1jZWxsLWljb24tY2hlY2s6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzEwOGVlOTtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtYWRkLWJ0biB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIC5hbnQtdGFibGV7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmFudC1wYWdpbmF0aW9uLW9wdGlvbnN7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICB0b3A6LTM1cHg7XHJcbiAgICB9XHJcbiAgICAvLyAg6KGo5qC857uT5p2fXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user/user-manger/user-manger.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user/user-manger/user-manger.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserMangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMangerComponent", function() { return UserMangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _modal_edit_password_modal_edit_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-edit-password/modal-edit-password.component */ "./src/app/pages/user/modal-edit-password/modal-edit-password.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserMangerComponent = /** @class */ (function () {
    function UserMangerComponent(fb, msg, modalService, router, url, http, util) {
        this.fb = fb;
        this.msg = msg;
        this.modalService = modalService;
        this.router = router;
        this.url = url;
        this.http = http;
        this.util = util;
        this.i = 1;
        this.isloading = true;
        this.dataSet = [];
        this.allId = [];
        this.validateForm = this.fb.group({
            serveArea: [],
            vip: [],
            state: [],
            phone: [],
        });
    }
    Object.defineProperty(UserMangerComponent.prototype, "serveArea", {
        //获取组件
        get: function () {
            return this.validateForm.controls.serveArea;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMangerComponent.prototype, "vip", {
        get: function () {
            return this.validateForm.controls.vip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMangerComponent.prototype, "state", {
        get: function () {
            return this.validateForm.controls.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMangerComponent.prototype, "phone", {
        get: function () {
            return this.validateForm.controls.phone;
        },
        enumerable: true,
        configurable: true
    });
    UserMangerComponent.prototype.ngOnInit = function () {
        this.getDetailList();
    };
    //页面跳转
    UserMangerComponent.prototype.goPager = function (option) {
        this.util.goPage(option);
    };
    //搜索
    UserMangerComponent.prototype.searchMore = function () {
        console.log(this.vip.value, this.state.value, this.phone.value, this.serveArea.value);
        this.getDetailList(this.vip.value, this.state.value, this.phone.value);
    };
    //获取用户列表
    UserMangerComponent.prototype.getDetailList = function (vip, status, name) {
        var _this = this;
        if (vip === void 0) { vip = ''; }
        if (status === void 0) { status = ''; }
        if (name === void 0) { name = ''; }
        this.isloading = true;
        this.http.get(this.url.userList, {
            vip_level: vip,
            status: status,
            name: name,
        }, function (data) {
            if (data.code == '001000') {
                _this.dataSet = data.response;
                _this.isloading = false;
                _this.dataSet.forEach(function (v, k) {
                    _this.allId.push(v.id);
                });
            }
            else {
                _this.msg.error(data.message);
            }
            // console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    /*
    * 表格操作
    * */
    //停用
    UserMangerComponent.prototype.isEnable = function (data) {
        var _this = this;
        // console.log(data);
        this.isEnablemodal = this.modalService.create({
            nzTitle: '',
            nzContent: '停用后，该账户将无法登录使用APP！<br><br>确认停用吗',
            nzClosable: false,
            nzOnOk: function () { return new Promise(function (resolve) {
                _this.http.get(_this.url.userIsOpen, {
                    id: data.id,
                    status: 'N'
                }, function (res) {
                    if (res.code === '001000') {
                        _this.getDetailList();
                        _this.msg.success('修改完成');
                        _this.isEnablemodal.nzOkLoading = false;
                        _this.isEnablemodal.destroy();
                    }
                    else {
                        console.log(data.message);
                    }
                }, function (err) {
                    console.log(err);
                });
            }); },
            nzOnCancel: function () { return new Promise(function (resolve) {
                _this.isEnablemodal.nzCancelLoading = false;
                _this.isEnablemodal.destroy();
            }); }
        });
    };
    //启用
    UserMangerComponent.prototype.isable = function (data) {
        var _this = this;
        this.http.get(this.url.userIsOpen, {
            id: data.id,
            status: 'Y'
        }, function (data) {
            if (data.code === '001000') {
                _this.getDetailList();
                _this.msg.success('修改完成');
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //创建模态窗 重置密码
    UserMangerComponent.prototype.createModal = function (data) {
        this.validateForm.reset();
        var modal = this.modalService.create({
            nzTitle: '重置密码',
            nzContent: _modal_edit_password_modal_edit_password_component__WEBPACK_IMPORTED_MODULE_3__["ModalEditPasswordComponent"],
            nzClosable: false,
            nzComponentParams: data,
            nzFooter: null
        });
        modal.afterOpen.subscribe(function () { return console.log('[afterOpen] emitted!'); });
        // Return a result when closed
        modal.afterClose.subscribe(function (result) { return console.log('[afterClose] The result is:', result); });
    };
    UserMangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-manger',
            template: __webpack_require__(/*! ./user-manger.component.html */ "./src/app/pages/user/user-manger/user-manger.component.html"),
            styles: [__webpack_require__(/*! ./user-manger.component.scss */ "./src/app/pages/user/user-manger/user-manger.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_5__["UrlServeService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__["ResetHttpService"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_7__["UtilServeService"]])
    ], UserMangerComponent);
    return UserMangerComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/pages/user/add-user/add-user.component.ts");
/* harmony import */ var _user_manger_user_manger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-manger/user-manger.component */ "./src/app/pages/user/user-manger/user-manger.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/pages/user/view-user/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _user_manger_user_manger_component__WEBPACK_IMPORTED_MODULE_3__["UserMangerComponent"], data: { breadcrumb: '用户管理' } },
    { path: 'add', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"], data: { breadcrumb: '添加用户' } },
    { path: 'view', component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_4__["ViewUserComponent"], data: { breadcrumb: '查看用户' } }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/pages/user/user-routing.module.ts");
/* harmony import */ var _user_manger_user_manger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-manger/user-manger.component */ "./src/app/pages/user/user-manger/user-manger.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/pages/user/add-user/add-user.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/pages/user/view-user/view-user.component.ts");
/* harmony import */ var _modal_edit_password_modal_edit_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-edit-password/modal-edit-password.component */ "./src/app/pages/user/modal-edit-password/modal-edit-password.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _modal_codedetail_user_modal_codedetail_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-codedetail-user/modal-codedetail-user.component */ "./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_user_manger_user_manger_component__WEBPACK_IMPORTED_MODULE_3__["UserMangerComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"], _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_5__["ViewUserComponent"], _modal_edit_password_modal_edit_password_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditPasswordComponent"], _modal_codedetail_user_modal_codedetail_user_component__WEBPACK_IMPORTED_MODULE_8__["ModalCodedetailUserComponent"]],
            entryComponents: [_modal_edit_password_modal_edit_password_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditPasswordComponent"], _modal_codedetail_user_modal_codedetail_user_component__WEBPACK_IMPORTED_MODULE_8__["ModalCodedetailUserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/pages/user/view-user/view-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/view-user/view-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top_page\" *ngIf=\"allData\">\r\n  <nz-pagination [nzPageSize]=\"1\" [nzPageIndex]=\"pageNum\" [nzTotal]=\"allNum\" [nzItemRender]=\"renderItemTemplate\" (nzPageIndexChange)=\"pageChange($event)\"></nz-pagination>\r\n  <ng-template #renderItemTemplate let-type let-page=\"page\">\r\n    <a *ngIf=\"type==='pre'\">上一页</a>\r\n    <a *ngIf=\"type==='next'\">下一页</a>\r\n    <a *ngIf=\"type==='page'\">{{page}}</a>\r\n  </ng-template>\r\n</div>\r\n<div class=\"user_title\" *ngIf=\"allData\">\r\n  <p style=\"font-size: 16px;line-height: 30px;\">用户id:\r\n    <span style=\"margin-left: 10px;\">{{userInfo[0].id}}</span>\r\n  </p>\r\n  <div class=\"user_vip\">\r\n    <div [ngSwitch]=\"userInfo[0].vip_level\">\r\n        <span *ngSwitchCase=\"'1'\" >vip</span>\r\n        <span *ngSwitchCase=\"'0'\">普通</span>\r\n      </div>\r\n  </div>\r\n  <span [ngClass]=\"{'isopen':true,'active':!userInfo[0].status}\">{{userInfo[0].status == 'Y'?'开启':'关闭'}}</span>\r\n</div>\r\n<div class=\"user_section\" *ngIf=\"allData\">\r\n  <div class=\"user_base section_list\">\r\n    <h3>基本信息</h3>\r\n    <img (click)=\"createModal()\" style=\"float: right;margin-right: 20px;width: 200px;\" [src]=\"userInfo[0].photo\" alt=\"头像\"/>\r\n\r\n    <ul class=\"section_ul\">\r\n      <li><span>昵称：</span><p>{{userInfo[0].name}}</p></li>\r\n      <li><span>电话号码：</span><p>{{userInfo[0].telephone}}</p></li>\r\n      <li><span>邀请码：</span><p>{{userInfo[0].referral_code}}</p></li>\r\n      <li><span>积分：</span><p>{{userInfo[0].integral}}</p></li>\r\n      <li><span>服务商归属：</span><p>{{userInfo[0].region_name}}</p></li>\r\n      <li><span>注册时间：</span><p>{{userInfo[0].create_time}}</p></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"user_approve section_list\">\r\n    <h3>实名认证</h3>\r\n    <ul class=\"section_ul\">\r\n      <li><span>身份证正面照：</span><p><img [src]=\"userInfo[0].id_card_front\" alt=\"身份证正面照\"/></p></li>\r\n      <li><span>身份证背面照：</span><p><img [src]=\"userInfo[0].id_card_behind\" alt=\"身份证背面照\"/></p></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"user_consignee section_list\">\r\n    <h3>收货人信息</h3>\r\n    <nz-table\r\n      #editRowTable\r\n      nzBordered=\"false\"\r\n      [nzData]=\"addRess\"\r\n      nzPageSize=\"10\"\r\n      nzShowSizeChanger = 'true'\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>收货人</th>\r\n        <th>联系电话</th>\r\n        <th>收货地址</th>\r\n        <th>是否默认</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let data of editRowTable.data\">\r\n        <td>\r\n          {{data.consignee}}\r\n        </td>\r\n        <td>{{data.consignee_phone}}</td>\r\n        <td>{{data.details_address}}</td>\r\n        <td>\r\n          <div [ngSwitch]=\"data.is_default\">\r\n            <span *ngSwitchCase=\"'Y'\" style=\"color:green\">是</span>\r\n            <span *ngSwitchCase=\"'N'\" style=\"color:red\">否</span>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n  <div class=\"user_code section_list\">\r\n    <h3>积分明细</h3>\r\n    <nz-table\r\n      #editRowTable\r\n      nzBordered=\"false\"\r\n      [nzData]=\"codeList\"\r\n      nzPageSize=\"10\"\r\n      nzShowSizeChanger = 'true'\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>内容</th>\r\n        <th>积分变化记录</th>\r\n        <th>变化时间</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let data of editRowTable.data\">\r\n        <td>\r\n          {{data.action}}\r\n        </td>\r\n        <td>{{data.integral}}</td>\r\n        <td>{{data.create_time}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n  <div class=\"user_custom section_list\">\r\n    <h3>客户列表</h3>\r\n    <nz-table\r\n      #editRowTable\r\n      nzBordered=\"false\"\r\n      [nzData]=\"cusTomList\"\r\n      nzPageSize=\"10\"\r\n      nzShowSizeChanger = 'true'\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>邀请时间</th>\r\n        <th>用户id</th>\r\n        <th>昵称</th>\r\n        <th>消费贡献积分</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let data of editRowTable.data\">\r\n        <td>\r\n          {{data.create_time}}\r\n        </td>\r\n        <td>{{data.id}}</td>\r\n        <td>{{data.name}}</td>\r\n        <td (click)=\"detailConsume({userid:data.id,refreeid:userInfo[0].id})\"><a href=\"javascript:;\">{{data.integral}}</a></td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n</div>\r\n<ng-template #tplContent>\r\n  <img [src]=\"userInfo[0].photo\" alt=\"\" style=\"width: 100%\">\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/user/view-user/view-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/view-user/view-user.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: auto; }\n  :host ::ng-deep .top_page .ant-pagination-item-active {\n    display: none !important; }\n  :host ::ng-deep .top_page .ant-pagination-item {\n    display: none !important; }\n  :host ::ng-deep .top_page .ant-pagination-next, :host ::ng-deep .top_page .ant-pagination-prev {\n    background: white;\n    padding: 0 10px;\n    border: 1px solid #29c6c6;\n    color: #29c6c6;\n    margin-right: 20px; }\n  :host ::ng-deep .top_page .ant-pagination-next a, :host ::ng-deep .top_page .ant-pagination-prev a {\n    color: #29c6c6; }\n  :host ::ng-deep .top_page .ant-pagination {\n    margin-top: -58px;\n    text-align: right; }\n  :host ::ng-deep .top_page .ant-pagination-disabled {\n    border-color: #ccc;\n    color: #ccc; }\n  :host ::ng-deep .top_page .ant-pagination-disabled a {\n    color: #ccc; }\n  :host ::ng-deep .user_title {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 13px;\n    border-bottom: 1px solid #ddd; }\n  :host ::ng-deep .user_title .user_vip {\n      display: block;\n      font-size: 16px;\n      border: 1px solid #ccc;\n      padding: 0 10px; }\n  :host ::ng-deep .user_title .isopen {\n      margin-right: 20px;\n      display: block;\n      background: white;\n      padding: 10px 10px;\n      color: #13c2c2;\n      border: 1px solid #13c2c2;\n      line-height: 12px; }\n  :host ::ng-deep .user_title .active {\n      color: red;\n      border: 1px solid red; }\n  :host ::ng-deep .user_section .section_list {\n    padding-top: 20px;\n    position: relative; }\n  :host ::ng-deep .user_section h3 {\n    font-weight: 600;\n    font-size: 20px;\n    position: relative; }\n  :host ::ng-deep .user_section h3:before {\n      content: '';\n      width: 5px;\n      position: absolute;\n      background: #1890FF;\n      height: 100%;\n      left: -15px; }\n  :host ::ng-deep .user_section .section_ul {\n    padding: 0;\n    list-style: none; }\n  :host ::ng-deep .user_section .section_ul li {\n      padding: 10px 0px; }\n  :host ::ng-deep .user_section .section_ul li span {\n        float: left;\n        max-width: 100px;\n        width: 100px;\n        text-align: right; }\n  :host ::ng-deep .user_section .section_ul li p {\n        line-height: 20px;\n        min-height: 20px; }\n  :host ::ng-deep .user_section .section_ul li p img {\n          width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci92aWV3LXVzZXIvSDpcXG5ld1xcanNfcGx1Z2luXFxqaXlpbi9zcmNcXGFwcFxccGFnZXNcXHVzZXJcXHZpZXctdXNlclxcdmlldy11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBVyxFQWtHWjtFQW5HRDtJQU1RLHlCQUF3QixFQUN6QjtFQVBQO0lBU1EseUJBQXdCLEVBQ3pCO0VBVlA7SUFZUSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZiwwQkFBeUI7SUFDekIsZUFBYztJQUNkLG1CQUFrQixFQUNuQjtFQWpCUDtJQW1CUSxlQUFjLEVBQ2Y7RUFwQlA7SUFzQlEsa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUNsQjtFQXhCUDtJQTBCUSxtQkFBaUI7SUFDakIsWUFBVSxFQUNYO0VBNUJQO0lBOEJRLFlBQVUsRUFDWDtFQS9CUDtJQWtDTSxpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLCtCQUE4QjtJQUM5QixxQkFBb0I7SUFDcEIsOEJBQTZCLEVBb0I5QjtFQTFETDtNQXdDUSxlQUFjO01BQ2QsZ0JBQWU7TUFDZix1QkFBc0I7TUFDdEIsZ0JBQWUsRUFDaEI7RUE1Q1A7TUE4Q1EsbUJBQWtCO01BQ2xCLGVBQWM7TUFDZCxrQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLGVBQWM7TUFDZCwwQkFBeUI7TUFDekIsa0JBQWlCLEVBQ2xCO0VBckRQO01BdURRLFdBQVU7TUFDVixzQkFBcUIsRUFDdEI7RUF6RFA7SUE2RFEsa0JBQWlCO0lBQ2pCLG1CQUFrQixFQUNuQjtFQS9EUDtJQWlFUSxpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixtQkFBa0IsRUFTbkI7RUE1RVA7TUFxRVUsWUFBVztNQUNYLFdBQVU7TUFDVixtQkFBa0I7TUFDbEIsb0JBQW1CO01BQ25CLGFBQVk7TUFDWixZQUFXLEVBQ1o7RUEzRVQ7SUE4RVEsV0FBUztJQUNULGlCQUFnQixFQWlCakI7RUFoR1A7TUFpRlUsa0JBQWdCLEVBY2pCO0VBL0ZUO1FBbUZZLFlBQVU7UUFDVixpQkFBZ0I7UUFDaEIsYUFBWTtRQUNaLGtCQUFpQixFQUNsQjtFQXZGWDtRQXlGWSxrQkFBaUI7UUFDakIsaUJBQWdCLEVBSWpCO0VBOUZYO1VBNEZjLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdmlldy11c2VyL3ZpZXctdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6YXV0bztcclxuICA6Om5nLWRlZXAge1xyXG5cclxuICAgIC50b3BfcGFnZXtcclxuICAgICAgLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24taXRlbXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmFudC1wYWdpbmF0aW9uLW5leHQsIC5hbnQtcGFnaW5hdGlvbi1wcmV2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjljNmM2O1xyXG4gICAgICAgIGNvbG9yOiAjMjljNmM2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24tbmV4dCBhLCAuYW50LXBhZ2luYXRpb24tcHJldiBhe1xyXG4gICAgICAgIGNvbG9yOiAjMjljNmM2O1xyXG4gICAgICB9XHJcbiAgICAgIC5hbnQtcGFnaW5hdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24tZGlzYWJsZWR7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiNjY2M7XHJcbiAgICAgICAgY29sb3I6I2NjYztcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24tZGlzYWJsZWQgYXtcclxuICAgICAgICBjb2xvcjojY2NjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlcl90aXRsZXtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIC51c2VyX3ZpcHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmlzb3BlbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTNjMmMyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxM2MyYzI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGl2ZXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVzZXJfc2VjdGlvbntcclxuICAgICAgLnNlY3Rpb25fbGlzdHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgaDN7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE4OTBGRjtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2VjdGlvbl91bHtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgIHBhZGRpbmc6MTBweCAwcHg7XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/user/view-user/view-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/view-user/view-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _modal_codedetail_user_modal_codedetail_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-codedetail-user/modal-codedetail-user.component */ "./src/app/pages/user/modal-codedetail-user/modal-codedetail-user.component.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(cdr, modalService, url, http, route, msg) {
        var _this = this;
        this.cdr = cdr;
        this.modalService = modalService;
        this.url = url;
        this.http = http;
        this.route = route;
        this.msg = msg;
        this.showNum = 0;
        this.dataSet = [];
        this.addRess = [];
        this.cusTomList = [];
        this.codeList = [];
        this.route.queryParams.subscribe(function (params) {
            _this.params = JSON.parse(params.data);
            _this.allNum = Math.abs(_this.params.allId.length);
        });
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params.allId.forEach(function (v, k) {
            if (v == _this.params.id) {
                _this.pageNum = k + 1;
            }
        });
        this.getDetailUser(this.params.id);
    };
    //获取用户详情
    ViewUserComponent.prototype.getDetailUser = function (id) {
        var _this = this;
        console.log(id);
        this.http.get(this.url.userDetail, {
            id: id
        }, function (data) {
            if (data.code == '001000') {
                // console.log(data);
                var res = data.response;
                _this.allData = data.response;
                _this.userInfo = res.userInfo;
                _this.cusTomList = res.refereeInfo;
                _this.codeList = res.integral;
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ViewUserComponent.prototype.pageChange = function (e) {
        this.getDetailUser(this.params.allId[e - 1]);
    };
    ViewUserComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    //打开积分详情
    ViewUserComponent.prototype.detailConsume = function (data) {
        this.modalService.create({
            nzTitle: '',
            nzContent: _modal_codedetail_user_modal_codedetail_user_component__WEBPACK_IMPORTED_MODULE_2__["ModalCodedetailUserComponent"],
            nzClosable: false,
            nzComponentParams: data,
            nzFooter: null,
        });
    };
    //打开大图
    ViewUserComponent.prototype.createModal = function (data) {
        this.modalService.create({
            nzTitle: '',
            nzContent: this.tplContent,
            nzClosable: false,
            nzFooter: null
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tplContent'),
        __metadata("design:type", Object)
    ], ViewUserComponent.prototype, "tplContent", void 0);
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/pages/user/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.scss */ "./src/app/pages/user/view-user/view-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__["UrlServeService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module.js.map