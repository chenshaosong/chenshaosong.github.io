(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-module"],{

/***/ "./src/app/pages/order/modal-edit-order/modal-edit-order.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/order/modal-edit-order/modal-edit-order.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form  [formGroup]=\"forms\">\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"serviceP\" nzAllowClear nzPlaceHolder=\"请选择服务商\" name=\"serviceP\">\r\n        <nz-option nzValue=\"xian\" nzLabel=\"西安\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"forms.get('serviceP').dirty && forms.get('serviceP').errors\">请选择服务商！</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item style=\"text-align: right\">\r\n    <nz-form-control>\r\n      <button nz-button nzType=\"primary\" (click)=\"commit()\" style=\"margin-right: 10px\">确认</button>\r\n      <button nz-button nzType=\"primary\" (click)=\"cancle()\" style=\"margin-right: 20px\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/order/modal-edit-order/modal-edit-order.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/order/modal-edit-order/modal-edit-order.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-modal-confirm-body .ant-modal-confirm-content {\n  color: #ff9a91; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvbW9kYWwtZWRpdC1vcmRlci9IOlxcbmV3XFxqc19wbHVnaW5cXGppeWluL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXJcXG1vZGFsLWVkaXQtb3JkZXJcXG1vZGFsLWVkaXQtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci9tb2RhbC1lZGl0LW9yZGVyL21vZGFsLWVkaXQtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICA6Om5nLWRlZXB7XHJcbiAgICAuYW50LW1vZGFsLWNvbmZpcm0tYm9keSAuYW50LW1vZGFsLWNvbmZpcm0tY29udGVudHtcclxuICAgICAgY29sb3I6ICNmZjlhOTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/order/modal-edit-order/modal-edit-order.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/order/modal-edit-order/modal-edit-order.component.ts ***!
  \****************************************************************************/
/*! exports provided: ModalEditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditOrderComponent", function() { return ModalEditOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalEditOrderComponent = /** @class */ (function () {
    function ModalEditOrderComponent(fb, nzmref, msg, url, util, http, modal) {
        this.fb = fb;
        this.nzmref = nzmref;
        this.msg = msg;
        this.url = url;
        this.util = util;
        this.http = http;
        this.modal = modal;
        this.forms = this.fb.group({
            serviceP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ModalEditOrderComponent.prototype.ngOnInit = function () {
        this.serverId = this.nzmref.getContentComponent();
        console.log(this.serverId);
    };
    ModalEditOrderComponent.prototype.commit = function () {
        var _this = this;
        for (var control in this.forms.controls) {
            this.forms.controls[control].markAsDirty();
            this.forms.controls[control].updateValueAndValidity();
        }
        if (!this.forms.valid) {
            return;
        }
        var modal = this.modal.confirm({
            nzTitle: '提示',
            nzContent: '调整服务商后，原先的服务商将不能对订单进行任何操作！<br>此订单将由调整后的服务商进行发货处理，请谨慎操作！',
            nzBodyStyle: { color: '#ff0000' },
            nzOnOk: function () { return new Promise(function (resolve, reject) {
                // this.http.get(this.url.updateServe,{
                //     id:'',
                //     merchant_id:this.forms.controls['serviceP'].value
                // },data=>{
                //   console.log(data);
                //   if(data.code == '001000'){
                modal.destroy();
                _this.nzmref.destroy();
                //   }else{
                //     this.msg.error(data.message);
                //   }
                // },err=>{
                //   console.log(err);
                // })
            }).catch(function () { return console.log('Oops errors!'); }); }
        });
    };
    ModalEditOrderComponent.prototype.cancle = function () {
        history.back();
        this.nzmref.destroy();
    };
    ModalEditOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-edit-order',
            template: __webpack_require__(/*! ./modal-edit-order.component.html */ "./src/app/pages/order/modal-edit-order/modal-edit-order.component.html"),
            styles: [__webpack_require__(/*! ./modal-edit-order.component.scss */ "./src/app/pages/order/modal-edit-order/modal-edit-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__["UrlServeService"],
            _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__["UtilServeService"],
            _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_5__["ResetHttpService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]])
    ], ModalEditOrderComponent);
    return ModalEditOrderComponent;
}());



/***/ }),

/***/ "./src/app/pages/order/order-manger/order-manger.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/order/order-manger/order-manger.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" style=\"display:flex;justify-content:flex-end;\">\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"orderType\" nzAllowClear nzPlaceHolder=\"订单类型\" name=\"orderType\">\r\n        <nz-option nzValue=\"1\" nzLabel=\"实物订单\"></nz-option>\r\n        <nz-option nzValue=\"2\" nzLabel=\"服务订单\"></nz-option>\r\n        <nz-option nzValue=\"3\" nzLabel=\"空\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"serveArea\" nzAllowClear nzPlaceHolder=\"服务大区\" name=\"serve\" >\r\n        <nz-option nzValue=\"h\" nzLabel=\"华北\"></nz-option>\r\n        <nz-option nzValue=\"x\" nzLabel=\"西北\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <input type=\"text\" formControlName=\"phone\" nz-input name=\"ak\"  placeholder=\"请输入手机号\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <button nz-button nzType=\"primary\" (click)=\"searchMore()\">搜索</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n<nz-table\r\n  #editRowTable\r\n  nzBordered=\"false\"\r\n  [nzData]=\"dataSet\"\r\n  nzPageSize=\"10\"\r\n  nzShowSizeChanger = 'true'\r\n  [nzLoading]=\"isloading\"\r\n>\r\n  <thead>\r\n  <tr>\r\n    <th>订单ID</th>\r\n    <th>订单类型</th>\r\n    <th>用户手机号码</th>\r\n    <th>服务商ID</th>\r\n    <th>服务商名</th>\r\n    <th>订单总金额</th>\r\n    <th>使用积分</th>\r\n    <th>实付款总金额</th>\r\n    <th>订单状态</th>\r\n    <th>操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let data of editRowTable.data\">\r\n    <td>\r\n      {{data.id}}\r\n    </td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.name\" style=\"display: inline-block\">\r\n        <div *ngSwitchCase=\"'0'\">实物订单</div>\r\n        <div *ngSwitchCase=\"'1'\">服务订单</div>\r\n      </div>\r\n    </td>\r\n    <td>{{data.telephone}}</td>\r\n    <td>{{data.integral}}</td>\r\n    <td>{{data.recomm_code}}</td>\r\n    <td>\r\n      sss\r\n    </td>\r\n    <td>{{data.region_name}}</td>\r\n    <td>\r\n     ssss\r\n    </td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.status\" style=\"display: inline-block\">\r\n        <div *ngSwitchCase=\"'1'\">待付款</div>\r\n        <div *ngSwitchCase=\"'2'\">待发货</div>\r\n        <div *ngSwitchCase=\"'3'\">配送中</div>\r\n        <div *ngSwitchCase=\"'4'\">已完成</div>\r\n        <div *ngSwitchCase=\"'5'\">已取消</div>\r\n        <div *ngSwitchCase=\"'6'\">待服务</div>\r\n        <div *ngSwitchCase=\"'7'\">服务中</div>\r\n      </div>\r\n    </td>\r\n    <td>\r\n      <button nz-button nzType=\"default\" (click)=\"goPager({url:'/order/view',data:{data:data}})\" >查看</button>\r\n      <button nz-button nzType=\"default\" (click)=\"createModal(data)\" *ngIf=\"data.status == '6' || data.status == '2'\">调整服务商</button>\r\n    </td>\r\n\r\n  </tr>\r\n  </tbody>\r\n</nz-table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/order/order-manger/order-manger.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/order/order-manger/order-manger.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep form .ant-select {\n  max-width: 200px !important;\n  width: 200px; }\n\n:host ::ng-deep .editable-cell {\n  position: relative; }\n\n:host ::ng-deep .editable-cell-input-wrapper,\n:host ::ng-deep .editable-cell-text-wrapper {\n  padding-right: 24px; }\n\n:host ::ng-deep .editable-cell-text-wrapper {\n  padding: 5px 24px 5px 5px; }\n\n:host ::ng-deep .editable-cell-icon,\n:host ::ng-deep .editable-cell-icon-check {\n  position: absolute;\n  right: 0;\n  width: 20px;\n  cursor: pointer; }\n\n:host ::ng-deep .editable-cell-icon {\n  line-height: 18px;\n  display: none; }\n\n:host ::ng-deep .editable-cell-icon-check {\n  line-height: 28px; }\n\n:host ::ng-deep .editable-cell:hover .editable-cell-icon {\n  display: inline-block; }\n\n:host ::ng-deep .editable-cell-icon:hover,\n:host ::ng-deep .editable-cell-icon-check:hover {\n  color: #108ee9; }\n\n:host ::ng-deep .editable-add-btn {\n  margin-bottom: 8px; }\n\n:host ::ng-deep .ant-table {\n  padding-top: 20px; }\n\n:host ::ng-deep .ant-pagination-options {\n  position: absolute;\n  left: 0;\n  top: -35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXItbWFuZ2VyL0g6XFxuZXdcXGpzX3BsdWdpblxcaml5aW4vc3JjXFxhcHBcXHBhZ2VzXFxvcmRlclxcb3JkZXItbWFuZ2VyXFxvcmRlci1tYW5nZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSw0QkFBMEI7RUFDMUIsYUFBWSxFQUNiOztBQUxMO0VBUU0sbUJBQWtCLEVBQ25COztBQVRMOztFQWFNLG9CQUFtQixFQUNwQjs7QUFkTDtFQWlCTSwwQkFBeUIsRUFDMUI7O0FBbEJMOztFQXNCTSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFlBQVc7RUFDWCxnQkFBZSxFQUNoQjs7QUExQkw7RUE2Qk0sa0JBQWlCO0VBQ2pCLGNBQWEsRUFDZDs7QUEvQkw7RUFrQ00sa0JBQWlCLEVBQ2xCOztBQW5DTDtFQXNDTSxzQkFBcUIsRUFDdEI7O0FBdkNMOztFQTJDTSxlQUFjLEVBQ2Y7O0FBNUNMO0VBK0NNLG1CQUFrQixFQUNuQjs7QUFoREw7RUFrRE0sa0JBQWlCLEVBQ2xCOztBQW5ETDtFQXFETSxtQkFBa0I7RUFDbEIsUUFBTTtFQUNOLFdBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLW1hbmdlci9vcmRlci1tYW5nZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICA6Om5nLWRlZXB7XHJcbiAgICBmb3JtIC5hbnQtc2VsZWN0e1xyXG4gICAgICBtYXgtd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLy8gIOihqOagvFxyXG4gICAgLmVkaXRhYmxlLWNlbGwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWNlbGwtaW5wdXQtd3JhcHBlcixcclxuICAgIC5lZGl0YWJsZS1jZWxsLXRleHQtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWNlbGwtdGV4dC13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogNXB4IDI0cHggNXB4IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtY2VsbC1pY29uLFxyXG4gICAgLmVkaXRhYmxlLWNlbGwtaWNvbi1jaGVjayB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWNlbGwtaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1jZWxsLWljb24tY2hlY2sge1xyXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtY2VsbDpob3ZlciAuZWRpdGFibGUtY2VsbC1pY29uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1jZWxsLWljb246aG92ZXIsXHJcbiAgICAuZWRpdGFibGUtY2VsbC1pY29uLWNoZWNrOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMxMDhlZTk7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWFkZC1idG4ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuYW50LXRhYmxle1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5hbnQtcGFnaW5hdGlvbi1vcHRpb25ze1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgdG9wOi0zNXB4O1xyXG4gICAgfVxyXG4gICAgLy8gIOihqOagvOe7k+adn1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/order/order-manger/order-manger.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/order/order-manger/order-manger.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderMangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderMangerComponent", function() { return OrderMangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-edit-order/modal-edit-order.component */ "./src/app/pages/order/modal-edit-order/modal-edit-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderMangerComponent = /** @class */ (function () {
    function OrderMangerComponent(fb, msg, modalService, router, url, http, util) {
        this.fb = fb;
        this.msg = msg;
        this.modalService = modalService;
        this.router = router;
        this.url = url;
        this.http = http;
        this.util = util;
        this.i = 1;
        this.isloading = true;
        this.dataSet = [
            { id: 1, name: '1', telephone: 1, integral: 1, recomm_code: 1, region_name: 1, status: '1' },
            { id: 1, name: '0', telephone: 1, integral: 1, recomm_code: 1, region_name: 1, status: '6' },
            { id: 1, name: '0', telephone: 1, integral: 1, recomm_code: 1, region_name: 1, status: '3' },
            { id: 1, name: '1', telephone: 1, integral: 1, recomm_code: 1, region_name: 1, status: '2' }
        ];
        this.allId = [];
        this.validateForm = this.fb.group({
            serveArea: [],
            orderType: [],
            phone: [],
        });
    }
    Object.defineProperty(OrderMangerComponent.prototype, "serveArea", {
        //获取组件
        get: function () {
            return this.validateForm.controls.serveArea;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderMangerComponent.prototype, "orderType", {
        get: function () {
            return this.validateForm.controls.orderType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderMangerComponent.prototype, "phone", {
        get: function () {
            return this.validateForm.controls.phone;
        },
        enumerable: true,
        configurable: true
    });
    OrderMangerComponent.prototype.ngOnInit = function () {
        this.getDetailList();
        this.isloading = false;
    };
    //页面跳转
    OrderMangerComponent.prototype.goPager = function (option) {
        this.util.goPage(option);
    };
    //搜索
    OrderMangerComponent.prototype.searchMore = function () {
        console.log(this.orderType.value, this.phone.value, this.serveArea.value);
        // this.getDetailList();
    };
    //获取订单列表
    OrderMangerComponent.prototype.getDetailList = function (order_type, region_id, telephone) {
        var _this = this;
        if (order_type === void 0) { order_type = ''; }
        if (region_id === void 0) { region_id = ''; }
        if (telephone === void 0) { telephone = ''; }
        this.isloading = true;
        this.http.get(this.url.orderList, {
            order_type: order_type,
            region_id: region_id,
            telephone: telephone
        }, function (data) {
            // console.log(data);
            _this.dataSet = data.response;
            _this.isloading = false;
            // this.dataSet.forEach((v,k)=>{
            //   this.allId.push(v.id);
            // });
        }, function (err) {
            console.log(err);
        });
    };
    /*
    * 表格操作
    * */
    //创建模态窗 调整服务商
    OrderMangerComponent.prototype.createModal = function (data) {
        this.validateForm.reset();
        var modal = this.modalService.create({
            nzTitle: '调整服务商',
            nzContent: _modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_7__["ModalEditOrderComponent"],
            nzClosable: false,
            nzComponentParams: data,
            nzFooter: null
        });
        modal.afterOpen.subscribe(function () { return console.log('[afterOpen] emitted!'); });
        // Return a result when closed
        modal.afterClose.subscribe(function (result) { return console.log('[afterClose] The result is:', result); });
    };
    OrderMangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-manger',
            template: __webpack_require__(/*! ./order-manger.component.html */ "./src/app/pages/order/order-manger/order-manger.component.html"),
            styles: [__webpack_require__(/*! ./order-manger.component.scss */ "./src/app/pages/order/order-manger/order-manger.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__["UrlServeService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__["ResetHttpService"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__["UtilServeService"]])
    ], OrderMangerComponent);
    return OrderMangerComponent;
}());



/***/ }),

/***/ "./src/app/pages/order/order-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/order/order-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_manger_order_manger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-manger/order-manger.component */ "./src/app/pages/order/order-manger/order-manger.component.ts");
/* harmony import */ var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-order/view-order.component */ "./src/app/pages/order/view-order/view-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _order_manger_order_manger_component__WEBPACK_IMPORTED_MODULE_2__["OrderMangerComponent"], data: { breadcrumb: '订单管理' } },
    { path: 'view', component: _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_3__["ViewOrderComponent"], data: { breadcrumb: '查看订单' } }
];
var OrderRoutingModule = /** @class */ (function () {
    function OrderRoutingModule() {
    }
    OrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderRoutingModule);
    return OrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/order/order.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.module.ts ***!
  \*********************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/pages/order/order-routing.module.ts");
/* harmony import */ var _order_manger_order_manger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-manger/order-manger.component */ "./src/app/pages/order/order-manger/order-manger.component.ts");
/* harmony import */ var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-order/view-order.component */ "./src/app/pages/order/view-order/view-order.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-edit-order/modal-edit-order.component */ "./src/app/pages/order/modal-edit-order/modal-edit-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"]
            ],
            declarations: [_order_manger_order_manger_component__WEBPACK_IMPORTED_MODULE_3__["OrderMangerComponent"], _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_4__["ViewOrderComponent"], _modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditOrderComponent"]],
            entryComponents: [_modal_edit_order_modal_edit_order_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditOrderComponent"]]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./src/app/pages/order/view-order/view-order.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/order/view-order/view-order.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top_page\">\r\n  <nz-pagination [nzPageSize]=\"1\" [nzPageIndex]=\"pageNum\" [nzTotal]=\"allNum\" [nzItemRender]=\"renderItemTemplate\" (nzPageIndexChange)=\"pageChange($event)\"></nz-pagination>\r\n  <ng-template #renderItemTemplate let-type let-page=\"page\">\r\n    <a *ngIf=\"type==='pre'\">上一页</a>\r\n    <a *ngIf=\"type==='next'\">下一页</a>\r\n    <a *ngIf=\"type==='page'\">{{page}}</a>\r\n  </ng-template>\r\n</div>\r\n<div class=\"order_title\">\r\n  <p style=\"font-size: 16px;line-height: 30px;\">订单号:\r\n    <span style=\"margin-left: 10px;\">11111111111</span>\r\n  </p>\r\n  <div class=\"order_status\">\r\n    <div [ngSwitch]=\"'1'\" style=\"display: inline-block\">\r\n      <div *ngSwitchCase=\"'1'\">待付款</div>\r\n      <div *ngSwitchCase=\"'2'\">待发货</div>\r\n      <div *ngSwitchCase=\"'3'\">配送中</div>\r\n      <div *ngSwitchCase=\"'4'\">已完成</div>\r\n      <div *ngSwitchCase=\"'5'\">已取消</div>\r\n      <div *ngSwitchCase=\"'6'\">待服务</div>\r\n      <div *ngSwitchCase=\"'7'\">服务中</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"order_section\">\r\n  <div class=\"order_msg section_list\">\r\n    <h3>用户信息</h3>\r\n\r\n    <ul class=\"section_ul\">\r\n      <li><span>用户ID：</span><p>U2001001</p></li>\r\n      <li><span>手机号码：</span><p>111111111</p></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"service_msg section_list\">\r\n    <h3>服务商信息</h3>\r\n    <ul class=\"section_ul\">\r\n      <li><span>服务商ID：</span><p>sfsdfsfs</p></li>\r\n      <li><span>服务商名：</span><p>西安</p></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"pro_msg section_list\">\r\n    <h3>商品信息</h3>\r\n    <nz-table\r\n      #editRowTable\r\n      nzBordered=\"false\"\r\n      [nzData]=\"addRess\"\r\n      nzPageSize=\"10\"\r\n      nzShowSizeChanger = 'true'\r\n    >\r\n      <thead>\r\n      <tr>\r\n        <th>商品ID</th>\r\n        <th>商品小分类</th>\r\n        <th>商品名称</th>\r\n        <th>单价(元)</th>\r\n        <th>VIP价(元)</th>\r\n        <th>数量</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let data of editRowTable.data\">\r\n        <td>\r\n          111111111\r\n        </td>\r\n        <td>育儿激发考虑考虑的减肥啦</td>\r\n        <td>xxxxxxxxxxxxx</td>\r\n        <td>111111.00 </td>\r\n        <td>222.00 </td>\r\n        <td>1 </td>\r\n      </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n  <div class=\"pay_msg section_list\">\r\n    <h3>付款信息</h3>\r\n    <ul class=\"section_ul\">\r\n      <li><span>商品总金额：</span><p>121313213</p></li>\r\n      <li><span>积分抵扣：</span><p>西安</p></li>\r\n      <li><span>实付款：</span><p>西安</p></li>\r\n      <li><span>支付方式：</span><p>西安</p></li>\r\n      <li><span>支付时间：</span><p>西安</p></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"accept_msg section_list\">\r\n    <h3>收货人信息</h3>\r\n    <ul class=\"section_ul\">\r\n      <li><span>收货人：</span><p>张安顺</p></li>\r\n      <li><span>电话：</span><p>1111111111</p></li>\r\n      <li><span>收货地址：</span><p>陕西省西安市雁塔区 详细地址详细地址详细地址详细地址</p></li>\r\n      <li><span>备注信息：</span><p>用户在前面提交的备注信息</p></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<ng-template #tplContent>\r\n  <img [src]=\"userInfo[0].photo\" alt=\"\" style=\"width: 100%\">\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/order/view-order/view-order.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/order/view-order/view-order.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: auto; }\n  :host ::ng-deep .top_page .ant-pagination-item-active {\n    display: none !important; }\n  :host ::ng-deep .top_page .ant-pagination-item {\n    display: none !important; }\n  :host ::ng-deep .top_page .ant-pagination-next, :host ::ng-deep .top_page .ant-pagination-prev {\n    background: white;\n    padding: 0 10px;\n    border: 1px solid #29c6c6;\n    color: #29c6c6;\n    margin-right: 20px; }\n  :host ::ng-deep .top_page .ant-pagination-next a, :host ::ng-deep .top_page .ant-pagination-prev a {\n    color: #29c6c6; }\n  :host ::ng-deep .top_page .ant-pagination {\n    margin-top: -58px;\n    text-align: right; }\n  :host ::ng-deep .top_page .ant-pagination-disabled {\n    border-color: #ccc;\n    color: #ccc; }\n  :host ::ng-deep .top_page .ant-pagination-disabled a {\n    color: #ccc; }\n  :host ::ng-deep .order_title {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 13px;\n    border-bottom: 1px solid #ddd; }\n  :host ::ng-deep .order_title .order_status {\n      display: block;\n      font-size: 16px;\n      border: 1px solid #ccc;\n      padding: 0 10px; }\n  :host ::ng-deep .order_section .section_list {\n    padding-top: 20px;\n    position: relative; }\n  :host ::ng-deep .order_section h3 {\n    font-weight: 600;\n    font-size: 20px;\n    position: relative; }\n  :host ::ng-deep .order_section h3:before {\n      content: '';\n      width: 5px;\n      position: absolute;\n      background: #1890FF;\n      height: 100%;\n      left: -15px; }\n  :host ::ng-deep .order_section .section_ul {\n    padding: 0;\n    list-style: none; }\n  :host ::ng-deep .order_section .section_ul li {\n      padding: 10px 0px; }\n  :host ::ng-deep .order_section .section_ul li span {\n        float: left;\n        max-width: 100px;\n        width: 100px;\n        text-align: right; }\n  :host ::ng-deep .order_section .section_ul li p {\n        line-height: 20px;\n        min-height: 20px; }\n  :host ::ng-deep .order_section .section_ul li p img {\n          width: 200px; }\n  :host ::ng-deep .ant-spin-container {\n    width: 80%;\n    margin-left: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvdmlldy1vcmRlci9IOlxcbmV3XFxqc19wbHVnaW5cXGppeWluL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXJcXHZpZXctb3JkZXJcXHZpZXctb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFXLEVBeUZaO0VBMUZEO0lBTVEseUJBQXdCLEVBQ3pCO0VBUFA7SUFTUSx5QkFBd0IsRUFDekI7RUFWUDtJQVlRLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLDBCQUF5QjtJQUN6QixlQUFjO0lBQ2QsbUJBQWtCLEVBQ25CO0VBakJQO0lBbUJRLGVBQWMsRUFDZjtFQXBCUDtJQXNCUSxrQkFBaUI7SUFDakIsa0JBQWlCLEVBQ2xCO0VBeEJQO0lBMEJRLG1CQUFpQjtJQUNqQixZQUFVLEVBQ1g7RUE1QlA7SUE4QlEsWUFBVSxFQUNYO0VBL0JQO0lBa0NNLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsK0JBQThCO0lBQzlCLHFCQUFvQjtJQUNwQiw4QkFBNkIsRUFPOUI7RUE3Q0w7TUF3Q1EsZUFBYztNQUNkLGdCQUFlO01BQ2YsdUJBQXNCO01BQ3RCLGdCQUFlLEVBQ2hCO0VBNUNQO0lBZ0RRLGtCQUFpQjtJQUNqQixtQkFBa0IsRUFDbkI7RUFsRFA7SUFvRFEsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsbUJBQWtCLEVBU25CO0VBL0RQO01Bd0RVLFlBQVc7TUFDWCxXQUFVO01BQ1YsbUJBQWtCO01BQ2xCLG9CQUFtQjtNQUNuQixhQUFZO01BQ1osWUFBVyxFQUNaO0VBOURUO0lBaUVRLFdBQVM7SUFDVCxpQkFBZ0IsRUFpQmpCO0VBbkZQO01Bb0VVLGtCQUFnQixFQWNqQjtFQWxGVDtRQXNFWSxZQUFVO1FBQ1YsaUJBQWdCO1FBQ2hCLGFBQVk7UUFDWixrQkFBaUIsRUFDbEI7RUExRVg7UUE0RVksa0JBQWlCO1FBQ2pCLGlCQUFnQixFQUlqQjtFQWpGWDtVQStFYyxhQUFZLEVBQ2I7RUFoRmI7SUFzRk0sV0FBVTtJQUNWLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL3ZpZXctb3JkZXIvdmlldy1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6YXV0bztcclxuICA6Om5nLWRlZXAge1xyXG5cclxuICAgIC50b3BfcGFnZXtcclxuICAgICAgLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24taXRlbXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmFudC1wYWdpbmF0aW9uLW5leHQsIC5hbnQtcGFnaW5hdGlvbi1wcmV2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjljNmM2O1xyXG4gICAgICAgIGNvbG9yOiAjMjljNmM2O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24tbmV4dCBhLCAuYW50LXBhZ2luYXRpb24tcHJldiBhe1xyXG4gICAgICAgIGNvbG9yOiAjMjljNmM2O1xyXG4gICAgICB9XHJcbiAgICAgIC5hbnQtcGFnaW5hdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24tZGlzYWJsZWR7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiNjY2M7XHJcbiAgICAgICAgY29sb3I6I2NjYztcclxuICAgICAgfVxyXG4gICAgICAuYW50LXBhZ2luYXRpb24tZGlzYWJsZWQgYXtcclxuICAgICAgICBjb2xvcjojY2NjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAub3JkZXJfdGl0bGV7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAub3JkZXJfc3RhdHVze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9yZGVyX3NlY3Rpb257XHJcbiAgICAgIC5zZWN0aW9uX2xpc3R7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIGgze1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxODkwRkY7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb25fdWx7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICBwYWRkaW5nOjEwcHggMHB4O1xyXG4gICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYW50LXNwaW4tY29udGFpbmVye1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/order/view-order/view-order.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/order/view-order/view-order.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderComponent", function() { return ViewOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewOrderComponent = /** @class */ (function () {
    function ViewOrderComponent(cdr, modalService, url, http, route, msg) {
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
        });
    }
    ViewOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.params.allId) {
            this.allNum = Math.abs(this.params.allId.length);
            this.params.allId.forEach(function (v, k) {
                if (v == _this.params.id) {
                    _this.pageNum = k + 1;
                }
            });
        }
        // this.getDetailUser(this.params.id);
    };
    //获取订单详情
    ViewOrderComponent.prototype.getDetailUser = function (id) {
        var _this = this;
        console.log(id);
        this.http.get(this.url.orderDetail, {
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
    ViewOrderComponent.prototype.pageChange = function (e) {
        this.getDetailUser(this.params.allId[e - 1]);
    };
    ViewOrderComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    //打开大图
    ViewOrderComponent.prototype.createModal = function (data) {
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
    ], ViewOrderComponent.prototype, "tplContent", void 0);
    ViewOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-order',
            template: __webpack_require__(/*! ./view-order.component.html */ "./src/app/pages/order/view-order/view-order.component.html"),
            styles: [__webpack_require__(/*! ./view-order.component.scss */ "./src/app/pages/order/view-order/view-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__["UrlServeService"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_4__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], ViewOrderComponent);
    return ViewOrderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-order-order-module.js.map