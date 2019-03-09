(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"],{

/***/ "./src/app/pages/product/add-product/add-product.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/product/add-product/add-product.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form nz-form [formGroup]=\"validateForm\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品名称：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_name\" placeholder=\"\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_name').dirty && validateForm.get('pro_name').errors\">\r\n        请输入商品名称！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品所属分类：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select style=\"width: 31%;margin-right: 3%;\" [(ngModel)]=\"selectedFirst\" (ngModelChange)=\"firstChange($event)\" formControlName='selectF' nzPlaceHolder=\"请选择一级\">\r\n        <nz-option *ngFor=\"let p of firstData\" [nzValue]=\"p.product_type_id\" [nzLabel]=\"p.name\"></nz-option>\r\n      </nz-select>\r\n      <nz-select style=\"width: 31%;margin-right: 3%;\" [nzAllowClear]=\"true\" [(ngModel)]=\"selectedTwo\" nzPlaceHolder=\"请选择二级\" (ngModelChange)=\"twoChange($event)\" formControlName='selectT'>\r\n        <nz-option *ngFor=\"let c of twoData\" [nzLabel]=\"c.name\" [nzValue]=\"c.product_type_id\"></nz-option>\r\n      </nz-select>\r\n      <nz-select style=\"width: 31%;\" [nzAllowClear]=\"true\" [(ngModel)]=\"selectedThree\" nzPlaceHolder=\"请选择三级\" (ngModelChange)=\"threeChange($event)\" formControlName='selectThr'>\r\n        <nz-option *ngFor=\"let c of threeData\" [nzLabel]=\"c.name\" [nzValue]=\"c.product_type_id\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('selectF').dirty && validateForm.get('selectF').errors&&validateForm.get('selectT').dirty && validateForm.get('selectT').errors&& validateForm.get('selectThr').dirty && validateForm.get('selectThr').errors\">\r\n        请选择分类！\r\n      </nz-form-explain>\r\n\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>产品类型：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select formControlName=\"pro_type\" nzPlaceHolder=\"请选择产品类型\">\r\n        <nz-option nzValue=\"service\" nzLabel=\"服务\"></nz-option>\r\n        <nz-option nzValue=\"'product'\" nzLabel=\"实物\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('supplyer').dirty && validateForm.get('supplyer').errors\">请选择产品类型</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>供应商：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select formControlName=\"supplyer\" nzPlaceHolder=\"请选择\">\r\n        <nz-option nzValue=\"西安\" nzLabel=\"0\"></nz-option>\r\n        <nz-option nzValue=\"西安\" nzLabel=\"1\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('supplyer').dirty && validateForm.get('supplyer').errors\">请选择供应商</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品进价：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_price\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">元</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_price').dirty && validateForm.get('pro_price').errors\">\r\n        请输入商品进价！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>利润率：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_profits\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">%</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_profits').dirty && validateForm.get('pro_profits').errors\">\r\n        请输入利润率！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品单价：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_sig_price\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">元</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_sig_price').dirty && validateForm.get('pro_sig_price').errors\">\r\n        请输入商品单价！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品VIP价：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_vip\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">元</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_vip').dirty && validateForm.get('pro_vip').errors\">\r\n        请输入商品VIP价！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>库存量：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"inventory\" placeholder=\"\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('inventory').dirty && validateForm.get('inventory').errors\">\r\n        请输入库存量！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品列表方图</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload class=\"avatar-uploader\"\r\n                 [nzAction]=\"imgUrl\"\r\n                 nzListType=\"picture-card\"\r\n                 [nzShowUploadList]=\"false\"\r\n                 [nzShowButton]=\"true\"\r\n                 [nzBeforeUpload]=\"beforeUploadSmall\"\r\n                 (nzChange)=\"handleChangeSmall($event)\">\r\n        <ng-container *ngIf=\"!avatarSmallUrl\">\r\n          <i class=\"ico ico_plus\"></i>\r\n          <div class=\"ant-upload-text\">Upload</div>\r\n        </ng-container>\r\n        <img *ngIf=\"avatarSmallUrl\" [src]=\"avatarSmallUrl\" class=\"avatar\">\r\n      </nz-upload>\r\n      <p style=\"color:#ff9a91\">图片只能上传格式\"image/jpg和image/png\",大小限制为100*100</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品详情轮播图</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload\r\n        [nzAction]=\"imgUrl\"\r\n        nzListType=\"picture-card\"\r\n        [(nzFileList)]=\"fileList\"\r\n        [nzShowButton]=\"fileList.length < 5\"\r\n        [nzPreview]=\"handlePreview\"\r\n        (nzChange)=\"handleMore($event)\"\r\n        [nzRemove]=\"deleImg\"\r\n      >\r\n        <i nz-icon type=\"plus\"></i>\r\n        <div class=\"ant-upload-text\">Upload</div>\r\n      </nz-upload>\r\n      <nz-modal [nzVisible]=\"previewVisible\" [nzContent]=\"modalContent\" [nzFooter]=\"null\" (nzOnCancel)=\"previewVisible=false\">\r\n        <ng-template #modalContent>\r\n          <img [src]=\"previewImage\" [ngStyle]=\"{ 'width': '100%' }\" />\r\n        </ng-template>\r\n      </nz-modal>\r\n      <p style=\"color:#ff9a91\">图片只能上传格式\"image/jpg和image/png \",大小限制为100*100,最多五个</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品详情</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <div id=\"edit\">\r\n\r\n      </div>\r\n      <p style=\"color: red;margin-bottom: 0\" *ngIf=\"life\">请输入内容</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>推荐到首页</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-radio-group [(ngModel)]=\"radioValue\" formControlName=\"isable\">\r\n        <label nz-radio nzValue=\"Y\">是</label>\r\n        <label nz-radio nzValue=\"N\">否</label>\r\n      </nz-radio-group>\r\n      <nz-form-explain *ngIf=\"validateForm.get('isable').dirty && validateForm.get('isable').errors\">\r\n        请选择！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button style=\"margin-right: 20px;\" nz-button nzType=\"primary\" (click)=\"submitForm($event,validateForm.value)\">保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/product/add-product/add-product.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/product/add-product/add-product.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .w-e-toolbar {\n  flex-wrap: wrap !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9hZGQtcHJvZHVjdC9IOlxcbmV3XFxqc19wbHVnaW5cXGppeWluL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdFxcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sMkJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIDo6bmctZGVlcHtcclxuICAgIC53LWUtdG9vbGJhcntcclxuICAgICAgZmxleC13cmFwOndyYXAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/product/add-product/add-product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/product/add-product/add-product.component.ts ***!
  \********************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
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





var E = __webpack_require__(/*! wangeditor */ "./node_modules/wangeditor/release/wangEditor.js");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(fb, http, msg, url) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.msg = msg;
        this.url = url;
        this.loading = false;
        this.life = false;
        this.pro_id = [];
        this.allPicUrl = [];
        //多图上传
        this.fileList = [];
        this.previewImage = '';
        this.previewVisible = false;
        //提交
        this.submitForm = function ($event, value) {
            debugger;
            console.log(value);
            $event.preventDefault();
            for (var key in _this.validateForm.controls) {
                _this.validateForm.controls[key].markAsDirty();
                _this.validateForm.controls[key].updateValueAndValidity();
            }
            if (!_this.validateForm.valid)
                return;
            if (!_this.smallImg || _this.fileList.length <= 0) {
                _this.allPicUrl = [];
                _this.msg.error('请上传图片！');
                return;
            }
            var content = _this.edit.txt.html();
            if (content === '<p><br></p>') {
                console.log(12);
                _this.life = true;
                return;
            }
            else {
                _this.life = false;
            }
            if (_this.pro_id.length < 0) {
                _this.msg.error('请选择分类！');
                return;
            }
            _this.http.get(_this.url.addProduct, {
                name: _this.validateForm.controls['pro_name'].value,
                first_type_id: _this.pro_id[0],
                second_type_id: _this.pro_id[1],
                third_type_id: _this.pro_id[2],
                support_id: _this.validateForm.controls['supplyer'].value,
                cost_price: _this.validateForm.controls['pro_price'].value,
                sell_price: _this.validateForm.controls['pro_sig_price'].value,
                profit_rate: (_this.validateForm.controls['pro_profits'].value) / 100,
                vip_sell_price: _this.validateForm.controls['pro_vip'].value,
                stock_quantity: _this.validateForm.controls['inventory'].value,
                big_picture: _this.smallImg,
                small_picture: _this.allPicUrl.join(','),
                is_home_page: _this.validateForm.controls['isable'].value,
                content: content,
                type: _this.validateForm.controls['pro_type'].value
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.msg.success('添加成功！');
                    history.back();
                }
                else {
                    _this.msg.error(data.message);
                }
            }, function (err) {
                _this.msg.error(err);
            });
        };
        //上传图片
        this.beforeUploadSmall = function (file) {
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
        //多图上传
        this.handlePreview = function (file) {
            debugger;
            _this.previewImage = file.url || file.thumbUrl;
            _this.previewVisible = true;
            console.log(file);
        };
        this.validateForm = this.fb.group({
            pro_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            supplyer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pro_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pro_profits: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pro_sig_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pro_vip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            inventory: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            selectT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            selectF: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            selectThr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            isable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pro_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.imgUrl = this.url.commentBaseUrl + this.url.imgUpLoad;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        // 创建编辑器
        this.edit = new E('#edit');
        this.edit.create();
        this.getClassify();
    };
    //获取产品分类
    AddProductComponent.prototype.getClassify = function () {
        var _this = this;
        this.http.get(this.url.productTypeList, {}, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.firstData = data.response;
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //取消
    AddProductComponent.prototype.cancleForm = function (e) {
        history.back();
    };
    AddProductComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    AddProductComponent.prototype.handleChangeSmall = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.smallImg = info.file.response.response.filePath;
            }
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                console.log(img);
                _this.loading = false;
                _this.avatarSmallUrl = img;
            });
        }
    };
    AddProductComponent.prototype.handleMore = function (info) {
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.allPicUrl.push(info.file.response.response.filePath);
            }
        }
    };
    AddProductComponent.prototype.deleImg = function (file) {
        return false;
    };
    //三级
    AddProductComponent.prototype.firstChange = function ($event) {
        var _this = this;
        this.selectedTwo = null;
        if ($event) {
            this.pro_id = [];
            this.firstData.forEach(function (v, k) {
                if (v['product_type_id'] == $event) {
                    _this.twoData = v['children'];
                }
            });
            this.pro_id.push($event);
        }
    };
    AddProductComponent.prototype.twoChange = function ($event) {
        var _this = this;
        this.selectedThree = null;
        if ($event) {
            this.twoData.forEach(function (v, k) {
                if (v['product_type_id'] == $event) {
                    _this.threeData = v['children'];
                }
            });
            this.pro_id.push($event);
        }
    };
    AddProductComponent.prototype.threeChange = function ($event) {
        if ($event) {
            this.pro_id.push($event);
        }
        this.pro_id = this.uniq(this.pro_id);
        console.log(this.pro_id);
    };
    //数组去重
    AddProductComponent.prototype.uniq = function (array) {
        var temp = [];
        var index = [];
        var l = array.length;
        for (var i = 0; i < l; i++) {
            for (var j = i + 1; j < l; j++) {
                if (array[i] === array[j]) {
                    i++;
                    j = i;
                }
            }
            temp.push(array[i]);
            index.push(i);
        }
        console.log(index);
        return temp;
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/pages/product/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.scss */ "./src/app/pages/product/add-product/add-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_2__["ResetHttpService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__["UrlServeService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/edit-product/edit-product.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/edit-product/edit-product.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\"  style=\"max-width: 800px;\">\r\n  <nz-form-item *ngIf=\"type != 'b' && nzOptions\">\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>分类所属</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-cascader\r\n        formControlName=\"classify\"\r\n        nzChangeOnSelect\r\n        [nzOptions]=\"nzOptions\"\r\n        [(ngModel)]=\"values\"\r\n        (ngModelChange)=\"onChanges($event)\">\r\n      </nz-cascader>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品分类名称</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <input nz-input formControlName=\"proName\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('proName').dirty && validateForm.get('proName').errors\">请填写商品分类名称！</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>分类图片</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload class=\"avatar-uploader\"\r\n                 [nzAction]=\"imgUrl\"\r\n                 nzListType=\"picture-card\"\r\n                 [nzShowUploadList]=\"false\"\r\n                 [nzShowButton]=\"true\"\r\n                 [nzBeforeUpload]=\"beforeUpload\"\r\n                 (nzChange)=\"handleChange($event)\">\r\n        <ng-container *ngIf=\"!avatarBiglUrl\">\r\n          <i class=\"ico ico_plus\"></i>\r\n          <div class=\"ant-upload-text\">Upload</div>\r\n        </ng-container>\r\n        <img *ngIf=\"avatarBiglUrl\" [src]=\"avatarBiglUrl\" class=\"avatar\">\r\n      </nz-upload>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <p style=\"color:#ff9a91;font-size:12px;text-align: center;margin-top: -24px;\">图片只能上传格式\"image/jpg和image/png\",大小限制为2mb</p>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>排序</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <input nz-input formControlName=\"proSort\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('proSort').dirty && validateForm.get('proSort').errors\">请填写排序！</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"primary\" (click)=\"submitForm($event,validateForm.value)\" style=\"margin-right: 15px;\">保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/product/edit-product/edit-product.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/edit-product/edit-product.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/product/edit-product/edit-product.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/product/edit-product/edit-product.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(util, fb, http, router, url, msg) {
        var _this = this;
        this.util = util;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.url = url;
        this.msg = msg;
        this.patt = /\w{6,12}/;
        this.smallImg = '';
        this.imgUrl = this.url.commentBaseUrl + this.url.imgUpLoad;
        this.values = null;
        //提交
        this.submitForm = function ($event, value) {
            $event.preventDefault();
            if (_this.type != 'b') {
                for (var key in _this.validateForm.controls) {
                    _this.validateForm.controls[key].markAsDirty();
                    _this.validateForm.controls[key].updateValueAndValidity();
                }
                if (!_this.validateForm.valid) {
                    return;
                }
            }
            else {
                _this.validateForm.controls['proName'].markAsDirty();
                _this.validateForm.controls['proName'].updateValueAndValidity();
                _this.validateForm.controls['proSort'].markAsDirty();
                _this.validateForm.controls['proSort'].updateValueAndValidity();
                if (_this.validateForm.controls['proSort'].invalid || _this.validateForm.controls['proName'].invalid)
                    return;
            }
            if (!_this.smallImg) {
                _this.msg.error('请上传图片！');
                return;
            }
            if (_this.type == 'b') {
                _this.firstClassify();
            }
            else if (_this.type == 'm') {
                _this.secondClassify();
            }
            else {
                _this.threeClassify();
            }
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
        this.initForm();
    }
    EditProductComponent.prototype.ngOnInit = function () {
        if (this.type != 'b') {
            this.life = true;
        }
        this.getClassfy();
    };
    EditProductComponent.prototype.initForm = function () {
        this.validateForm = this.fb.group({
            proName: [{ value: '', disabled: this.life }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            proSort: [{ value: '', disabled: this.life }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            classify: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    //获取分类
    EditProductComponent.prototype.getClassfy = function () {
        var _this = this;
        this.http.get(this.url.productTypeList, {
            page: '',
            rows: '',
            status: '',
            name: ''
        }, function (data) {
            console.log(data);
            if (data.code == '001000') {
                _this.editData(data.response);
                if (_this.type == 'm') {
                    _this.getFirst(_this.newData);
                }
                else if (_this.type == 's') {
                    _this.getSecond(_this.newData);
                }
                _this.nzOptions = _this.newData;
                console.log(_this.nzOptions);
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //大分类
    EditProductComponent.prototype.firstClassify = function () {
        var _this = this;
        this.http.get(this.url.addProductType, {
            name: this.validateForm.controls['proName'].value,
            sort: this.validateForm.controls['proSort'].value,
            first_type_id: '0',
            second_type_id: '',
            third_type_id: '',
            picture: this.smallImg,
            pid: '0'
        }, function (data) {
            console.log(data);
            if (data.code == '001000') {
                _this.msg.success('添加成功！！');
                history.back();
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //二级分类
    EditProductComponent.prototype.secondClassify = function () {
        var _this = this;
        if (!this.productId) {
            return;
        }
        this.http.get(this.url.addProductType, {
            name: this.validateForm.controls['proName'].value,
            sort: this.validateForm.controls['proSort'].value,
            first_type_id: this.productId[0],
            second_type_id: '0',
            third_type_id: '',
            picture: this.smallImg,
            pid: this.productId[0]
        }, function (data) {
            console.log(data);
            if (data.code == '001000') {
                _this.msg.success('添加成功！！');
                history.back();
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //三级分类
    EditProductComponent.prototype.threeClassify = function () {
        var _this = this;
        this.http.get(this.url.addProductType, {
            name: this.validateForm.controls['proName'].value,
            sort: this.validateForm.controls['proSort'].value,
            first_type_id: this.productId[0],
            second_type_id: this.productId[1],
            third_type_id: '0',
            picture: this.smallImg,
            pid: this.productId[1]
        }, function (data) {
            console.log(data);
            if (data.code == '001000') {
                _this.msg.success('添加成功！！');
                history.back();
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //取消
    EditProductComponent.prototype.cancleForm = function (e) {
        history.back();
    };
    //上传图片
    EditProductComponent.prototype.beforeUpload = function (file) {
        var isJPG = file.type === 'image/jpeg';
        var isPng = file.type === 'image/png';
        if (!(isPng || isJPG)) {
            this.msg.error('只允许上传JPG 或者 PNG格式的图片');
        }
        var isLt2M = file.size / 1024 / 1024 < 1;
        if (!isLt2M) {
            this.msg.error('大小不能超过2MB!');
        }
        return (isJPG || isPng) && isLt2M;
    };
    EditProductComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    EditProductComponent.prototype.handleChange = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.smallImg = info.file.response.response.filePath;
            }
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                console.log(img);
                _this.loading = false;
                _this.avatarBiglUrl = img;
            });
        }
    };
    //处理分类所属
    EditProductComponent.prototype.onChanges = function (values) {
        this.productId = values;
        if (values && this.life) {
            this.life = false;
            // this.initForm();
        }
    };
    //转换当前的数据
    EditProductComponent.prototype.editData = function (data) {
        for (var item in data) {
            data[item]['label'] = data[item]['name'];
            data[item]['value'] = data[item]['product_type_id'];
            if (data[item]['children']) {
                for (var itemj in data[item]['children']) {
                    data[item]['children'][itemj]['label'] = data[item]['children'][itemj]['name'];
                    data[item]['children'][itemj]['value'] = data[item]['children'][itemj]['product_type_id'];
                    if (data[item]['children'][itemj]['children']) {
                        for (var iteml in data[item]['children'][itemj]['children']) {
                            data[item]['children'][itemj]['children'][iteml]['label'] = data[item]['children'][itemj]['children'][iteml]['name'];
                            data[item]['children'][itemj]['children'][iteml]['value'] = data[item]['children'][itemj]['children'][iteml]['product_type_id'];
                            data[item]['children'][itemj]['children'][iteml]['isLeaf'] = true;
                        }
                    }
                    else {
                        data[item]['children'][itemj]['isLeaf'] = true;
                    }
                }
            }
            else {
                data[item]['isLeaf'] = true;
            }
        }
        this.newData = data;
    };
    //获取一级
    EditProductComponent.prototype.getFirst = function (data) {
        for (var item in data) {
            if (data[item]['children']) {
                delete data[item]['children'];
                data[item]['isLeaf'] = true;
            }
        }
        this.newData = data;
    };
    //获取二级
    EditProductComponent.prototype.getSecond = function (data) {
        debugger;
        for (var item in data) {
            if (data[item]['children']) {
                for (var itemi in data[item]['children']) {
                    if (data[item]['children'][itemi]['children']) {
                        delete data[item]['children'][itemi]['children'];
                        data[item]['children'][itemi]['isLeaf'] = true;
                    }
                }
            }
            else {
                data.splice(item, 1);
                this.getSecond(data);
            }
        }
        this.newData = data;
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/pages/product/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/pages/product/edit-product/edit-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__["UtilServeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__["UrlServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/modal-classify-product/modal-classify-product.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/product/modal-classify-product/modal-classify-product.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\"  style=\"max-width: 800px;\">\r\n  <nz-form-item *ngIf=\"type != 'b' && nzOptions\">\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>分类所属</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-cascader\r\n        formControlName=\"classify\"\r\n        nzChangeOnSelect\r\n        [nzOptions]=\"nzOptions\"\r\n        [(ngModel)]=\"values\"\r\n        (ngModelChange)=\"onChanges($event)\">\r\n      </nz-cascader>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品分类名称</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <input nz-input formControlName=\"proName\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('proName').dirty && validateForm.get('proName').errors\">请填写商品分类名称！</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>分类图片</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload class=\"avatar-uploader\"\r\n                 [nzAction]=\"imgUrl\"\r\n                 nzListType=\"picture-card\"\r\n                 [nzShowUploadList]=\"false\"\r\n                 [nzShowButton]=\"true\"\r\n                 [nzBeforeUpload]=\"beforeUpload\"\r\n                 (nzChange)=\"handleChange($event)\">\r\n        <ng-container *ngIf=\"!avatarBiglUrl\">\r\n          <i class=\"ico ico_plus\"></i>\r\n          <div class=\"ant-upload-text\">Upload</div>\r\n        </ng-container>\r\n        <img *ngIf=\"avatarBiglUrl\" [src]=\"avatarBiglUrl\" class=\"avatar\">\r\n      </nz-upload>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <p style=\"color:#ff9a91;font-size:12px;text-align: center;margin-top: -24px;\">图片只能上传格式\"image/jpg和image/png\",大小限制为2mb</p>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>排序</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <input nz-input formControlName=\"proSort\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('proSort').dirty && validateForm.get('proSort').errors\">请填写排序！</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"primary\" (click)=\"submitForm($event,validateForm.value)\" style=\"margin-right: 15px;\">保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/product/modal-classify-product/modal-classify-product.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/product/modal-classify-product/modal-classify-product.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbW9kYWwtY2xhc3NpZnktcHJvZHVjdC9tb2RhbC1jbGFzc2lmeS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/product/modal-classify-product/modal-classify-product.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/product/modal-classify-product/modal-classify-product.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ModalClassifyProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClassifyProductComponent", function() { return ModalClassifyProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalClassifyProductComponent = /** @class */ (function () {
    function ModalClassifyProductComponent(modal, util, fb, http, router, url, msg) {
        var _this = this;
        this.modal = modal;
        this.util = util;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.url = url;
        this.msg = msg;
        this.patt = /\w{6,12}/;
        this.smallImg = '';
        this.imgUrl = this.url.commentBaseUrl + this.url.imgUpLoad;
        this.values = null;
        //提交
        this.submitForm = function ($event, value) {
            $event.preventDefault();
            if (_this.type != 'b') {
                for (var key in _this.validateForm.controls) {
                    _this.validateForm.controls[key].markAsDirty();
                    _this.validateForm.controls[key].updateValueAndValidity();
                }
                if (!_this.validateForm.valid) {
                    return;
                }
            }
            else {
                _this.validateForm.controls['proName'].markAsDirty();
                _this.validateForm.controls['proName'].updateValueAndValidity();
                _this.validateForm.controls['proSort'].markAsDirty();
                _this.validateForm.controls['proSort'].updateValueAndValidity();
                if (_this.validateForm.controls['proSort'].invalid || _this.validateForm.controls['proName'].invalid)
                    return;
            }
            if (!_this.smallImg) {
                _this.msg.error('请上传图片！');
                return;
            }
            if (_this.type == 'b') {
                _this.firstClassify();
            }
            else if (_this.type == 'm') {
                _this.secondClassify();
            }
            else {
                _this.threeClassify();
            }
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
        this.initForm();
    }
    ModalClassifyProductComponent.prototype.ngOnInit = function () {
        this.type = this.modal.getContentComponent()['0'];
        if (this.type != 'b') {
            this.life = true;
        }
        this.getClassfy();
    };
    ModalClassifyProductComponent.prototype.initForm = function () {
        this.validateForm = this.fb.group({
            proName: [{ value: '', disabled: this.life }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            proSort: [{ value: '', disabled: this.life }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            classify: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    //获取分类
    ModalClassifyProductComponent.prototype.getClassfy = function () {
        var _this = this;
        this.http.get(this.url.productTypeList, {
            page: '',
            rows: '',
            status: '',
            name: ''
        }, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.editData(data.response);
                if (_this.type == 'm') {
                    _this.getFirst(_this.newData);
                }
                else if (_this.type == 's') {
                    _this.getSecond(_this.newData);
                }
                _this.nzOptions = _this.newData;
                console.log(_this.nzOptions);
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //大分类
    ModalClassifyProductComponent.prototype.firstClassify = function () {
        var _this = this;
        this.http.get(this.url.addProductType, {
            name: this.validateForm.controls['proName'].value,
            sort: this.validateForm.controls['proSort'].value,
            first_type_id: '0',
            second_type_id: '',
            third_type_id: '',
            picture: this.smallImg,
            pid: '0'
        }, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.msg.success('添加成功！！');
                _this.modal.destroy('success');
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //二级分类
    ModalClassifyProductComponent.prototype.secondClassify = function () {
        var _this = this;
        if (!this.productId) {
            return;
        }
        this.http.get(this.url.addProductType, {
            name: this.validateForm.controls['proName'].value,
            sort: this.validateForm.controls['proSort'].value,
            first_type_id: this.productId[0],
            second_type_id: '0',
            third_type_id: '',
            picture: this.smallImg,
            pid: this.productId[0]
        }, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.msg.success('添加成功！！');
                _this.modal.destroy('success');
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //三级分类
    ModalClassifyProductComponent.prototype.threeClassify = function () {
        var _this = this;
        this.http.get(this.url.addProductType, {
            name: this.validateForm.controls['proName'].value,
            sort: this.validateForm.controls['proSort'].value,
            first_type_id: this.productId[0],
            second_type_id: this.productId[1],
            third_type_id: '0',
            picture: this.smallImg,
            pid: this.productId[1]
        }, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.msg.success('添加成功！！');
                _this.modal.destroy('success');
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //取消
    ModalClassifyProductComponent.prototype.cancleForm = function (e) {
        this.modal.destroy();
    };
    //上传图片
    ModalClassifyProductComponent.prototype.beforeUpload = function (file) {
        var isJPG = file.type === 'image/jpeg';
        var isPng = file.type === 'image/png';
        if (!(isPng || isJPG)) {
            this.msg.error('只允许上传JPG 或者 PNG格式的图片');
        }
        var isLt2M = file.size / 1024 / 1024 < 1;
        if (!isLt2M) {
            this.msg.error('大小不能超过2MB!');
        }
        return (isJPG || isPng) && isLt2M;
    };
    ModalClassifyProductComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    ModalClassifyProductComponent.prototype.handleChange = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.smallImg = info.file.response.response.filePath;
            }
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                console.log(img);
                _this.loading = false;
                _this.avatarBiglUrl = img;
            });
        }
    };
    //处理分类所属
    ModalClassifyProductComponent.prototype.onChanges = function (values) {
        this.productId = values;
        if (values && this.life) {
            this.life = false;
            // this.initForm();
        }
    };
    //转换当前的数据
    ModalClassifyProductComponent.prototype.editData = function (data) {
        for (var item in data) {
            data[item]['label'] = data[item]['name'];
            data[item]['value'] = data[item]['product_type_id'];
            if (data[item]['children']) {
                for (var itemj in data[item]['children']) {
                    data[item]['children'][itemj]['label'] = data[item]['children'][itemj]['name'];
                    data[item]['children'][itemj]['value'] = data[item]['children'][itemj]['product_type_id'];
                    if (data[item]['children'][itemj]['children']) {
                        for (var iteml in data[item]['children'][itemj]['children']) {
                            data[item]['children'][itemj]['children'][iteml]['label'] = data[item]['children'][itemj]['children'][iteml]['name'];
                            data[item]['children'][itemj]['children'][iteml]['value'] = data[item]['children'][itemj]['children'][iteml]['product_type_id'];
                            data[item]['children'][itemj]['children'][iteml]['isLeaf'] = true;
                        }
                    }
                    else {
                        data[item]['children'][itemj]['isLeaf'] = true;
                    }
                }
            }
            else {
                data[item]['isLeaf'] = true;
            }
        }
        this.newData = data;
    };
    //获取一级
    ModalClassifyProductComponent.prototype.getFirst = function (data) {
        for (var item in data) {
            if (data[item]['children']) {
                delete data[item]['children'];
                data[item]['isLeaf'] = true;
            }
        }
        this.newData = data;
    };
    //获取二级
    ModalClassifyProductComponent.prototype.getSecond = function (data) {
        for (var item in data) {
            if (data[item]['children']) {
                for (var itemi in data[item]['children']) {
                    if (data[item]['children'][itemi]['children']) {
                        delete data[item]['children'][itemi]['children'];
                        data[item]['children'][itemi]['isLeaf'] = true;
                    }
                }
            }
            else {
                data.splice(item, 1);
                this.getSecond(data);
            }
        }
        this.newData = data;
    };
    ModalClassifyProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-classify-product',
            template: __webpack_require__(/*! ./modal-classify-product.component.html */ "./src/app/pages/product/modal-classify-product/modal-classify-product.component.html"),
            styles: [__webpack_require__(/*! ./modal-classify-product.component.scss */ "./src/app/pages/product/modal-classify-product/modal-classify-product.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"], _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_4__["UtilServeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_6__["ResetHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__["UrlServeService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], ModalClassifyProductComponent);
    return ModalClassifyProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product-list-edit/product-list-edit.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/product/product-list-edit/product-list-edit.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form nz-form [formGroup]=\"validateForm\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品货号：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <p>{{params.product_id}}</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品名称：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_name\" placeholder=\"\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_name').dirty && validateForm.get('pro_name').errors\">\r\n        请输入商品名称！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品所属分类：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select style=\"width: 31%;margin-right: 3%;\" [(ngModel)]=\"selectedFirst\" (ngModelChange)=\"firstChange($event)\" formControlName='selectF' nzPlaceHolder=\"请选择一级\">\r\n        <nz-option *ngFor=\"let p of firstData\" [nzValue]=\"p.product_type_id\" [nzLabel]=\"p.name\"></nz-option>\r\n      </nz-select>\r\n      <nz-select style=\"width: 31%;margin-right: 3%;\" [nzAllowClear]=\"true\" [(ngModel)]=\"selectedTwo\" nzPlaceHolder=\"请选择二级\" (ngModelChange)=\"twoChange($event)\" formControlName='selectT'>\r\n        <nz-option *ngFor=\"let c of twoData\" [nzLabel]=\"c.name\" [nzValue]=\"c.product_type_id\"></nz-option>\r\n      </nz-select>\r\n      <nz-select style=\"width: 31%;\" [nzAllowClear]=\"true\" [(ngModel)]=\"selectedThree\" nzPlaceHolder=\"请选择三级\" (ngModelChange)=\"threeChange($event)\" formControlName='selectThr'>\r\n        <nz-option *ngFor=\"let c of threeData\" [nzLabel]=\"c.name\" [nzValue]=\"c.product_type_id\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('selectF').dirty && validateForm.get('selectF').errors&&validateForm.get('selectT').dirty && validateForm.get('selectT').errors&& validateForm.get('selectThr').dirty && validateForm.get('selectThr').errors\">\r\n        请填写分类\r\n      </nz-form-explain>\r\n\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>产品类型：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select formControlName=\"pro_type\" nzPlaceHolder=\"请选择产品类型\">\r\n        <nz-option nzValue=\"service\" nzLabel=\"服务\"></nz-option>\r\n        <nz-option nzValue=\"'product'\" nzLabel=\"实物\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_type').dirty && validateForm.get('pro_type').errors\">请选择产品类型</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>供应商：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-select formControlName=\"supplyer\" nzPlaceHolder=\"请选择\">\r\n        <nz-option nzValue=\"西安\" nzLabel=\"0\" checked></nz-option>\r\n        <nz-option nzValue=\"西安\" nzLabel=\"1\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('supplyer').dirty && validateForm.get('supplyer').errors\">请选择供应商</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品进价：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_price\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">元</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_price').dirty && validateForm.get('pro_price').errors\">\r\n        请输入商品进价！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>利润率：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_profits\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">%</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_profits').dirty && validateForm.get('pro_profits').errors\">\r\n        请输入利润率！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品单价：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_sig_price\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">元</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_sig_price').dirty && validateForm.get('pro_sig_price').errors\">\r\n        请输入商品单价！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品VIP价：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"pro_vip\" placeholder=\"\" type=\"text\"><b style=\"position: absolute;right: -20px;\">元</b>\r\n      <nz-form-explain *ngIf=\"validateForm.get('pro_vip').dirty && validateForm.get('pro_vip').errors\">\r\n        请输入商品VIP价！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>库存量：</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\r\n      <input nz-input formControlName=\"inventory\" placeholder=\"\" type=\"text\">\r\n      <nz-form-explain *ngIf=\"validateForm.get('inventory').dirty && validateForm.get('inventory').errors\">\r\n        请输入库存量！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品列表方图</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload class=\"avatar-uploader\"\r\n                 [nzAction]=\"imgUrl\"\r\n                 nzListType=\"picture-card\"\r\n                 [nzShowUploadList]=\"false\"\r\n                 [nzShowButton]=\"true\"\r\n                 [nzBeforeUpload]=\"beforeUploadSmall\"\r\n                 (nzChange)=\"handleChangeSmall($event)\">\r\n        <ng-container *ngIf=\"!avatarSmallUrl\">\r\n          <i class=\"ico ico_plus\"></i>\r\n          <div class=\"ant-upload-text\">Upload</div>\r\n        </ng-container>\r\n        <img *ngIf=\"avatarSmallUrl\" [src]=\"avatarSmallUrl\" class=\"avatar\">\r\n      </nz-upload>\r\n      <p style=\"color:#ff9a91\">图片只能上传格式\"image/jpg和image/png\",大小限制为100*100</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品详情轮播图</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-upload\r\n        [nzAction]=\"imgUrl\"\r\n        nzListType=\"picture-card\"\r\n        [(nzFileList)]=\"fileList\"\r\n        [nzShowButton]=\"fileList.length < 5\"\r\n        [nzPreview]=\"handlePreview\"\r\n        (nzChange)=\"handleMore($event)\"\r\n        [nzRemove]=\"deleImg\"\r\n      >\r\n        <i nz-icon type=\"plus\"></i>\r\n        <div class=\"ant-upload-text\">Upload</div>\r\n      </nz-upload>\r\n      <nz-modal [nzVisible]=\"previewVisible\" [nzContent]=\"modalContent\" [nzFooter]=\"null\" (nzOnCancel)=\"previewVisible=false\">\r\n        <ng-template #modalContent>\r\n          <img [src]=\"previewImage\" [ngStyle]=\"{ 'width': '100%' }\" />\r\n        </ng-template>\r\n      </nz-modal>\r\n      <p style=\"color:#ff9a91\">图片只能上传格式\"image/jpg和image/png \",大小限制为100*100,最多五个</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>商品详情</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <div id=\"edit\">\r\n\r\n      </div>\r\n      <p style=\"color: red;margin-bottom: 0\" *ngIf=\"life\">请输入内容</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"7\" nzRequired>推荐到首页</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <nz-radio-group [(ngModel)]=\"radioValue\" formControlName=\"isable\">\r\n        <label nz-radio nzValue=\"Y\">是</label>\r\n        <label nz-radio nzValue=\"N\">否</label>\r\n      </nz-radio-group>\r\n      <nz-form-explain *ngIf=\"validateForm.get('isable').dirty && validateForm.get('isable').errors\">\r\n        请选择！\r\n      </nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\r\n      <button style=\"margin-right: 20px;\" nz-button nzType=\"primary\" (click)=\"submitForm($event,validateForm.value)\">保存</button>\r\n      <button nz-button (click)=\"cancleForm($event)\">取消</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/product/product-list-edit/product-list-edit.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/product/product-list-edit/product-list-edit.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1saXN0LWVkaXQvcHJvZHVjdC1saXN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/product/product-list-edit/product-list-edit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/product/product-list-edit/product-list-edit.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductListEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListEditComponent", function() { return ProductListEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
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






var E = __webpack_require__(/*! wangeditor */ "./node_modules/wangeditor/release/wangEditor.js");
var ProductListEditComponent = /** @class */ (function () {
    function ProductListEditComponent(route, fb, http, msg, url) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.http = http;
        this.msg = msg;
        this.url = url;
        this.loading = false;
        this.life = false;
        this.pro_id = [];
        this.allPicUrl = [];
        this.num = 0;
        //多图上传
        this.fileList = [];
        this.previewImage = '';
        this.previewVisible = false;
        //提交
        this.submitForm = function ($event, value) {
            $event.preventDefault();
            for (var key in _this.validateForm.controls) {
                _this.validateForm.controls[key].markAsDirty();
                _this.validateForm.controls[key].updateValueAndValidity();
            }
            if (!_this.validateForm.valid)
                return;
            if (!_this.smallImg || _this.fileList.length <= 0) {
                _this.allPicUrl = [];
                _this.msg.error('请上传图片！');
                return;
            }
            var content = _this.edit.txt.html();
            if (content === '<p><br></p>') {
                console.log(12);
                _this.life = true;
                return;
            }
            else {
                _this.life = false;
            }
            if (_this.pro_id.length < 0) {
                _this.msg.error('请选择分类！');
                return;
            }
            _this.http.get(_this.url.updateProduct, {
                id: _this.params.id,
                name: _this.validateForm.controls['pro_name'].value,
                first_type_id: _this.pro_id[0],
                second_type_id: _this.pro_id[1],
                third_type_id: _this.pro_id[2],
                support_id: _this.validateForm.controls['supplyer'].value,
                cost_price: _this.validateForm.controls['pro_price'].value,
                sell_price: _this.validateForm.controls['pro_sig_price'].value,
                profit_rate: _this.validateForm.controls['pro_profits'].value,
                vip_sell_price: _this.validateForm.controls['pro_vip'].value,
                stock_quantity: _this.validateForm.controls['inventory'].value,
                big_picture: _this.smallImg,
                small_picture: _this.allPicUrl.join(','),
                is_home_page: _this.validateForm.controls['isable'].value,
                content: content,
                type: _this.validateForm.controls['pro_type'].value
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.msg.success('修改成功！');
                    history.back();
                }
                else {
                    _this.msg.error(data.message);
                }
            }, function (err) {
                _this.msg.error(err);
            });
        };
        //上传图片
        this.beforeUploadSmall = function (file) {
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
        //多图上传
        this.handlePreview = function (file) {
            _this.previewImage = file.url || file.thumbUrl;
            _this.previewVisible = true;
        };
        this.validateForm = this.fb.group({
            pro_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            supplyer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pro_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pro_profits: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pro_sig_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pro_vip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            inventory: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            selectT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            selectF: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            selectThr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pro_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.imgUrl = this.url.commentBaseUrl + this.url.imgUpLoad;
    }
    ProductListEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 创建编辑器
        this.edit = new E('#edit');
        this.edit.create();
        this.getClassify();
        this.route.queryParams.subscribe(function (data) {
            _this.params = JSON.parse(data.data).data;
            _this.validateForm.controls['pro_name'].setValue(_this.params.name);
            _this.validateForm.controls['supplyer'].setValue('西安');
            _this.validateForm.controls['pro_price'].setValue(_this.params.cost_price);
            _this.validateForm.controls['pro_profits'].setValue(_this.params.profit_rate * 100);
            _this.validateForm.controls['pro_sig_price'].setValue(_this.params.sell_price);
            _this.validateForm.controls['inventory'].setValue(_this.params.stock_quantity);
            _this.radioValue = _this.params.is_home_page;
            _this.validateForm.controls['pro_type'].setValue(_this.params.type);
            _this.validateForm.controls['pro_vip'].setValue(_this.params.vip_sell_price);
            _this.avatarSmallUrl = _this.params.big_picture;
            _this.smallImg = _this.params.big_picture;
            _this.edit.txt.html(_this.params.content);
            var fileList = _this.params.small_picture.split(',');
            fileList.forEach(function (v, k) {
                var obj = {};
                obj['url'] = v;
                obj['uid'] = -k;
                obj['name'] = k;
                obj['status'] = 'done';
                _this.fileList.push(obj);
            });
            _this.allPicUrl = _this.params.small_picture.split(',');
            console.log(_this.allPicUrl, _this.fileList);
        });
    };
    //获取产品分类
    ProductListEditComponent.prototype.getClassify = function () {
        var _this = this;
        this.http.get(this.url.productTypeList, {}, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.firstData = data.response;
                _this.selectedFirst = _this.params.first_type_id;
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //取消
    ProductListEditComponent.prototype.cancleForm = function (e) {
        history.back();
    };
    ProductListEditComponent.prototype.getBase64 = function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    };
    ProductListEditComponent.prototype.handleChangeSmall = function (info) {
        var _this = this;
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.smallImg = info.file.response.response.filePath;
            }
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, function (img) {
                console.log(img);
                _this.loading = false;
                _this.avatarSmallUrl = img;
            });
        }
    };
    ProductListEditComponent.prototype.handleMore = function (info) {
        if (info.file.status === 'done') {
            if (info.file.response.code == '001000') {
                this.allPicUrl.push(info.file.response.response.filePath);
            }
        }
    };
    ProductListEditComponent.prototype.deleImg = function (file) {
        return false;
    };
    //三级
    ProductListEditComponent.prototype.firstChange = function ($event) {
        var _this = this;
        this.selectedTwo = null;
        if ($event) {
            this.pro_id = [];
            this.firstData.forEach(function (v, k) {
                if (v['product_type_id'] == $event) {
                    _this.twoData = v['children'];
                }
            });
            this.pro_id.push($event);
        }
        this.num++;
    };
    ProductListEditComponent.prototype.twoChange = function ($event) {
        var _this = this;
        this.selectedThree = null;
        if (this.num <= 2) {
            $event = this.params.second_type_id;
            this.selectedTwo = this.params.second_type_id;
            this.selectedThree = this.params.third_type_id;
        }
        if ($event && this.twoData) {
            this.twoData.forEach(function (v, k) {
                if (v['product_type_id'] == $event) {
                    _this.threeData = v['children'];
                }
            });
            this.pro_id.push($event);
        }
    };
    ProductListEditComponent.prototype.threeChange = function ($event) {
        if (this.num <= 2) {
            $event = this.params.third_type_id;
            this.selectedThree = this.params.third_type_id;
        }
        if ($event) {
            this.pro_id.push($event);
        }
        this.pro_id = this.uniq(this.pro_id);
        console.log(this.pro_id);
    };
    //数组去重
    ProductListEditComponent.prototype.uniq = function (array) {
        var temp = [];
        var index = [];
        var l = array.length;
        for (var i = 0; i < l; i++) {
            for (var j = i + 1; j < l; j++) {
                if (array[i] === array[j]) {
                    i++;
                    j = i;
                }
            }
            temp.push(array[i]);
            index.push(i);
        }
        return temp;
    };
    ProductListEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list-edit',
            template: __webpack_require__(/*! ./product-list-edit.component.html */ "./src/app/pages/product/product-list-edit/product-list-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-list-edit.component.scss */ "./src/app/pages/product/product-list-edit/product-list-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__["ResetHttpService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"], _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_4__["UrlServeService"]])
    ], ProductListEditComponent);
    return ProductListEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product-list/product-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"primary\" (click)=\"goPager({url:'/product'})\" style=\"margin-bottom: 20px;\">跳转到商品管理</button>\r\n<button nz-button nzType=\"primary\" (click)=\"goPager({url:'/product/add-product'})\" style=\"margin-bottom: 20px;\" class=\"right_btn\">添加商品</button>\r\n<form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" style=\"display:flex;justify-content:flex-end;\">\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select style=\"margin-right: 15px;\"  [(ngModel)]=\"selectedFirst\" (ngModelChange)=\"firstChange($event)\" formControlName='selectF' nzPlaceHolder=\"请选择一级\">\r\n        <nz-option *ngFor=\"let p of firstData\" [nzValue]=\"p.product_type_id\" [nzLabel]=\"p.name\"></nz-option>\r\n      </nz-select>\r\n      <nz-select  style=\"margin-right: 15px;\" [nzAllowClear]=\"true\" [(ngModel)]=\"selectedTwo\" nzPlaceHolder=\"请选择二级\" (ngModelChange)=\"twoChange($event)\" formControlName='selectT'>\r\n        <nz-option *ngFor=\"let c of twoData\" [nzLabel]=\"c.name\" [nzValue]=\"c.product_type_id\"></nz-option>\r\n      </nz-select>\r\n      <nz-select [nzAllowClear]=\"true\" [(ngModel)]=\"selectedThree\" nzPlaceHolder=\"请选择三级\" (ngModelChange)=\"threeChange($event)\" formControlName='selectThr'>\r\n        <nz-option *ngFor=\"let c of threeData\" [nzLabel]=\"c.name\" [nzValue]=\"c.product_type_id\"></nz-option>\r\n      </nz-select>\r\n      <nz-form-explain *ngIf=\"validateForm.get('selectF').dirty && validateForm.get('selectF').errors&&validateForm.get('selectT').dirty && validateForm.get('selectT').errors&& validateForm.get('selectThr').dirty && validateForm.get('selectThr').errors\">\r\n        请选择分类！\r\n      </nz-form-explain>\r\n\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"state\" nzAllowClear nzPlaceHolder=\"选择上架状态\" name=\"state\">\r\n        <nz-option nzValue=\"Y\" nzLabel=\"上架\"></nz-option>\r\n        <nz-option nzValue=\"N\" nzLabel=\"已下架\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <input type=\"text\" formControlName=\"name\" nz-input name=\"name\"  placeholder=\"请输入商品案例名称\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <button nz-button nzType=\"primary\" (click)=\"searchMore()\">搜索</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n<nz-table\r\n  #rowSelectionTable\r\n  [nzData]=\"data\"\r\n  (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\r\n  (nzPageIndexChange)=\"refreshStatus()\"\r\n  (nzPageSizeChange)=\"refreshStatus()\"\r\n  nzBordered=\"false\"\r\n  nzPageSize=\"10\"\r\n  nzShowSizeChanger = 'true'\r\n  [nzLoading]=\"isloading\"\r\n>\r\n  <thead>\r\n  <tr>\r\n    <th nzShowCheckbox [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\" (nzCheckedChange)=\"checkAll($event)\"></th>\r\n    <th>商品ID</th>\r\n    <th>商品小分类</th>\r\n    <th>商品名称</th>\r\n    <th>是否推荐到首页</th>\r\n    <th>上架状态</th>\r\n    <th>上架时间</th>\r\n    <th>操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n    <td nzShowCheckbox [(nzChecked)]=\"data.checked\" [nzDisabled]=\"data.disabled\" (nzCheckedChange)=\"refreshStatus()\"></td>\r\n    <td>{{data.product_id}}</td>\r\n    <td>{{data.product_type_name}}</td>\r\n    <td>{{data.name}}</td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.is_home_page\" style=\"cursor:pointer\">\r\n        <div *ngSwitchCase=\"'Y'\" style=\"color:green\" (click)=\"updataIsHome(data,'N')\">是 <button nz-button [nzSize]=\"'small'\" nzType=\"default\">修改</button></div>\r\n        <div *ngSwitchCase=\"'N'\" style=\"color:red\" (click)=\"updataIsHome(data,'Y')\">否 <button nz-button [nzSize]=\"'small'\" nzType=\"default\">修改</button></div>\r\n      </div>\r\n    </td>\r\n    <td>\r\n      <div [ngSwitch]=\"data.status\">\r\n        <div *ngSwitchCase=\"'Y'\" style=\"color:green\">已上架</div>\r\n        <div *ngSwitchCase=\"'N'\" style=\"color:red\">已下架</div>\r\n      </div>\r\n    </td>\r\n    <td>{{data.create_time}}</td>\r\n    <td>\r\n      <button nz-button nzType=\"default\" (click)=\"goPager({url:'/product/view-product',data:{id:data.id,allId:allId}})\" >查看</button>\r\n      <button nz-button nzType=\"default\" (click)=\"goPager({url:'/product/edit-product',data:{data:data}})\" >修改</button>\r\n      <div [ngSwitch]=\"data.status\" style=\"display: inline-block\">\r\n        <div *ngSwitchCase=\"'Y'\"><button nz-button nzType=\"default\" (click)=\"isEnable(data,'N')\" >下架</button></div>\r\n        <div *ngSwitchCase=\"'N'\"><button nz-button nzType=\"default\" (click)=\"isEnable(data,'Y')\">上架</button></div>\r\n      </div>\r\n      <button nz-button nzType=\"default\" (click)=\"deleModal(data)\" >删除</button>\r\n\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</nz-table>\r\n<div class=\"allSelec\" style=\"margin-top: -50px;\">\r\n  <nz-select style=\"width: 120px;margin-right: 20px;\" [(ngModel)]=\"allSelecValue\" nzAllowClear nzPlaceHolder=\"批量操作\">\r\n    <nz-option nzValue=\"s\" nzLabel=\"上架\"></nz-option>\r\n    <nz-option nzValue=\"x\" nzLabel=\"下架\"></nz-option>\r\n  </nz-select>\r\n  <button nz-button nzType=\"primary\" (click)=\"moreUpdate()\">确认</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/product/product-list/product-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep form .ant-select {\n  max-width: 200px !important;\n  width: 200px; }\n\n:host ::ng-deep .editable-cell {\n  position: relative; }\n\n:host ::ng-deep .editable-cell-input-wrapper,\n:host ::ng-deep .editable-cell-text-wrapper {\n  padding-right: 24px; }\n\n:host ::ng-deep .editable-cell-text-wrapper {\n  padding: 5px 24px 5px 5px; }\n\n:host ::ng-deep .editable-cell-icon,\n:host ::ng-deep .editable-cell-icon-check {\n  position: absolute;\n  right: 0;\n  width: 20px;\n  cursor: pointer; }\n\n:host ::ng-deep .editable-cell-icon {\n  line-height: 18px;\n  display: none; }\n\n:host ::ng-deep .editable-cell-icon-check {\n  line-height: 28px; }\n\n:host ::ng-deep .editable-cell:hover .editable-cell-icon {\n  display: inline-block; }\n\n:host ::ng-deep .editable-cell-icon:hover,\n:host ::ng-deep .editable-cell-icon-check:hover {\n  color: #108ee9; }\n\n:host ::ng-deep .editable-add-btn {\n  margin-bottom: 8px; }\n\n:host ::ng-deep .ant-table {\n  padding-top: 20px; }\n\n:host ::ng-deep .ant-pagination-options {\n  position: absolute;\n  left: 0;\n  top: -35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvSDpcXG5ld1xcanNfcGx1Z2luXFxqaXlpbi9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RcXHByb2R1Y3QtbGlzdFxccHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sNEJBQTBCO0VBQzFCLGFBQVksRUFDYjs7QUFMTDtFQVdNLG1CQUFrQixFQUNuQjs7QUFaTDs7RUFnQk0sb0JBQW1CLEVBQ3BCOztBQWpCTDtFQW9CTSwwQkFBeUIsRUFDMUI7O0FBckJMOztFQXlCTSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFlBQVc7RUFDWCxnQkFBZSxFQUNoQjs7QUE3Qkw7RUFnQ00sa0JBQWlCO0VBQ2pCLGNBQWEsRUFDZDs7QUFsQ0w7RUFxQ00sa0JBQWlCLEVBQ2xCOztBQXRDTDtFQXlDTSxzQkFBcUIsRUFDdEI7O0FBMUNMOztFQThDTSxlQUFjLEVBQ2Y7O0FBL0NMO0VBa0RNLG1CQUFrQixFQUNuQjs7QUFuREw7RUFxRE0sa0JBQWlCLEVBQ2xCOztBQXRETDtFQXdETSxtQkFBa0I7RUFDbEIsUUFBTTtFQUNOLFdBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIDo6bmctZGVlcHtcclxuICAgIGZvcm0gLmFudC1zZWxlY3R7XHJcbiAgICAgIG1heC13aWR0aDogMjAwcHghaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuYW50LWZvcm0taW5saW5lIC5hbnQtZm9ybS1pdGVte1xyXG5cclxuICAgIH1cclxuICAgIC8vICDooajmoLxcclxuICAgIC5lZGl0YWJsZS1jZWxsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1jZWxsLWlucHV0LXdyYXBwZXIsXHJcbiAgICAuZWRpdGFibGUtY2VsbC10ZXh0LXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1jZWxsLXRleHQtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAyNHB4IDVweCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWNlbGwtaWNvbixcclxuICAgIC5lZGl0YWJsZS1jZWxsLWljb24tY2hlY2sge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1jZWxsLWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtY2VsbC1pY29uLWNoZWNrIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRhYmxlLWNlbGw6aG92ZXIgLmVkaXRhYmxlLWNlbGwtaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGFibGUtY2VsbC1pY29uOmhvdmVyLFxyXG4gICAgLmVkaXRhYmxlLWNlbGwtaWNvbi1jaGVjazpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMTA4ZWU5O1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0YWJsZS1hZGQtYnRuIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLmFudC10YWJsZXtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuYW50LXBhZ2luYXRpb24tb3B0aW9uc3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDotMzVweDtcclxuICAgIH1cclxuICAgIC8vICDooajmoLznu5PmnZ9cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/product/product-list/product-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(util, url, http, msg, fb, modal) {
        this.util = util;
        this.url = url;
        this.http = http;
        this.msg = msg;
        this.fb = fb;
        this.modal = modal;
        this.allChecked = false;
        this.indeterminate = false;
        this.displayData = [];
        this.data = [];
        this.pro_id = [];
        this.validateForm = this.fb.group({
            selectT: [],
            selectF: [],
            selectThr: [],
            state: [],
            name: [],
        });
    }
    Object.defineProperty(ProductListComponent.prototype, "name", {
        //获取组件
        get: function () {
            return this.validateForm.controls.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductListComponent.prototype, "state", {
        get: function () {
            return this.validateForm.controls.state;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.ngOnInit = function () {
        this.getData();
        this.getClassify();
    };
    //获取产品列表
    ProductListComponent.prototype.getData = function (name, first, second, three, status) {
        var _this = this;
        if (name === void 0) { name = ''; }
        if (first === void 0) { first = ''; }
        if (second === void 0) { second = ''; }
        if (three === void 0) { three = ''; }
        if (status === void 0) { status = ''; }
        this.http.get(this.url.productList, {
            status: status,
            name: name,
            first_type_id: first,
            second_type_id: second,
            third_type_id: three
        }, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.editData(data.response);
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.currentPageDataChange = function ($event) {
        this.displayData = $event;
        this.refreshStatus();
    };
    ProductListComponent.prototype.refreshStatus = function () {
        var allChecked = this.displayData.filter(function (value) { return !value.disabled; }).every(function (value) { return value.checked === true; });
        var allUnChecked = this.displayData.filter(function (value) { return !value.disabled; }).every(function (value) { return !value.checked; });
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        console.log(this.allChecked);
    };
    ProductListComponent.prototype.checkAll = function (value) {
        this.displayData.forEach(function (data) {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    };
    //搜索
    ProductListComponent.prototype.searchMore = function () {
        this.getData(this.name.value, this.pro_id[0], this.pro_id[1], this.pro_id[2], this.state.value);
    };
    //获取产品分类
    ProductListComponent.prototype.getClassify = function () {
        var _this = this;
        this.http.get(this.url.productTypeList, {}, function (data) {
            // console.log(data);
            if (data.code == '001000') {
                _this.firstData = data.response;
            }
            else {
                console.log(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //跳转
    ProductListComponent.prototype.goPager = function (option) {
        this.util.goPage(option);
    };
    //批量操作
    ProductListComponent.prototype.moreUpdate = function () {
        var _this = this;
        var allId = [];
        this.data.forEach(function (v, k) {
            if (v['checked']) {
                allId.push(v.id);
            }
        });
        if (this.allSelecValue == 's') {
            this.http.get(this.url.updateProfesser, {
                ids: allId.join(','),
                status: 'Y'
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.msg.success('修改成功！');
                    _this.getData();
                }
                else {
                    _this.msg.error(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.allSelecValue == 'x') {
            this.http.get(this.url.updateProfesser, {
                ids: allId.join(','),
                status: 'N'
            }, function (data) {
                // console.log(data);
                if (data.code == '001000') {
                    _this.msg.success('修改成功！');
                    _this.getData();
                }
                else {
                    _this.msg.error(data.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    //删除
    ProductListComponent.prototype.deleModal = function (data) {
        var _this = this;
        var modal = this.modal.confirm({
            nzTitle: '',
            nzContent: '确认删除吗？',
            nzOnOk: function () { return new Promise(function (resolve, reject) {
                //请求数据
                _this.http.get(_this.url.deleteproduct, {
                    id: data.id
                }, function (data) {
                    if (data.code == '001000') {
                        _this.msg.success('删除成功!');
                        _this.getData();
                    }
                }, function (err) {
                    console.log(err);
                });
                modal.destroy();
            }).catch(function () { return console.log('Oops errors!'); }); }
        });
    };
    //上下架
    ProductListComponent.prototype.isEnable = function (data, state) {
        var _this = this;
        var str;
        if (state == 'N') {
            str = '下架商品，前端用户将无法继续查看和购买！<br>确认下架吗？';
        }
        else {
            str = '确认上架吗？';
        }
        var modal = this.modal.confirm({
            nzTitle: '',
            nzContent: str,
            nzOnOk: function () { return new Promise(function (resolve, reject) {
                //请求数据
                _this.http.get(_this.url.updateProfesser, {
                    ids: data.id,
                    status: state
                }, function (data) {
                    if (data.code == '001000') {
                        _this.msg.success('修改成功!');
                        _this.getData();
                    }
                }, function (err) {
                    console.log(err);
                });
                modal.destroy();
            }).catch(function () { return console.log('Oops errors!'); }); }
        });
    };
    //是否推荐到首页
    ProductListComponent.prototype.updataIsHome = function (data, state) {
        var _this = this;
        var modal = this.modal.confirm({
            nzTitle: '',
            nzContent: '是否确认进行操作？',
            nzOnOk: function () { return new Promise(function (resolve, reject) {
                //请求数据
                _this.http.get(_this.url.updateProfesser, {
                    id: data.id,
                    is_home_page: state
                }, function (data) {
                    if (data.code == '001000') {
                        _this.msg.success('修改成功!');
                        _this.getData();
                    }
                }, function (err) {
                    console.log(err);
                });
                modal.destroy();
            }).catch(function () { return console.log('Oops errors!'); }); }
        });
    };
    //数据转换
    ProductListComponent.prototype.editData = function (data) {
        for (var item in data) {
            data[item]['checked'] = false;
        }
        this.data = data;
    };
    //三级
    ProductListComponent.prototype.firstChange = function ($event) {
        var _this = this;
        this.selectedTwo = null;
        if ($event) {
            this.pro_id = [];
            this.firstData.forEach(function (v, k) {
                if (v['product_type_id'] == $event) {
                    _this.twoData = v['children'];
                }
            });
            this.pro_id.push($event);
        }
    };
    ProductListComponent.prototype.twoChange = function ($event) {
        var _this = this;
        this.selectedThree = null;
        if ($event) {
            this.twoData.forEach(function (v, k) {
                if (v['product_type_id'] == $event) {
                    _this.threeData = v['children'];
                }
            });
            this.pro_id.push($event);
        }
    };
    ProductListComponent.prototype.threeChange = function ($event) {
        if ($event) {
            this.pro_id.push($event);
        }
        this.pro_id = this.uniq(this.pro_id);
        console.log(this.pro_id);
    };
    //数组去重
    ProductListComponent.prototype.uniq = function (array) {
        var temp = [];
        var index = [];
        var l = array.length;
        for (var i = 0; i < l; i++) {
            for (var j = i + 1; j < l; j++) {
                if (array[i] === array[j]) {
                    i++;
                    j = i;
                }
            }
            temp.push(array[i]);
            index.push(i);
        }
        console.log(index);
        return temp;
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/pages/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/pages/product/product-list/product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_1__["UtilServeService"],
            _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_2__["UrlServeService"],
            _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_3__["ResetHttpService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product-manger/product-manger.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/product/product-manger/product-manger.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"default\" (click)=\"createModal('b')\"  class=\"right_btn big\">添加大分类</button>\r\n<button nz-button nzType=\"default\" (click)=\"createModal('m')\" class=\"right_btn middle\">添加中分类</button>\r\n<button nz-button nzType=\"default\" (click)=\"createModal('s')\" class=\"right_btn small\">添加小分类</button>\r\n<button nz-button nzType=\"primary\" (click)=\"goPager({url:'/product/list'})\" class=\"goto\">跳转到商品列表</button>\r\n<form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" style=\"display:flex;justify-content:flex-end;\">\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select formControlName=\"state\" nzAllowClear nzPlaceHolder=\"选择启用状态\" name=\"state\">\r\n        <nz-option nzValue=\"Y\" nzLabel=\"启用\"></nz-option>\r\n        <nz-option nzValue=\"N\" nzLabel=\"禁用\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <input type=\"text\" formControlName=\"phone\" nz-input name=\"ak\"  placeholder=\"请输入商品分类\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <button nz-button nzType=\"primary\" (click)=\"searchMore()\">搜索</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n\r\n<nz-table #nzTable [nzData]=\"dataSet\">\r\n  <thead>\r\n  <tr>\r\n    <th>商品分类ID</th>\r\n    <th>商品分类名称</th>\r\n    <th>排序</th>\r\n    <th>启用状态</th>\r\n    <th>操作</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <ng-template ngFor let-data [ngForOf]=\"nzTable.data\">\r\n    <ng-template ngFor let-item [ngForOf]=\"expandDataCache[data.id]\">\r\n      <tr *ngIf=\"(item.parent&&item.parent.expand)||!(item.parent)\">\r\n        <td [nzIndentSize]=\"item.level*20\" [nzShowExpand]=\"!!item.children\" [(nzExpand)]=\"item.expand\" (nzExpandChange)=\"collapse(expandDataCache[data.id],item,$event)\">\r\n          {{item.product_type_id}}\r\n        </td>\r\n        <td>{{item.name}}</td>\r\n        <td>{{item.sort}}</td>\r\n        <td>\r\n          <div [ngSwitch]=\"item.status\">\r\n            <div *ngSwitchCase=\"'Y'\" style=\"color:green\">启用</div>\r\n            <div *ngSwitchCase=\"'N'\" style=\"color:red\">禁用</div>\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <button nz-button nzType=\"default\" (click)=\"goPager({url:'/product/edit',data:{'data':item}})\" >编辑</button>\r\n          <div [ngSwitch]=\"item.status\" style=\"display: inline-block\">\r\n            <div *ngSwitchCase=\"'Y'\"><button nz-button nzType=\"default\" (click)=\"isEnable(item)\" >停用</button></div>\r\n            <div *ngSwitchCase=\"'N'\"><button nz-button nzType=\"default\" (click)=\"isable(item)\">启用</button></div>\r\n          </div>\r\n          <button nz-button nzType=\"default\" *ngIf=\"item.sort == '3'\" (click)=\"isDele(item.id)\">删除</button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </ng-template>\r\n    </tbody>\r\n  </nz-table>\r\n"

/***/ }),

/***/ "./src/app/pages/product/product-manger/product-manger.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/product/product-manger/product-manger.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep form .ant-select {\n  max-width: 200px !important;\n  width: 200px; }\n\n:host ::ng-deep .big {\n  float: left;\n  margin-top: 0;\n  margin-right: 15px; }\n\n:host ::ng-deep .middle {\n  float: left;\n  margin-top: 0;\n  margin-right: 15px; }\n\n:host ::ng-deep .small {\n  float: left;\n  margin-top: 0;\n  margin-right: 15px; }\n\n:host ::ng-deep .goto {\n  float: left;\n  margin-top: 0; }\n\n:host ::ng-deep .ant-table-wrapper {\n  padding-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LW1hbmdlci9IOlxcbmV3XFxqc19wbHVnaW5cXGppeWluL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdFxccHJvZHVjdC1tYW5nZXJcXHByb2R1Y3QtbWFuZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sNEJBQTBCO0VBQzFCLGFBQVksRUFDYjs7QUFMTDtFQU9NLFlBQVU7RUFDVixjQUFhO0VBQ2IsbUJBQWtCLEVBQ25COztBQVZMO0VBWU0sWUFBVTtFQUNWLGNBQWE7RUFDYixtQkFBa0IsRUFDbkI7O0FBZkw7RUFpQk0sWUFBVTtFQUNWLGNBQWE7RUFDYixtQkFBa0IsRUFDbkI7O0FBcEJMO0VBc0JNLFlBQVU7RUFDVixjQUFhLEVBQ2Q7O0FBeEJMO0VBMEJNLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1tYW5nZXIvcHJvZHVjdC1tYW5nZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICA6Om5nLWRlZXB7XHJcbiAgICBmb3JtIC5hbnQtc2VsZWN0e1xyXG4gICAgICBtYXgtd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJpZ3tcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1pZGRsZXtcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNtYWxse1xyXG4gICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZ290b3tcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5hbnQtdGFibGUtd3JhcHBlcntcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product/product-manger/product-manger.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/product/product-manger/product-manger.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductMangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMangerComponent", function() { return ProductMangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../share/util/reset-http.service */ "./src/app/share/util/reset-http.service.ts");
/* harmony import */ var _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/util/util-serve.service */ "./src/app/share/util/util-serve.service.ts");
/* harmony import */ var _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/util/url-serve.service */ "./src/app/share/util/url-serve.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _modal_classify_product_modal_classify_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-classify-product/modal-classify-product.component */ "./src/app/pages/product/modal-classify-product/modal-classify-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductMangerComponent = /** @class */ (function () {
    function ProductMangerComponent(http, util, url, msg, fb, modalService) {
        this.http = http;
        this.util = util;
        this.url = url;
        this.msg = msg;
        this.fb = fb;
        this.modalService = modalService;
        this.dataSet = [];
        //树形表格
        this.expandDataCache = {};
        this.validateForm = this.fb.group({
            state: [],
            phone: []
        });
    }
    ProductMangerComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    Object.defineProperty(ProductMangerComponent.prototype, "state", {
        //获取组件
        get: function () {
            return this.validateForm.controls.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductMangerComponent.prototype, "phone", {
        get: function () {
            return this.validateForm.controls.phone;
        },
        enumerable: true,
        configurable: true
    });
    //搜索
    ProductMangerComponent.prototype.searchMore = function () {
        this.getData(this.state.value, this.phone.value);
    };
    //获取数据
    ProductMangerComponent.prototype.getData = function (status, name) {
        var _this = this;
        if (status === void 0) { status = ''; }
        if (name === void 0) { name = ''; }
        this.http.get(this.url.productTypeList, {
            page: '',
            rows: '',
            status: status,
            name: name,
        }, function (data) {
            console.log(data);
            if (data.code == '001000') {
                _this.dataSet = data.response;
                //树形组件
                _this.dataSet.forEach(function (item) {
                    _this.expandDataCache[item.id] = _this.convertTreeToList(item);
                });
            }
            else {
                _this.msg.error(data.message);
            }
        });
    };
    /*
   * 表格操作
   * */
    //停用
    ProductMangerComponent.prototype.isEnable = function (data) {
        var _this = this;
        console.log(data);
        this.isEnablemodal = this.modalService.create({
            nzTitle: '',
            nzContent: '停用商品大分类时，所属中和小分类也将被停用。停用后，前端用户将无法查看小分类下的商品，也无法购买商品！确认停用吗？<br><br>确认停用吗',
            nzClosable: false,
            nzOnOk: function () { return new Promise(function (resolve) {
                _this.http.get(_this.url.updateProductType, {
                    id: data.id,
                    status: 'N'
                }, function (res) {
                    console.log(res);
                    if (res.code == '001000') {
                        _this.msg.success('操作成功！');
                        _this.getData();
                        _this.isEnablemodal.destroy();
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
    ProductMangerComponent.prototype.isable = function (data) {
        var _this = this;
        console.log(data);
        this.http.get(this.url.updateProductType, {
            id: data.id,
            status: 'Y'
        }, function (data) {
            if (data.code === '001000') {
                _this.getData();
                _this.msg.success('操作成功');
            }
            else {
                _this.msg.error(data.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //删除
    ProductMangerComponent.prototype.isDele = function (data) {
    };
    //创建模态窗 创建分类
    ProductMangerComponent.prototype.createModal = function (data) {
        var _this = this;
        this.validateForm.reset();
        var modal = this.modalService.create({
            nzTitle: '',
            nzContent: _modal_classify_product_modal_classify_product_component__WEBPACK_IMPORTED_MODULE_5__["ModalClassifyProductComponent"],
            nzClosable: false,
            nzComponentParams: data,
            nzFooter: null
        });
        modal.afterOpen.subscribe(function () { return console.log(''); });
        modal.afterClose.subscribe(function (result) {
            if (result == 'success') {
                _this.getData();
            }
        });
    };
    //跳转
    ProductMangerComponent.prototype.goPager = function (option) {
        this.util.goPage(option);
    };
    //树形表格
    ProductMangerComponent.prototype.collapse = function (array, data, $event) {
        var _this = this;
        if ($event === false) {
            if (data.children) {
                data.children.forEach(function (d) {
                    var target = array.find(function (a) { return a.id === d.id; });
                    target.expand = false;
                    _this.collapse(array, target, false);
                });
            }
            else {
                return;
            }
        }
    };
    ProductMangerComponent.prototype.convertTreeToList = function (root) {
        var stack = [];
        var array = [];
        var hashMap = {};
        stack.push(__assign({}, root, { level: 0, expand: false }));
        while (stack.length !== 0) {
            var node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(__assign({}, node.children[i], { level: node.level + 1, expand: false, parent: node }));
                }
            }
        }
        return array;
    };
    ProductMangerComponent.prototype.visitNode = function (node, hashMap, array) {
        if (!hashMap[node.id]) {
            hashMap[node.id] = true;
            array.push(node);
        }
    };
    ProductMangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-manger',
            template: __webpack_require__(/*! ./product-manger.component.html */ "./src/app/pages/product/product-manger/product-manger.component.html"),
            styles: [__webpack_require__(/*! ./product-manger.component.scss */ "./src/app/pages/product/product-manger/product-manger.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_util_reset_http_service__WEBPACK_IMPORTED_MODULE_1__["ResetHttpService"],
            _share_util_util_serve_service__WEBPACK_IMPORTED_MODULE_2__["UtilServeService"],
            _share_util_url_serve_service__WEBPACK_IMPORTED_MODULE_3__["UrlServeService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]])
    ], ProductMangerComponent);
    return ProductMangerComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_manger_product_manger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-manger/product-manger.component */ "./src/app/pages/product/product-manger/product-manger.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/pages/product/add-product/add-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/pages/product/edit-product/edit-product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/pages/product/product-list/product-list.component.ts");
/* harmony import */ var _product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list-edit/product-list-edit.component */ "./src/app/pages/product/product-list-edit/product-list-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _product_manger_product_manger_component__WEBPACK_IMPORTED_MODULE_2__["ProductMangerComponent"], data: { breadcrumb: '商品管理' } },
    { path: 'edit', component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__["EditProductComponent"], data: { breadcrumb: '编辑商品分类' } },
    { path: 'list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], data: { breadcrumb: '商品列表' } },
    { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"], data: { breadcrumb: '增加商品' } },
    { path: 'edit-product', component: _product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProductListEditComponent"], data: { breadcrumb: '编辑商品' } }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/product/product.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/pages/product/product-routing.module.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/pages/product/add-product/add-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/pages/product/edit-product/edit-product.component.ts");
/* harmony import */ var _product_manger_product_manger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-manger/product-manger.component */ "./src/app/pages/product/product-manger/product-manger.component.ts");
/* harmony import */ var _modal_classify_product_modal_classify_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-classify-product/modal-classify-product.component */ "./src/app/pages/product/modal-classify-product/modal-classify-product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/pages/product/product-list/product-list.component.ts");
/* harmony import */ var _product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-list-edit/product-list-edit.component */ "./src/app/pages/product/product-list-edit/product-list-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"]
            ],
            declarations: [_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_5__["EditProductComponent"], _product_manger_product_manger_component__WEBPACK_IMPORTED_MODULE_6__["ProductMangerComponent"], _modal_classify_product_modal_classify_product_component__WEBPACK_IMPORTED_MODULE_7__["ModalClassifyProductComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"], _product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductListEditComponent"]],
            entryComponents: [_modal_classify_product_modal_classify_product_component__WEBPACK_IMPORTED_MODULE_7__["ModalClassifyProductComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-product-module.js.map