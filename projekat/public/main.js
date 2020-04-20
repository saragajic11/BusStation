(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-prevoznik/add-prevoznik.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/add-prevoznik/add-prevoznik.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    max-width: 400px;\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top:-50px;\r\n  position: relative;\r\n}\r\nh2{\r\n    margin-bottom:20px;\r\n}\r\n#contact {\r\n    background: rgb(178, 240, 165);\r\n    padding: 25px;\r\n    margin: 150px 0;\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n  }\r\n.btn{\r\n    background-color:rgb(45, 97, 34);\r\n    margin-top:60px;\r\n    margin-bottom:40px;\r\n}\r\n#contact input[type=\"text\"],\r\n#contact input[type=\"tel\"] {\r\n  width: 100%;\r\n  border: 1px solid rgb(45, 97, 34);\r\n  background: rgb(255, 255, 255);\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n#contact input[type=\"text\"]:hover,\r\n#contact input[type=\"tel\"]:hover{\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid rgb(21, 46, 19);\r\n}\r\n.labela{\r\n    letter-spacing:1px; \r\n    text-align:center;\r\n    color: rgb(17, 14, 14);\r\n}"

/***/ }),

/***/ "./src/app/admin/add-prevoznik/add-prevoznik.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/add-prevoznik/add-prevoznik.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"needs-validation col-md-4 col-md-offset-2 content container\">\n    <form [formGroup]=\"form\" id=\"contact\" (ngSubmit)=\"onSubmit()\">\n        <h2 class=\"text-center\" >Dodaj prevoznika</h2>\n        <div class=\"form-group\">\n            <label for=\"imeprevoznika\" class=\"labela\">Ime prevoznika</label>\n            <input type=\"text\" id=\"imeprevoznika\" class=\"form-control\" formControlName=\"imeprevoznika\" autocomplete=\"imeprevoznika\">\n            <div *ngIf=\"form.controls['imeprevoznika'].errors && !form.controls['imeprevoznika'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['imeprevoznika'].errors.required\">\n                    Valid name is required.\n                </div>\n                <div [hidden]=\"!form.controls['imeprevoznika'].errors.minlength\">\n                    Name is too short\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"kontakt\" class=\"labela\">Kontakt</label>\n            <input type=\"tel\" id=\"kontakt\" class=\"form-control\" placeholder=\"+381655555555\" formControlName=\"kontakt\" autocomplete=\"kontakt\">\n            <div *ngIf=\"form.controls['kontakt'].errors && !form.controls['kontakt'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['kontakt'].errors.required\">\n                    Valid phone number is required.\n                </div>\n                <div [hidden]=\"!form.controls['kontakt'].errors.minlength\">\n                    You must enter valid phone number.\n                </div>\n            </div>\n        </div>\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\"  [disabled]=\"!form.valid\" >Dodaj</button>\n    </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/add-prevoznik/add-prevoznik.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/add-prevoznik/add-prevoznik.component.ts ***!
  \****************************************************************/
/*! exports provided: AddPrevoznikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrevoznikComponent", function() { return AddPrevoznikComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_prevoznik_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/prevoznik.model */ "./src/app/model/prevoznik.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_prevoznik_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/prevoznik.service */ "./src/app/services/prevoznik.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPrevoznikComponent = /** @class */ (function () {
    function AddPrevoznikComponent(router, prevoznikServ, toastr) {
        this.router = router;
        this.prevoznikServ = prevoznikServ;
        this.toastr = toastr;
    }
    AddPrevoznikComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            imeprevoznika: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]),
            kontakt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
        });
    };
    AddPrevoznikComponent.prototype.onSubmit = function () {
        var _this = this;
        var prevoznik = new _model_prevoznik_model__WEBPACK_IMPORTED_MODULE_1__["Prevoznik"](this.form.value.imeprevoznika, this.form.value.kontakt);
        this.prevoznikServ.addPrevoznici(prevoznik).subscribe(function (data) {
            if (data.success == false) {
                _this.toastr.error(data.msg, '', {
                    closeButton: true,
                    positionClass: 'toast-bottom-left'
                });
                _this.form.reset();
            }
            else {
                _this.form.reset();
                _this.toastr.success(data.msg, '', {
                    closeButton: true,
                    positionClass: 'toast-bottom-left'
                });
                _this.router.navigate(['/prevoznici/get']);
            }
        });
    };
    AddPrevoznikComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-prevoznik',
            template: __webpack_require__(/*! ./add-prevoznik.component.html */ "./src/app/admin/add-prevoznik/add-prevoznik.component.html"),
            styles: [__webpack_require__(/*! ./add-prevoznik.component.css */ "./src/app/admin/add-prevoznik/add-prevoznik.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_prevoznik_service__WEBPACK_IMPORTED_MODULE_3__["PrevoznikService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AddPrevoznikComponent);
    return AddPrevoznikComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-putanja/add-putanja.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/add-putanja/add-putanja.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n    margin-top: 105px;\r\n    margin-left: 700px;\r\n}\r\n.klasa{\r\n    position: absolute;\r\n\ttop:10%;\r\n    left: 50%;\r\n    margin-left:190px;\r\n    margin-top: 60px;\r\n\twidth:300px;\r\n    height:100px;\r\n}\r\nh2{\r\n    color: rgb(53, 46, 46);letter-spacing:1px; text-align:center; margin-bottom:25px;\r\n}\r\n#contact input[type=\"text\"],\r\n#contact input[type=\"time\"] {\r\n  width: 100%;\r\n  border: 1px double rgb(32, 127, 216);\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n#contact input[type=\"text\"]:hover,\r\n#contact input[type=\"tel\"]:hover{\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid rgb(47, 27, 160);\r\n}\r\n.btn{\r\n    position:relative;\r\n    width:50%;\r\n    left:25%;\r\n    margin-top:40px;\r\n    background-color:purple;\r\n    color:white;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/admin/add-putanja/add-putanja.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/add-putanja/add-putanja.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"needs-validation col-md-4 col-md-offset-2 content\">\n        <img src=\"../assets/slike/directions1.png\" alt=\"\" width=\"250\" height=\"180\" class=\"image\">\n        <div class=\"klasa\">\n  <form [formGroup]=\"form\" id=\"contact\" (ngSubmit)=\"onSubmit()\">\n      <h2>Dodaj rutu</h2>\n      <div class=\"form-group\">\n            <input type=\"text\" id=\"ruta\" class=\"form-control\" placeholder=\"Grad1,Grad2\" formControlName=\"ruta\" autocomplete=\"ruta\">\n            <div *ngIf=\"form.controls['ruta'].errors && !form.controls['ruta'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['ruta'].errors.required\">\n                    Unesite validnu rutu.\n                </div>\n                <div [hidden]=\"!form.controls['ruta'].errors.minlength\">\n                  Unesite validnu rutu..\n                </div>\n            </div>\n        </div>\n\n      <div class=\"form-group\">\n          <label for=\"vremePolaska\">Vreme polaska</label>\n          <input type=\"time\" id=\"vremePolaska\" class=\"form-control\" formControlName=\"vremePolaska\" autocomplete=\"vremePolaska\">\n          <div *ngIf=\"form.controls['vremePolaska'].errors && !form.controls['vremePolaska'].pristine\" class=\"error-msg\">\n              <div [hidden]=\"!form.controls['vremePolaska'].errors.required\">\n                  Unesite validno vreme polaska.\n              </div>\n              <div [hidden]=\"!form.controls['vremePolaska'].errors.minlength\">\n                Unesite validno vreme polaska.\n              </div>\n          </div>\n      </div>\n          <!--<label for=\"uZemlji\">U zemlji: </label>\n          <input type=\"checkbox\" id=\"uZemlji\" class=\"form-control\" placeholder=\"Grad1,Grad2\" formControlName=\"uZemlji\">\n          -->\n\n      <button class=\"btn btn-md btn-block\" type=\"submit\"  [disabled]=\"!form.valid\" >Dodaj</button>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/add-putanja/add-putanja.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/add-putanja/add-putanja.component.ts ***!
  \************************************************************/
/*! exports provided: AddPutanjaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPutanjaComponent", function() { return AddPutanjaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_ruta_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/ruta.model */ "./src/app/model/ruta.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_putanja_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/putanja.service */ "./src/app/services/putanja.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPutanjaComponent = /** @class */ (function () {
    function AddPutanjaComponent(router, putanjaServ, toastr, route) {
        this.router = router;
        this.putanjaServ = putanjaServ;
        this.toastr = toastr;
        this.route = route;
    }
    AddPutanjaComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            vremePolaska: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            ruta: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]),
        });
    };
    AddPutanjaComponent.prototype.onSubmit = function () {
        var _this = this;
        var putanja = new _model_ruta_model__WEBPACK_IMPORTED_MODULE_1__["Ruta"](this.form.get('ruta').value.split(','), this.form.get('vremePolaska').value);
        //console.log(putanja);
        this.route.paramMap.subscribe(function (params) {
            _this.taken = params.get('id');
            var obj = {};
            obj.prevoznik = _this.taken;
            obj.putanja = putanja;
            _this.putanjaServ.addPutanja(obj).subscribe(function (data) {
                if (data.success == false) {
                    _this.toastr.error(data.msg, '', {
                        closeButton: true,
                        positionClass: 'toast-bottom-left'
                    });
                    _this.form.reset();
                }
                else {
                    _this.form.reset();
                    _this.toastr.success(data.msg, '', {
                        closeButton: true,
                        positionClass: 'toast-bottom-left'
                    });
                    _this.router.navigate(['/prevoznici/get']);
                }
            });
        });
    };
    AddPutanjaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-putanja',
            template: __webpack_require__(/*! ./add-putanja.component.html */ "./src/app/admin/add-putanja/add-putanja.component.html"),
            styles: [__webpack_require__(/*! ./add-putanja.component.css */ "./src/app/admin/add-putanja/add-putanja.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_putanja_service__WEBPACK_IMPORTED_MODULE_3__["PutanjaService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddPutanjaComponent);
    return AddPutanjaComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_prevoznik_add_prevoznik_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-prevoznik/add-prevoznik.component */ "./src/app/admin/add-prevoznik/add-prevoznik.component.ts");
/* harmony import */ var _add_putanja_add_putanja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-putanja/add-putanja.component */ "./src/app/admin/add-putanja/add-putanja.component.ts");
/* harmony import */ var _getallrezervacije_getallrezervacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getallrezervacije/getallrezervacije.component */ "./src/app/admin/getallrezervacije/getallrezervacije.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'addPrevoznik', component: _add_prevoznik_add_prevoznik_component__WEBPACK_IMPORTED_MODULE_2__["AddPrevoznikComponent"] },
    { path: 'addputanja/:id', component: _add_putanja_add_putanja_component__WEBPACK_IMPORTED_MODULE_3__["AddPutanjaComponent"] },
    { path: 'getallrezervacije', component: _getallrezervacije_getallrezervacije_component__WEBPACK_IMPORTED_MODULE_4__["GetallrezervacijeComponent"] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _add_prevoznik_add_prevoznik_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-prevoznik/add-prevoznik.component */ "./src/app/admin/add-prevoznik/add-prevoznik.component.ts");
/* harmony import */ var _add_putanja_add_putanja_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-putanja/add-putanja.component */ "./src/app/admin/add-putanja/add-putanja.component.ts");
/* harmony import */ var _getallrezervacije_getallrezervacije_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getallrezervacije/getallrezervacije.component */ "./src/app/admin/getallrezervacije/getallrezervacije.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_add_prevoznik_add_prevoznik_component__WEBPACK_IMPORTED_MODULE_4__["AddPrevoznikComponent"], _add_putanja_add_putanja_component__WEBPACK_IMPORTED_MODULE_5__["AddPutanjaComponent"], _getallrezervacije_getallrezervacije_component__WEBPACK_IMPORTED_MODULE_6__["GetallrezervacijeComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/getallrezervacije/getallrezervacije.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/getallrezervacije/getallrezervacije.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabela{\r\n    overflow: hidden;\r\n\t  width: 80%;\r\n\t  margin: 0 auto;\r\n  display: table;\r\n  padding: 0 0 8em 0;\r\n  border: 1px solid rgb(94, 67, 67);\r\n  margin-bottom:20px;\r\n}\r\n.tabela th {\r\n    background-color: rgb(218, 185, 164);\r\n}\r\n.tabela td{\r\n    color: rgb(53, 46, 46); text-align:center;\r\n}\r\n.tabela th, td {\r\n    border: 1px solid rgb(100, 33, 33);\r\n }\r\nh2{\r\n    font-weight: 700;\r\n    text-align: center;\r\n    display: block;\r\n    line-height:1em;\r\n    padding-bottom: 2px;\r\n    padding-top:30px;\r\n    color: rgb(70, 61, 63);\r\n  }"

/***/ }),

/***/ "./src/app/admin/getallrezervacije/getallrezervacije.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/getallrezervacije/getallrezervacije.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Sve rezervacije</h2>\n<table class=\"table table-bordered table-hover tabela\" style=\"margin-top:30px;\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th class=\"text-center\" scope=\"col\">#</th>\n      <th class=\"text-center\" scope=\"col\">Ruta</th>\n      <th class=\"text-center\" scope=\"col\">Prevoznik</th>\n      <th class=\"text-center\" scope=\"col\">Datum polaska</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rezervacija of rezervacije; index as i;\">\n      <th class=\"text-center\" scope=\"row\">{{i+1}}</th>\n      <td class=\"text-center\" >{{rezervacija.destinacija}}</td>\n      <td class=\"text-center\">{{rezervacija.prevoznik}}</td>\n      <td class=\"text-center\">{{rezervacija.datumPolaska}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/admin/getallrezervacije/getallrezervacije.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/getallrezervacije/getallrezervacije.component.ts ***!
  \************************************************************************/
/*! exports provided: GetallrezervacijeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetallrezervacijeComponent", function() { return GetallrezervacijeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rezervacije.service */ "./src/app/services/rezervacije.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetallrezervacijeComponent = /** @class */ (function () {
    function GetallrezervacijeComponent(router, rezervacijaServ) {
        this.router = router;
        this.rezervacijaServ = rezervacijaServ;
    }
    GetallrezervacijeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rezervacijaServ.getAllRezervacije().subscribe(function (data) {
            _this.rezervacije = data;
        });
    };
    GetallrezervacijeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getallrezervacije',
            template: __webpack_require__(/*! ./getallrezervacije.component.html */ "./src/app/admin/getallrezervacije/getallrezervacije.component.html"),
            styles: [__webpack_require__(/*! ./getallrezervacije.component.css */ "./src/app/admin/getallrezervacije/getallrezervacije.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_2__["RezervacijeService"]])
    ], GetallrezervacijeComponent);
    return GetallrezervacijeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _prevoznici_prevoznici_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prevoznici/prevoznici.module */ "./src/app/prevoznici/prevoznici.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', loadChildren: function () { return _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]; } },
    { path: 'users', loadChildren: function () { return _users_users_module__WEBPACK_IMPORTED_MODULE_2__["UsersModule"]; } },
    { path: 'prevoznici', loadChildren: function () { return _prevoznici_prevoznici_module__WEBPACK_IMPORTED_MODULE_4__["PrevozniciModule"]; } },
    { path: 'admin', loadChildren: function () { return _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"]; } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-error></app-error>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularFile';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ "./src/app/pages/navbar/navbar.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _services_prevoznik_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/prevoznik.service */ "./src/app/services/prevoznik.service.ts");
/* harmony import */ var _services_putanja_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/putanja.service */ "./src/app/services/putanja.service.ts");
/* harmony import */ var _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/rezervacije.service */ "./src/app/services/rezervacije.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//uvodimo servise





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _pages_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                mydatepicker__WEBPACK_IMPORTED_MODULE_9__["MyDatePickerModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _services_error_service__WEBPACK_IMPORTED_MODULE_13__["ErrorService"], _services_prevoznik_service__WEBPACK_IMPORTED_MODULE_14__["PrevoznikService"], _services_putanja_service__WEBPACK_IMPORTED_MODULE_15__["PutanjaService"], _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_16__["RezervacijeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/error.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/error.model.ts ***!
  \**************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
var Error = /** @class */ (function () {
    function Error(title, message) {
        this.title = title;
        this.message = message;
    }
    return Error;
}());



/***/ }),

/***/ "./src/app/model/prevoznik.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/prevoznik.model.ts ***!
  \******************************************/
/*! exports provided: Prevoznik */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prevoznik", function() { return Prevoznik; });
var Prevoznik = /** @class */ (function () {
    function Prevoznik(imePrevoznika, kontakt, rute, //ne znam dal ovde treba upitnik ili ne
    id) {
        this.imePrevoznika = imePrevoznika;
        this.kontakt = kontakt;
        this.rute = rute;
        this.id = id;
    }
    return Prevoznik;
}());



/***/ }),

/***/ "./src/app/model/ruta.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/ruta.model.ts ***!
  \*************************************/
/*! exports provided: Ruta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruta", function() { return Ruta; });
var Ruta = /** @class */ (function () {
    function Ruta(ruta, vremePolaska, uZemlji, imePrevoznika, id) {
        this.ruta = ruta;
        this.vremePolaska = vremePolaska;
        this.uZemlji = uZemlji;
        this.imePrevoznika = imePrevoznika;
        this.id = id;
    }
    return Ruta;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password, name, username, admin) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.username = username;
        this.admin = admin;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/error/error.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/error/error.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/error/error.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/error/error.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//servisi


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router, errorService, toastr) {
        this.router = router;
        this.errorService = errorService;
        this.toastr = toastr;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccurred
            .subscribe(function (error) {
            /************Rukovanje pristiglim greskama************/
            var msg = error.message;
            var status = parseInt(error.title);
            if (status == 0)
                msg = "Failed to connect to server";
            if (status == 401) {
                _this.router.navigate(['/users/login']);
                msg = "Please login first!";
            }
            if (status == 403 || status == 500)
                _this.router.navigate(['/']);
            _this.toastr.error(msg, "Error", {
                closeButton: true,
                positionClass: 'toast-bottom-left'
            });
        });
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/pages/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/pages/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-cyan-3 input[type=text] {\r\n    border: 1px solid #d88b26;\r\n    box-shadow: 0 0 0 1px #d88b26;\r\n    display:block;\r\n}\r\n.moja{\r\n    width:200px;\r\n    border-radius: 5px;\r\n    margin-left:60px;\r\n}\r\n.myDIV {\r\n    text-align:center;\r\n    position:relative;\r\n    margin: 0 auto 5px;\r\n}\r\n.mojaforma{\r\n    position:absolute;\r\n    border: 1px solid #4dd0e1;\r\n    box-shadow: 0 0 0 1px #4dd0e1;\r\n}\r\n.tabela{\r\n    overflow: hidden;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    display: table;\r\n    padding: 0 0 8em 0;\r\n    margin-bottom:20px;\r\n}\r\n.tabela th {\r\n    background-color:#575048;\r\n    color: #e5e9c4; text-align:center;\r\n}\r\ntr:nth-child(odd){\r\n    background:#EBEBEB\r\n}\r\ntr:nth-child(even){\r\n    background:#e5e9c4\r\n}\r\nh1{\r\n    margin-top:-70px;\r\n\r\n}\r\n.product-device{\r\n    margin-left:550px;\r\n    margin-top:-30px;\r\n}\r\ntabela,th,td{\r\n    border:1px solid #292622;\r\n}\r\n.btn{\r\n    background-color:#d88b26;\r\n    color:#e5e9c4;\r\n    text-align: center;\r\n    border: 1px solid #d88b26;\r\n    font-weight: 500;\r\n}\r\ncaption{\r\n    color:#575048;\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron position-relative overflow-hidden p-2 p-md-5 text-center\" style=\"background-color:#e5e9c4\">\n    <img class=\"product-device box-shadow d-md-block\" src=\"../../../assets/slike/novisad.png\">\n    <div>\n      <h1 class=\"display-4 font-weight-normal klasa\">Autobuska stanica Novi Sad</h1>      \n      <p class=\"lead font-weight-normal klasa\">Dobrodošli na zvanični sajt Autobuske stanice Novi Sad</p>\n    </div>\n</div>\n\n<div class=\"active-cyan-3 myDIV col-md-3\">\n    <form #myForm=\"ngForm\" novalidate>\n        <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\n                        [(ngModel)]=\"model\" required></my-date-picker>\n    </form>\n  <input class=\"form-control moja\" type=\"text\" (change)=\"goSearch($event)\" placeholder=\"Search\" aria-label=\"Search\">\n</div>\n<table class=\"table table-bordered tabela\" *ngIf=\"found\" style=\"margin-top:30px;\">\n    <caption><i>*Za rezervaciju karata morate biti prijavljeni</i></caption>\n  <thead class=\"thead-light\">\n    <tr>\n      <th class=\"text-center\" scope=\"col\">#</th>\n      <th class=\"text-center\" scope=\"col\">Prevoznik</th>\n      <th class=\"text-center\" scope=\"col\">Vreme polaska</th>\n      <th class=\"text-center\" scope=\"col\">Ruta</th>\n      <th class=\"text-center\" scope=\"col\" *ngIf=\"!isAdmin && isLoggedIn()\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let ruta of rute; index as i;\">\n      <th class=\"text-center\" scope=\"row\">{{i+1}}</th>\n      <td class=\"text-center\">{{ruta.imePrevoznika}}</td>\n      <td class=\"text-center\">{{ruta.vremePolaska}}</td>\n      <td class=\"text-center\">{{ruta.ruta}}</td>\n      <td class=\"text-center\" *ngIf=\"!isAdmin && isLoggedIn()\" (click)=\"rezervisi(ruta)\"><button type=\"button\" class=\"btn\">Rezervisi</button></td>\n    </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_putanja_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/putanja.service */ "./src/app/services/putanja.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rezervacije.service */ "./src/app/services/rezervacije.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(putanjaServ, router, rezervacijaServ, toastr, userService) {
        this.putanjaServ = putanjaServ;
        this.router = router;
        this.rezervacijaServ = rezervacijaServ;
        this.toastr = toastr;
        this.userService = userService;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy',
            inline: false,
            width: '80%'
        };
        this.model = { date: { year: 2018, month: 9, day: 8 } };
    }
    HomeComponent.prototype.goSearch = function (data) {
        var _this = this;
        if (this.rute != undefined) {
            this.rute.length = 0;
        }
        /*if(data.obj.length>0)
          this.found=true;
        else{
          this.found=false;
        }*/
        this.putanjaServ.getAllRoutes(data.target.value.toString()).subscribe(function (data) {
            //upisujemo ih u niz
            if (data.obj != undefined) {
                if (data.obj.length > 0)
                    _this.found = true;
                else {
                    _this.found = false;
                }
            }
            _this.rute = data.obj;
            //this.found=true;
            //sortiramo
            _this.sortList();
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        localStorage.getItem('admin') == "1" ? (this.isAdmin = true) : (this.isAdmin = false);
    };
    HomeComponent.prototype.sortList = function () {
        for (var i = 0; i < this.rute.length; i++) {
            for (var j = i + 1; j < this.rute.length; j++) {
                var vreme1 = this.rute[i].vremePolaska.split(':');
                var sati1 = parseInt(vreme1[0]);
                var minuti1 = parseInt(vreme1[1]) + sati1 * 60;
                var vreme2 = this.rute[j].vremePolaska.split(':');
                var sati2 = parseInt(vreme2[0]);
                var minuti2 = parseInt(vreme2[1]) + sati2 * 60;
                if (minuti1 > minuti2) {
                    var m = this.rute[i];
                    this.rute[i] = this.rute[j];
                    this.rute[j] = m;
                }
            }
        }
    };
    HomeComponent.prototype.rezervisi = function (ruta) {
        var _this = this;
        var vreme = ruta.vremePolaska.split(':');
        //proveri vreme, mozda treba da dodas i gore i dole +1
        var sati = parseInt(vreme[0]);
        var minuta = parseInt(vreme[1]);
        console.log(vreme);
        var rezervacija = {
            prevoznik: ruta.imePrevoznika,
            destinacija: ruta.ruta,
            datumPolaska: new Date(this.model.date.year, this.model.date.month - 1, this.model.date.day).setHours(sati + 2, minuta)
        };
        this.rezervacijaServ.addRezervacija(rezervacija).subscribe(function (data) {
            if (data.success == false) {
                _this.toastr.error(data.msg, '', {
                    closeButton: true,
                    positionClass: 'toast-bottom-left'
                });
            }
            else {
                _this.toastr.success("Reservation successful", '', {
                    closeButton: true,
                    positionClass: 'toast-bottom-left'
                });
                _this.router.navigate(['/users/getrezervacije']);
            }
        });
    };
    //provera da li je korisnik ulogovan
    HomeComponent.prototype.isLoggedIn = function () {
        //ako je prijavljen vrati true..ako ne, false(i to se na kraju u htmlu namesta)
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else
            return false;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_putanja_service__WEBPACK_IMPORTED_MODULE_1__["PutanjaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_3__["RezervacijeService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">MAS</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n   \n    <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"navbarsExampleDefault\">\n\n      <ul class=\"navbar-nav navbar-left mr-auto\">\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/prevoznici/get']\">Prevoznici</a>\n        </li>\n      </ul>\n      \n      <ul class=\"navbar-nav navbar-right ml-auto\">\n          <div *ngIf=\"!isLoggedIn();then outProfiled else inProfiled\"></div> \n          <ng-template #outProfiled>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/users/login']\">Login</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/users/register']\">Register</a>\n        </li>\n      </ng-template>\n      <ng-template #inProfiled>\n        <a class=\"nav-link\"[routerLink]=\"['/users/getrezervacije']\" style=\"color:white(255, 153, 0);\" *ngIf=\"!isAdmin()\" (click)=\"getRez()\">Pogledaj rezervacije</a>\n        <a class=\"nav-link\"[routerLink]=\"['/admin/getallrezervacije']\" style=\"color:white(255, 153, 0);\" *ngIf=\"isAdmin()\" (click)=\"getAllRez()\">Sve rezervacije</a>\n        <a class=\"nav-link\"[routerLink]=\"['/users/login']\" style=\"color:white(255, 153, 0);\" (click)=\"logOut()\">Log out</a>\n        \n      </ng-template>\n      </ul>\n      \n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    //public isAdmin:Boolean;
    function NavbarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isCollapsed = false;
        //ovde fali admin 0
        this.users = { name: '', username: '', email: '' };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // localStorage.getItem('admin')=="1"?(this.isAdmin=true):(this.isAdmin=false);
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        //ako je prijavljen vrati true..ako ne, false(i to se na kraju u htmlu namesta)
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else
            return false;
    };
    NavbarComponent.prototype.clearDataOfUser = function () {
        this.users.name = '';
        this.users.username = '';
        this.users.email = '';
        //this.url=this.userSer.getAvatarURL('');
    };
    NavbarComponent.prototype.logOut = function () {
        this.userService.logout();
        //saljemo ga na rutu za prijavljivanje
        this.router.navigate(['/users/login']);
        this.wait = false;
        this.clearDataOfUser();
    };
    NavbarComponent.prototype.getAllRez = function () {
        this.router.navigate(['/admin/getallrezervacije']);
    };
    NavbarComponent.prototype.isAdmin = function () {
        return localStorage.getItem('admin') == "1";
    };
    NavbarComponent.prototype.getRez = function () {
        this.router.navigate(['/users/getrezervacije']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/pages/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/pages/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { ErrorComponent } from './error/error.component';
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_2__["MyDatePickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/prevoznici/get/get.component.css":
/*!**************************************************!*\
  !*** ./src/app/prevoznici/get/get.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabela{\r\n    overflow: hidden;\r\n\t  width: 80%;\r\n\t  margin: 0 auto;\r\n  display: table;\r\n  padding: 0 0 8em 0;\r\n  border: 1px solid rgb(94, 67, 67)\r\n}\r\n.tabela th {\r\n    background-color: rgb(218, 185, 164);\r\n}\r\n.tabela td{\r\n    color: rgb(53, 46, 46); text-shadow: 0 0 5px rgba(0,0,0,0.3); text-align:center;\r\n}\r\nh2{\r\n  font-weight: 700;\r\n  text-align: center;\r\n  display: block;\r\n  line-height:1em;\r\n  padding-bottom: 2px;\r\n  padding-top:30px;\r\n  color: rgb(122, 108, 110);\r\n}\r\n.tabela th, td {\r\n   border: 1px solid rgb(100, 33, 33);\r\n}\r\n.abtn{\r\n    background-color:rgb(218, 185, 164);\r\n    color: rgb(53, 46, 46);\r\n    text-align: center;\r\n    display: block;\r\n    margin-left:600px;\r\n    margin-top:50px;\r\n    border: 1px solid rgb(53, 46, 46);\r\n    font-weight: 600;\r\n}"

/***/ }),

/***/ "./src/app/prevoznici/get/get.component.html":
/*!***************************************************!*\
  !*** ./src/app/prevoznici/get/get.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lista prevoznika </h2>\n<table class=\"table table-bordered table-hover tabela\" style=\"margin-top:30px;\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th class=\"text-center a\" scope=\"col\">#</th>\n        <th class=\"text-center a\" scope=\"col\">Ime prevoznika</th>\n        <th class=\"text-center a\" scope=\"col\">Kontakt</th>\n        <th class=\"text-center a\" scope=\"col\" *ngIf=\"isAdmin\"></th>\n        \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let prevoznik of prevoznici; index as i;\">\n        <th class=\"text-center\" scope=\"row\">{{i+1}}</th>\n        <td class=\"text-center\" (click)=\"navigateTo(prevoznik)\">{{prevoznik.imePrevoznika}}</td>\n        <td class=\"text-center\">{{prevoznik.kontakt}}</td>\n        <td *ngIf=\"isAdmin\" class=\"text-center\"> <button type=\"button\" (click)=\"deletePrev(prevoznik)\" class=\"btn btn-danger\">delete</button>\n        \n      </tr>\n    </tbody>\n    \n  </table>\n\n  <div>\n      <button type=\"button\" *ngIf=\"isAdmin\" (click)=\"addPrevoznik()\" class=\"btn abtn\">Dodaj prevoznika</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/prevoznici/get/get.component.ts":
/*!*************************************************!*\
  !*** ./src/app/prevoznici/get/get.component.ts ***!
  \*************************************************/
/*! exports provided: GetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetComponent", function() { return GetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_prevoznik_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/prevoznik.service */ "./src/app/services/prevoznik.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetComponent = /** @class */ (function () {
    function GetComponent(router, prevoznikServ, toastr) {
        this.router = router;
        this.prevoznikServ = prevoznikServ;
        this.toastr = toastr;
    }
    GetComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.getItem('admin') == "1" ? (this.isAdmin = true) : (this.isAdmin = false);
        this.prevoznikServ.getPrevoznici().subscribe(function (data) {
            _this.prevoznici = data.obj;
        });
    };
    GetComponent.prototype.deletePrev = function (prevoznik) {
        //brisanje sa sarvera
        this.prevoznikServ.deletePrev(prevoznik).subscribe();
        //brisanje iz niza za prikaz
        var index = this.prevoznici.indexOf(prevoznik);
        if (index > -1) {
            this.prevoznici.splice(index, 1);
        }
        this.toastr.success('Prevoznik je uspešno obrisan!', '', {
            closeButton: true,
            positionClass: 'toast-bottom-left'
        });
    };
    GetComponent.prototype.navigateTo = function (prevoznik) {
        this.router.navigate(['/prevoznici/getputanja/' + prevoznik._id]);
    };
    GetComponent.prototype.addPrevoznik = function () {
        this.router.navigate(['/admin/addPrevoznik']);
    };
    GetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get',
            template: __webpack_require__(/*! ./get.component.html */ "./src/app/prevoznici/get/get.component.html"),
            styles: [__webpack_require__(/*! ./get.component.css */ "./src/app/prevoznici/get/get.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_prevoznik_service__WEBPACK_IMPORTED_MODULE_2__["PrevoznikService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], GetComponent);
    return GetComponent;
}());



/***/ }),

/***/ "./src/app/prevoznici/getputanja/getputanja.component.css":
/*!****************************************************************!*\
  !*** ./src/app/prevoznici/getputanja/getputanja.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-fill {\r\n    margin-top:60px;\r\n    background: white;\r\n    border-radius:3px;\r\n    border-collapse: collapse;\r\n    height:auto;\r\n    margin: auto;\r\n    max-width: 600px;\r\n    padding:5px;\r\n    width: 100%;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n}\r\ntr:hover td {\r\n    background:#4E5066;\r\n    color:#FFFFFF;\r\n    border-top: 1px solid #4a5569;\r\n  }\r\ntr:nth-child(even) td{\r\n    background-color: rgb(218, 185, 164);\r\n  }\r\ntr:nth-child(odd):hover td {\r\n    background:#4E5066;\r\n  }\r\ntr:nth-child(even):hover td {\r\n    background:#4E5066;\r\n  }\r\nth{\r\n    background-color: rgb(218, 185, 164);\r\n    color:white;\r\n}\r\nth.a{\r\n    color:white;\r\n    background-color: rgb(218, 185, 164);\r\n}\r\n.btnDodaj{\r\n    background-color:rgb(218, 185, 164);\r\n    color: rgb(53, 46, 46);\r\n    text-align: center;\r\n    margin-left:400px;\r\n    margin-top:50px;\r\n    border: 1px solid rgb(53, 46, 46);\r\n    font-weight: 600;\r\n}"

/***/ }),

/***/ "./src/app/prevoznici/getputanja/getputanja.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/prevoznici/getputanja/getputanja.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-fill\" style=\"margin-top:30px;\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th class=\"text-center a\" scope=\"col\">#</th>\n      <th class=\"text-center a\" scope=\"col\">Vreme polaska</th>\n      <th class=\"text-center a\" scope=\"col\">Ruta</th>\n      <th class=\"text-center a\" scope=\"col\" *ngIf=\"isAdmin\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let putanja of putanje; index as i;\">\n      <th class=\"text-center\" scope=\"row\">{{i+1}}</th>\n      <td class=\"text-center\">{{putanja.vremePolaska}}</td>\n      <td class=\"text-center\">{{putanja.ruta}}</td>\n      <td *ngIf=\"isAdmin\" class=\"text-center\"> <button type=\"button\" (click)=\"deletePutanja(putanja)\" class=\"btn btn-danger\">delete</button>\n    </tr>\n  </tbody>\n</table>\n\n    <div>\n    <button type=\"button\" *ngIf=\"isAdmin\" (click)=\"addPutanja()\" class=\"btn btnDodaj\">Dodaj putanju</button>\n    </div>\n"

/***/ }),

/***/ "./src/app/prevoznici/getputanja/getputanja.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/prevoznici/getputanja/getputanja.component.ts ***!
  \***************************************************************/
/*! exports provided: GetputanjaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetputanjaComponent", function() { return GetputanjaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_putanja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/putanja.service */ "./src/app/services/putanja.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rezervacije.service */ "./src/app/services/rezervacije.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetputanjaComponent = /** @class */ (function () {
    function GetputanjaComponent(router, putanjaServ, route, rezervacijaServ, toastr) {
        this.router = router;
        this.putanjaServ = putanjaServ;
        this.route = route;
        this.rezervacijaServ = rezervacijaServ;
        this.toastr = toastr;
    }
    GetputanjaComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.getItem('admin') == "1" ? (this.isAdmin = true) : (this.isAdmin = false);
        this.route.paramMap.subscribe(function (params) {
            _this.taken = params.get('id');
            _this.putanjaServ.getPutanja(_this.taken).subscribe(function (data) {
                _this.putanje = data.obj;
                for (var i = 0; i < _this.putanje.length; i++) {
                    for (var j = i + 1; j < _this.putanje.length; j++) {
                        var vreme1 = _this.putanje[i].vremePolaska.split(':');
                        var sati1 = parseInt(vreme1[0]);
                        var minuti1 = parseInt(vreme1[1]) + sati1 * 60;
                        var vreme2 = _this.putanje[j].vremePolaska.split(':');
                        var sati2 = parseInt(vreme2[0]);
                        var minuti2 = parseInt(vreme2[1]) + sati2 * 60;
                        if (minuti1 > minuti2) {
                            var m = _this.putanje[i];
                            _this.putanje[i] = _this.putanje[j];
                            _this.putanje[j] = m;
                        }
                    }
                }
            });
        });
    };
    GetputanjaComponent.prototype.deletePutanja = function (putanja) {
        //brisanje sa sarvera
        this.putanjaServ.deletePutanja(putanja).subscribe();
        //brisanje iz niza za prikaz
        var index = this.putanje.indexOf(putanja);
        if (index > -1) {
            this.putanje.splice(index, 1);
        }
        this.toastr.success('Putanja je uspešno obrisana!', '', {
            closeButton: true,
            positionClass: 'toast-bottom-left'
        });
    };
    GetputanjaComponent.prototype.addPutanja = function () {
        this.router.navigate(['/admin/addputanja/' + this.taken]);
    };
    GetputanjaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getputanja',
            template: __webpack_require__(/*! ./getputanja.component.html */ "./src/app/prevoznici/getputanja/getputanja.component.html"),
            styles: [__webpack_require__(/*! ./getputanja.component.css */ "./src/app/prevoznici/getputanja/getputanja.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_putanja_service__WEBPACK_IMPORTED_MODULE_2__["PutanjaService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_4__["RezervacijeService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], GetputanjaComponent);
    return GetputanjaComponent;
}());



/***/ }),

/***/ "./src/app/prevoznici/prevoznici-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/prevoznici/prevoznici-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PrevozniciRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevozniciRoutingModule", function() { return PrevozniciRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_get_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get/get.component */ "./src/app/prevoznici/get/get.component.ts");
/* harmony import */ var _getputanja_getputanja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getputanja/getputanja.component */ "./src/app/prevoznici/getputanja/getputanja.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'get', component: _get_get_component__WEBPACK_IMPORTED_MODULE_2__["GetComponent"] },
    { path: 'getputanja/:id', component: _getputanja_getputanja_component__WEBPACK_IMPORTED_MODULE_3__["GetputanjaComponent"] }
];
var PrevozniciRoutingModule = /** @class */ (function () {
    function PrevozniciRoutingModule() {
    }
    PrevozniciRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PrevozniciRoutingModule);
    return PrevozniciRoutingModule;
}());



/***/ }),

/***/ "./src/app/prevoznici/prevoznici.module.ts":
/*!*************************************************!*\
  !*** ./src/app/prevoznici/prevoznici.module.ts ***!
  \*************************************************/
/*! exports provided: PrevozniciModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevozniciModule", function() { return PrevozniciModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _prevoznici_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prevoznici-routing.module */ "./src/app/prevoznici/prevoznici-routing.module.ts");
/* harmony import */ var _get_get_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get/get.component */ "./src/app/prevoznici/get/get.component.ts");
/* harmony import */ var _getputanja_getputanja_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getputanja/getputanja.component */ "./src/app/prevoznici/getputanja/getputanja.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PrevozniciModule = /** @class */ (function () {
    function PrevozniciModule() {
    }
    PrevozniciModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _prevoznici_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrevozniciRoutingModule"]
            ],
            declarations: [_get_get_component__WEBPACK_IMPORTED_MODULE_3__["GetComponent"], _getputanja_getputanja_component__WEBPACK_IMPORTED_MODULE_4__["GetputanjaComponent"]]
        })
    ], PrevozniciModule);
    return PrevozniciModule;
}());



/***/ }),

/***/ "./src/app/services/error.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_error_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/error.model */ "./src/app/model/error.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOccurred = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //constructor() { }
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new _model_error_model__WEBPACK_IMPORTED_MODULE_1__["Error"](error.status, error._body);
        this.errorOccurred.emit(errorData);
    };
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/services/prevoznik.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/prevoznik.service.ts ***!
  \***********************************************/
/*! exports provided: PrevoznikService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevoznikService", function() { return PrevoznikService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //radimo sa observables


var PrevoznikService = /** @class */ (function () {
    function PrevoznikService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/';
    }
    PrevoznikService.prototype.getPrevoznici = function () {
        var _this = this;
        return this.http.get(this.rootUrl + 'prevoznik/get').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PrevoznikService.prototype.addPrevoznici = function (prevoznik) {
        var _this = this;
        var body = JSON.stringify(prevoznik); //ono sto je korisnik uneo u formi, prebacujemo u json da bismo te podatke mogli poslati
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }); //u hederu navodimo da se radi o poruci koja sadrzi json
        return this.http.post(this.rootUrl + 'prevoznik/add', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PrevoznikService.prototype.deletePrev = function (prevoznik) {
        var _this = this;
        var body = JSON.stringify(prevoznik);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'prevoznik/delete', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PrevoznikService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], PrevoznikService);
    return PrevoznikService;
}());



/***/ }),

/***/ "./src/app/services/putanja.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/putanja.service.ts ***!
  \*********************************************/
/*! exports provided: PutanjaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutanjaService", function() { return PutanjaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //radimo sa observables


var PutanjaService = /** @class */ (function () {
    function PutanjaService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/';
    }
    //metoda za izlistavanje putanja 
    PutanjaService.prototype.getPutanja = function (id) {
        var _this = this;
        return this.http.get(this.rootUrl + 'prevoznik/getputanja/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    //pronalazenje svih ruta
    PutanjaService.prototype.getAllRoutes = function (params) {
        var _this = this;
        return this.http.get(this.rootUrl + 'putanje/find/' + params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    //metoda za dodavanje putanje
    PutanjaService.prototype.addPutanja = function (objekat) {
        var _this = this;
        var body = JSON.stringify(objekat);
        //za sad samo ovo, posle ces dodavati za autorizaciju i tokene
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'prevoznik/addputanja/', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PutanjaService.prototype.deletePutanja = function (putanja) {
        var _this = this;
        var body = JSON.stringify(putanja);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'putanje/delete', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    PutanjaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], PutanjaService);
    return PutanjaService;
}());



/***/ }),

/***/ "./src/app/services/rezervacije.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/rezervacije.service.ts ***!
  \*************************************************/
/*! exports provided: RezervacijeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RezervacijeService", function() { return RezervacijeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //radimo sa observables


var RezervacijeService = /** @class */ (function () {
    function RezervacijeService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/';
    }
    RezervacijeService.prototype.getRezervacije = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'rezervacije/findspecified', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    RezervacijeService.prototype.addRezervacija = function (rezervacija) {
        var _this = this;
        var body = JSON.stringify(rezervacija); //pretvara objekat u string
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.post(this.rootUrl + 'rezervacije/add', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    RezervacijeService.prototype.getAllRezervacije = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl + 'rezervacije/findAll', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    RezervacijeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], RezervacijeService);
    return RezervacijeService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //radimo sa observables



var UserService = /** @class */ (function () {
    //injektujemo http modul u konstruktor
    function UserService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.rootUrl = '/';
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentMessage = this.messageSource.asObservable();
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        var body = JSON.stringify(user); //ono sto je korisnik uneo u formi, prebacujemo u json da bismo te podatke mogli poslati
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' }); //u hederu navodimo da se radi o poruci koja sadrzi json
        return this.http.post(this.rootUrl + 'user/register', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        })
        //saljemo post zahtev na rutu localhost:3000/users/register , taj zahtev ima promenljivi body i zaglavlje u kome pise da se radi
        //o json objektu
        //odgovor "Response" pretvaramo u json i on ce stici u komponentu login, dok u slucaju da je doslo do greske
        //sifre se ne slazu, nalog ne postoji, onda ce te greske ici na errorService
        );
    };
    UserService.prototype.changeMessage = function (user) {
        this.messageSource.next(user);
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'user/login', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.errorService.handleError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    UserService.prototype.isLoggedIn = function () {
        //proverava da li je token u local storage-u null ili ne(da li je neko prijavljen ili ne)
        return localStorage.getItem('token') !== null;
    };
    //logout dodajemo samo u servis, i moras u navbaru podesiti za njega deo
    UserService.prototype.logout = function () {
        localStorage.clear(); //cistimo da bismo obrisali token
        this.changeMessage(1);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/get-rezervacije/get-rezervacije.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/users/get-rezervacije/get-rezervacije.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabela{\r\n    overflow: hidden;\r\n\t  width: 80%;\r\n\t  margin: 0 auto;\r\n  display: table;\r\n  padding: 0 0 8em 0;\r\n  border: 1px solid rgb(94, 67, 67);\r\n  margin-bottom:20px;\r\n}\r\n.tabela th {\r\n    background-color: rgb(218, 185, 164);\r\n}\r\n.tabela td{\r\n    color: rgb(53, 46, 46); text-align:center;\r\n}\r\n.tabela th, td {\r\n    border: 1px solid rgb(100, 33, 33);\r\n }\r\nh2{\r\n    font-weight: 700;\r\n    text-align: center;\r\n    display: block;\r\n    line-height:1em;\r\n    padding-bottom: 2px;\r\n    padding-top:30px;\r\n    color: rgb(70, 61, 63);\r\n  }"

/***/ }),

/***/ "./src/app/users/get-rezervacije/get-rezervacije.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/users/get-rezervacije/get-rezervacije.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Vaše rezervacije</h2>\n<table class=\"table table-bordered table-hover tabela\" style=\"margin-top:30px;\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th class=\"text-center\" scope=\"col\">#</th>\n      <th class=\"text-center\" scope=\"col\">Ruta</th>\n      <th class=\"text-center\" scope=\"col\">Prevoznik</th>\n      <th class=\"text-center\" scope=\"col\">Datum polaska</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rezervacija of rezervacije; index as i;\">\n      <th class=\"text-center\" scope=\"row\">{{i+1}}</th>\n      <td class=\"text-center\" >{{rezervacija.destinacija}}</td>\n      <td class=\"text-center\">{{rezervacija.prevoznik}}</td>\n      <td class=\"text-center\">{{rezervacija.datumPolaska}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/users/get-rezervacije/get-rezervacije.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/users/get-rezervacije/get-rezervacije.component.ts ***!
  \********************************************************************/
/*! exports provided: GetRezervacijeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRezervacijeComponent", function() { return GetRezervacijeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rezervacije.service */ "./src/app/services/rezervacije.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetRezervacijeComponent = /** @class */ (function () {
    function GetRezervacijeComponent(router, rezervacijaServ) {
        this.router = router;
        this.rezervacijaServ = rezervacijaServ;
    }
    GetRezervacijeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rezervacijaServ.getRezervacije().subscribe(function (data) {
            _this.rezervacije = data;
        });
    };
    GetRezervacijeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-rezervacije',
            template: __webpack_require__(/*! ./get-rezervacije.component.html */ "./src/app/users/get-rezervacije/get-rezervacije.component.html"),
            styles: [__webpack_require__(/*! ./get-rezervacije.component.css */ "./src/app/users/get-rezervacije/get-rezervacije.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_rezervacije_service__WEBPACK_IMPORTED_MODULE_2__["RezervacijeService"]])
    ], GetRezervacijeComponent);
    return GetRezervacijeComponent;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login { \r\n\tposition: absolute;\r\n\ttop: 40%;\r\n\tleft: 50%;\r\n\tmargin: -150px 0 0 -150px;\r\n\twidth:300px;\r\n    height:300px;\r\n}\r\ninput {\r\n    border: 1px solid #4d3f9e;\r\n    padding: 0 0 0 10px;\r\n    font-size: 14px;\r\n}\r\n.login h1 { color: rgb(53, 46, 46); text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }\r\n.labela{\r\n    letter-spacing:1px; \r\n    text-align:center;\r\n    color: rgb(53, 46, 46);\r\n    text-shadow: 0 0 10px rgba(0,0,0,0.3);\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 content login\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onLoginSubmit()\" class=\"form-signin\">\n            <img  src=\"../assets/slike/bus.png\" alt=\"\" width=\"100\" height=\"100\">\n        <h1 class=\"h3 mb-3 pt-3 font-weight-normal\">Login</h1>\n        <div class=\"form-group\">\n            <label class=\"labela\" for=\"email\">Email</label>\n            <input name=\"email\" type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" required autocomplete=\"email\">\n        </div>\n        <div class=\"form-group\">\n            <label class=\"labela\" for=\"password\">Password</label>\n            <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" required \n            autocomplete=\"current-password\">\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!form.valid\" type=\"submit\">Login</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = new _model_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](this.form.value.email, this.form.value.password);
        //kada primimo podatke, resetujemo formu, upisujemo korisniku token
        //data je response ...
        this.userService.login(user).subscribe(function (data) {
            if (data.success == false) {
                _this.toastr.error(data.msg, '', {
                    closeButton: true,
                    positionClass: 'toast-top-center'
                });
                _this.form.reset();
            }
            else {
                _this.form.reset();
                localStorage.setItem('token', data.token);
                localStorage.setItem('admin', data.user.admin);
                _this.toastr.success('Login successful!', '', {
                    closeButton: true,
                    positionClass: 'toast-top-center'
                });
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    margin-top: 105px;\r\n    margin-left: 300px;\r\n  }\r\n\r\n  .registration { \r\n\tposition: absolute;\r\n\ttop:10%;\r\n    left: 50%;\r\n    margin-left:500px;\r\n    margin-right:50px;\r\n\twidth:300px;\r\n    height:100px;\r\n}\r\n\r\n  h2{\r\n    color: rgb(53, 46, 46); text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center;\r\n}\r\n\r\n  input {\r\n    margin-top:+20px;\r\n    border: 1px solid #e9451c;\r\n    padding: 0 20 0 10px;\r\n    font-size: 14px;\r\n}\r\n\r\n  input:focus{\r\n    border: 1px solid #e9451c;\r\n    background:white;\r\n}\r\n\r\n  .btn{\r\n    background-color:#352b23;\r\n    color:#f7f2ef\r\n}"

/***/ }),

/***/ "./src/app/users/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"needs-validation col-md-4 col-md-offset-2 content\">\n    \n    <img src=\"../assets/slike/fastbus.png\" alt=\"\" width=\"300\" height=\"300\" class=\"logo\">\n    <div class=\"registration\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <h2>Register</h2>\n        <div class=\"form-group\">\n            \n            <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"First name\" formControlName=\"name\" autocomplete=\"name\">\n        </div>\n\n        <div class=\"form-group\">\n            \n            <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" autocomplete=\"username\">\n            <div *ngIf=\"form.controls['username'].errors && !form.controls['username'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['username'].errors.required\">\n                    Valid username is required.\n                </div>\n                <div [hidden]=\"!form.controls['username'].errors.minlength\">\n                    Username is too short.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            \n            <input type=\"email\" id=\"email\" placeholder=\"johndoe@example.com\" class=\"form-control\" formControlName=\"email\" autocomplete=\"email\">\n            <div *ngIf=\"form.controls['email'].errors && !form.controls['email'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['email'].errors.required\">\n                    Valid email is required.\n                </div>\n                <div [hidden]=\"!form.controls['email'].errors.email\">\n                  Valid email is required.\n              </div>\n              </div>\n        </div>\n\n        <div class=\"form-group\">\n            \n            <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" autocomplete=\"password\">\n            <div *ngIf=\"form.controls['password'].errors && !form.controls['password'].pristine\" class=\"error-msg\">\n                <div [hidden]=\"!form.controls['password'].errors.required\">\n                    Valid password is required.\n                </div>\n                <div [hidden]=\"!form.controls['password'].errors.minlength\">\n                    Password is too short.\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            \n                <input type=\"password\" id=\"repeatpassword\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"repeatpassword\" autocomplete=\"repeatpassword\">\n                <div *ngIf=\"form.controls['repeatpassword'].errors && !form.controls['repeatpassword'].pristine\" class=\"error-msg\">\n                    <div [hidden]=\"!form.controls['repeatpassword'].errors.required\">\n                        Please confirm password\n                    </div>\n                    <div *ngIf=\"form.controls['password'].value!=form.controls['repeatpassword'].value\">\n                            Passwords doesn't match.\n                          </div>\n                </div>\n            </div>\n        \n            <hr class=\"mb-4\">\n            <button class=\"btn btn-lg btn-block\" type=\"submit\" [disabled]=\"!form.valid||form.controls['password'].value!=form.controls['repeatpassword'].value\">Register</button>\n          \n        \n       \n    </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/users/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//upravljanje formama i rutiranje



//uvodimo servis UserService i moras ga injektovati u konstruktor


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            repeatpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        //kreiramo objekat
        var user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.form.value.email, this.form.value.password, this.form.value.name, this.form.value.username.toLowerCase());
        //RegisterUser
        //posto je observabla, moramo da se subscribujemo
        this.userService.register(user).subscribe(function (data) {
            if (data.success == false) {
                _this.toastr.error(data.msg, '', {
                    closeButton: true,
                    positionClass: 'toast-top-center'
                });
                _this.form.reset();
            }
            else {
                //resetujes inpute
                _this.form.reset();
                _this.toastr.success(data.msg, '', {
                    closeButton: true,
                    positionClass: 'toast-top-center'
                });
                //saljemo korisnika da se loguje
                _this.router.navigate(['/users/login']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _get_rezervacije_get_rezervacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-rezervacije/get-rezervacije.component */ "./src/app/users/get-rezervacije/get-rezervacije.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'getrezervacije', component: _get_rezervacije_get_rezervacije_component__WEBPACK_IMPORTED_MODULE_4__["GetRezervacijeComponent"] }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _get_rezervacije_get_rezervacije_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-rezervacije/get-rezervacije.component */ "./src/app/users/get-rezervacije/get-rezervacije.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _get_rezervacije_get_rezervacije_component__WEBPACK_IMPORTED_MODULE_6__["GetRezervacijeComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sara\Desktop\projekat\AngularFile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map