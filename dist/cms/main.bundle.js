webpackJsonp([1],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictatenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DictatenService = (function () {
    function DictatenService(wdapi) {
        this.wdapi = wdapi;
    }
    DictatenService.prototype.addDictaat = function (dictaatName) {
        return this.wdapi.post('/dictaten', { name: dictaatName })
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    DictatenService.prototype.getDictaten = function () {
        return this.wdapi.get('/dictaten')
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    DictatenService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], DictatenService);
    return DictatenService;
    var _a;
}());
//# sourceMappingURL=dictaten.service.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesService = (function () {
    function PagesService(wdapi) {
        this.wdapi = wdapi;
    }
    PagesService.prototype.getPages = function (dictaatName) {
        return this.wdapi.get("/dictaten/" + dictaatName + "/pages")
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.addPage = function (dictaatName, page, menuName) {
        var data = {
            page: page,
            subMenu: menuName
        };
        var url = "/dictaten/" + dictaatName + '/pages';
        return this.wdapi.post(url, data)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.editPage = function (dictaatName, page) {
        var url = "/dictaten/" + dictaatName + '/pages/' + page.name;
        return this.wdapi.put(url, page)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.getPage = function (dictaatName, pageName) {
        var url = "/dictaten/" + dictaatName + '/pages/' + pageName;
        return this.wdapi.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PagesService.prototype.deletePage = function (dictaatName, pageName) {
        var url = "/dictaten/" + dictaatName + '/pages' + pageName;
        return this.wdapi.delete(url)
            .toPromise()
            .then(function (response) { return response; });
    };
    PagesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], PagesService);
    return PagesService;
    var _a;
}());
//# sourceMappingURL=pages.service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* unused harmony export DialogData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogData = (function () {
    function DialogData() {
    }
    return DialogData;
}());
var DialogService = (function () {
    function DialogService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    DialogService.prototype.showDialog = function (title, content) {
        this.dialogData = { Title: title, Content: content };
        this.subject.next(this.dialogData);
    };
    DialogService.prototype.getDialogData = function () {
        return this.subject.asObservable();
    };
    DialogService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DialogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DialogService);
    return DialogService;
    var _a;
}());
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_basemodal_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageService = (function (_super) {
    __extends(ImageService, _super);
    function ImageService(wdapi) {
        _super.call(this);
        this.wdapi = wdapi;
    }
    ImageService.prototype.addImages = function (dictaatName, image) {
        var url = "/dictaten/" + dictaatName + '/upload';
        return this.wdapi.postFile(url, image);
    };
    ImageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ImageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], ImageService);
    return ImageService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__core_basemodal_service__["a" /* BaseModalService */]));
//# sourceMappingURL=images.service.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseModalService = (function () {
    function BaseModalService() {
        this.isModalVisible = false;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    BaseModalService.prototype.getIsModalVisible = function () {
        return this.subject.asObservable();
    };
    BaseModalService.prototype.ShowModal = function () {
        var _this = this;
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise(function (resolve, reject) {
            _this.resolveComplete = resolve;
            _this.resolveCancel = reject;
        });
    };
    BaseModalService.prototype.CancelModal = function () {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    BaseModalService.prototype.CompleteModal = function (objectToResolve) {
        this.resolveComplete(objectToResolve);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    BaseModalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], BaseModalService);
    return BaseModalService;
}());
//# sourceMappingURL=basemodal.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirtyGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirtyGuard = (function () {
    function DirtyGuard() {
    }
    DirtyGuard.prototype.canDeactivate = function (component) {
        if (component.isDirty()) {
            return confirm("You have unsaved changes. Would you like to discard these changes?");
        }
        return true;
    };
    DirtyGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DirtyGuard);
    return DirtyGuard;
}());
//# sourceMappingURL=dirty.guard.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = (function () {
    function DemoComponent() {
    }
    DemoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-demo",
            template: "\n    <div class=\"container-fluid\">\n        <h2>Demo project </h2>\n        <wd-achievements></wd-achievements>\n    </div>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
}());
//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dictaat_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictaatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DictaatComponent = (function () {
    function DictaatComponent(dictaatService, route, Router) {
        this.dictaatService = dictaatService;
        this.route = route;
        this.Router = Router;
    }
    //event
    DictaatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var name = params['dictaatName'];
            _this.dictaatService.getDictaat(name)
                .then(function (dictaat) {
                _this.dictaat = dictaat;
            });
        });
    };
    DictaatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-dictaat",
            template: __webpack_require__(564),
            styles: [__webpack_require__(558)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_dictaat_service__["a" /* DictaatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dictaat_service__["a" /* DictaatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_dictaat_service__["a" /* DictaatService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DictaatComponent);
    return DictaatComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=dictaat.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictatenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DictatenComponent = (function () {
    function DictatenComponent(accountService, dictatenService, httpService, router) {
        this.accountService = accountService;
        this.dictatenService = dictatenService;
        this.httpService = httpService;
        this.router = router;
        this.loaderValue = 0;
    }
    DictatenComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fake loader :D
        var timer = __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].timer(0, 25);
        timer.subscribe(function (t) {
            if (_this.loaderValue == 100) {
                _this.loaderValue++;
            }
        });
        this.accountService.getUser().subscribe(function (user) { return _this.isAuth = user != null; });
        this.accountService.update();
        this.dictatenService.getDictaten()
            .then(function (dictaten) { return _this.dictaten = dictaten; });
    };
    DictatenComponent.prototype.setDictaten = function (dictaten) {
        this.dictaten = dictaten;
    };
    DictatenComponent.prototype.gotoDetail = function (dictaat) {
        var link = ['/dictaten', dictaat.name];
        this.router.navigate(link);
    };
    DictatenComponent.prototype.login = function () {
        this.accountService.Login();
    };
    DictatenComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-dictaten",
            template: __webpack_require__(566),
            styles: [__webpack_require__(559)],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__["a" /* DictatenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__["a" /* DictatenService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], DictatenComponent);
    return DictatenComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=dictaten.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiple_choice_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rating_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__achievements_component__ = __webpack_require__(532);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameElementsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameElementsModule = (function () {
    function GameElementsModule() {
    }
    GameElementsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__multiple_choice_component__["a" /* MultipleChoiceComponent */], __WEBPACK_IMPORTED_MODULE_4__rating_component__["a" /* RatingComponent */], __WEBPACK_IMPORTED_MODULE_5__achievements_component__["a" /* AchievementsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__multiple_choice_component__["a" /* MultipleChoiceComponent */], __WEBPACK_IMPORTED_MODULE_4__rating_component__["a" /* RatingComponent */], __WEBPACK_IMPORTED_MODULE_5__achievements_component__["a" /* AchievementsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], GameElementsModule);
    return GameElementsModule;
}());
//# sourceMappingURL=game-elements.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Rate; });
var Rating = (function () {
    function Rating() {
        this.description = false;
    }
    return Rating;
}());
var Rate = (function () {
    function Rate() {
    }
    return Rate;
}());
//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_html_component__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPageComponent = (function () {
    function EditPageComponent(route, pagesService, router) {
        this.route = route;
        this.pagesService = pagesService;
        this.router = router;
        this.selectedTab = "text";
    }
    EditPageComponent.prototype.isDirty = function () {
        var editedSource = this.htmlComponent.decompileHtml();
        var dirty = this.originalSource != editedSource;
        return dirty;
    };
    EditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.pageName = params['pageName'];
            _this.dictaatName = params['dictaatName'];
            _this.pagesService.getPage(_this.dictaatName, _this.pageName)
                .then(function (page) {
                _this.page = page;
                _this.originalSource = _this.page.source; //required for the dirty flag
            });
        });
    };
    EditPageComponent.prototype.savePage = function () {
        var _this = this;
        this.pagesService.editPage(this.dictaatName, this.page)
            .then(function (page) {
            _this.page = page;
            _this.originalSource = _this.page.source; //required for the dirty flag
        });
    };
    EditPageComponent.prototype.updateSource = function (pageSource) {
        this.page.source = pageSource;
        this.savePage();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__tools_html_component__["a" /* HtmlComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__tools_html_component__["a" /* HtmlComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__tools_html_component__["a" /* HtmlComponent */]) === 'function' && _a) || Object)
    ], EditPageComponent.prototype, "htmlComponent", void 0);
    EditPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-edit-page",
            template: __webpack_require__(569),
            styles: [__webpack_require__(561)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__pages_service__["a" /* PagesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__pages_service__["a" /* PagesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__pages_service__["a" /* PagesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], EditPageComponent);
    return EditPageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=edit-page.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(dictatenService, accountService) {
        this.dictatenService = dictatenService;
        this.accountService = accountService;
        this.msg = "hello world";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) { return _this.user = user; });
        this.dictatenService.getDictaten()
            .then(function (dictaten) { return _this.dictaten = dictaten; });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-profile",
            template: __webpack_require__(571),
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__["a" /* DictatenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__["a" /* DictatenService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictaatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DictaatService = (function () {
    function DictaatService(wdapi) {
        this.wdapi = wdapi;
    }
    DictaatService.prototype.getDictaat = function (dictaatName) {
        return this.wdapi.get("/dictaten/" + dictaatName)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    DictaatService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], DictaatService);
    return DictaatService;
    var _a;
}());
//# sourceMappingURL=dictaat.service.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $;
var HtmlComponent = (function () {
    function HtmlComponent(dialogService, changeDetector, zone) {
        var _this = this;
        this.dialogService = dialogService;
        this.changeDetector = changeDetector;
        this.zone = zone;
        this.editableElements = ".wd-editable, p, span, h1, h2, h3, h4, h5";
        this.containerElements = ".wd-container";
        this.pageEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onDrop = function (event, ui) {
            var target = ui.item.data("component");
            if (!target)
                return; //Sometimes we drop components that do not need any enhancement
            target.onDrop(ui).then(function (needsRecompile) {
                //If the component needs a recompile, we do a full rerender of the components.
                //Otherwise, we just do some class enhancement 
                if (needsRecompile) {
                    _this.recompile();
                }
                else {
                    ui.item
                        .removeAttr('style')
                        .find(_this.editableElements)
                        .attr("contenteditable", "true");
                    _this.pageElement.find('.wd-container').find(_this.editableElements)
                        .attr("contenteditable", "true");
                    //Als het gedropte item sub containers bevat, even drop enable
                    _this.enableContainers(ui.item);
                    //Helaas nodig omdat browsers stom doen omtrent content editable
                    _this.solveEnterIssue(ui.item);
                    //Omdat het soms even duurt voordat een component kan renderen, moeten we hier even op wachten.
                    //De focues 'refresht' het scherm zogenaamd. 
                    setTimeout(function () { return ui.item.focus(); }, 0);
                }
                _this.recompile();
            });
        };
    }
    HtmlComponent.prototype.ngOnInit = function () {
        this.pageElement = $('#page'); //.html(this.innerHTML);
    };
    HtmlComponent.prototype.ngOnChanges = function () {
    };
    HtmlComponent.prototype.compileHtml = function (html) {
        this.innerHTML = html;
        this.changeDetector.detectChanges();
    };
    /**
     * Na het compileren moeten er een aantal klasse worden toegevoegd
     */
    HtmlComponent.prototype.afterCompile = function () {
        this.enableContainers(this.pageElement);
        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");
        this.solveEnterIssue(this.pageElement.find(this.editableElements));
        this.zone.run(function () { }); //Get back into angular running context
    };
    HtmlComponent.prototype.decompileHtml = function () {
        //ophalen html
        var pageObject = this.pageElement.find("dynamic-html");
        //var lin = $(this).attr('href'); //verwijderen van ng-reflect voor id's
        pageObject.find(".wd-game-component").empty(); //leeg maken van gecompileerde componenten
        pageObject.find('*').removeAttr("contenteditable"); //verwijder contenteditable van elementen
        //verwijder alle classes van jquery-ui (beginnnen met ui)
        pageObject.find('*').removeClass(function (index, className) {
            return (className.match(/(^|\s)ui-\S+/g) || []).join(' ');
        });
        var htmlString = pageObject.html();
        htmlString = htmlString.replace(/ng-reflect-(.+?)=/g, '[$1]=');
        return htmlString;
    };
    HtmlComponent.prototype.recompile = function () {
        this.compileHtml(this.decompileHtml());
    };
    HtmlComponent.prototype.savePage = function () {
        this.pageEdited.emit(this.decompileHtml());
    };
    HtmlComponent.prototype.enableContainers = function (element) {
        element.find('.wd-container').sortable({
            connectWith: '.wd-container, #wd-trash',
            cancel: this.editableElements,
            hoverClass: "ui-state-hover",
            beforeStop: this.onDrop,
            placeholder: "highlight",
            forcePlaceholderSize: true,
            forceHelperSize: true,
            start: function (e, ui) {
                ui.placeholder.height(ui.item.outerHeight());
                ui.item.addClass('dragged');
            },
            stop: function (e, ui) {
                ui.item.removeClass('dragged');
            }
        });
    };
    /**
     * Deze methode is nodig om beter om te gaan met de user input 'enter'.
     * Origineel zal de browser een div toevoegen. Dit is geen nette valide html.
     * Deze code snippet vervangt de div door een span.
     * @param element waarbij 'enters' vervangen moeten worden
     */
    HtmlComponent.prototype.solveEnterIssue = function (element) {
        element.on("keypress", function (e) {
            var changedElement = $(this);
            //if the last character is a zero-width space, remove it
            var contentEditableHTML = changedElement.html();
            var lastCharCode = contentEditableHTML.charCodeAt(contentEditableHTML.length - 1);
            if (lastCharCode == 8203) {
                changedElement.html(contentEditableHTML.slice(0, -1));
            }
            // handle "Enter" keypress
            if (e.which == 13) {
                if (window.getSelection) {
                    var selection = window.getSelection();
                    var range = selection.getRangeAt(0);
                    var br = document.createElement("br");
                    var zwsp = document.createTextNode("\u200B");
                    var textNodeParent = document.getSelection().anchorNode.parentNode;
                    var inSpan = textNodeParent.nodeName == "SPAN";
                    var span = document.createElement("span");
                    // if the carat is inside a <span>, move it out of the <span> tag
                    if (inSpan) {
                        range.setStartAfter(textNodeParent);
                        range.setEndAfter(textNodeParent);
                    }
                    // insert the <br>
                    range.deleteContents();
                    range.insertNode(br);
                    range.setStartAfter(br);
                    range.setEndAfter(br);
                    // create a new span on the next line
                    if (inSpan) {
                        range.insertNode(span);
                        range.setStart(span, 0);
                        range.setEnd(span, 0);
                    }
                    // add a zero-width character
                    range.insertNode(zwsp);
                    range.setStartBefore(zwsp);
                    range.setEndBefore(zwsp);
                    // insert the new range
                    selection.removeAllRanges();
                    selection.addRange(range);
                    return false;
                }
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], HtmlComponent.prototype, "innerHTML", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(), 
        __metadata('design:type', Object)
    ], HtmlComponent.prototype, "pageEdited", void 0);
    HtmlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-html",
            styles: ["\n    .code-editor{\n        width:100%;\n        max-width:100%;\n    }\n"],
            template: "\n  \n        <div id='page'>\n            <html-outlet  [html]=\"innerHTML\" (afterCompile)=\"afterCompile()\"></html-outlet>\n        </div>\n        <div class='panel-footer'>\n            <button class=\"btn btn-lg btn-success btn-raised\" (click)='savePage()'>\n                <span class=\"glyphicon glyphicon-floppy-disk pull-left\"></span>&nbsp;Save page\n            </button>\n        </div>\n    ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__["a" /* DialogService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === 'function' && _c) || Object])
    ], HtmlComponent);
    return HtmlComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=html.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wdApi; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var wdApi = (function () {
    function wdApi(http) {
        this.http = http;
        //public urlPrefix = 'http://student.aii.avans.nl/doc/ssmulder/api';
        //public urlPrefix = 'http://localhost:65418/api';
        //public urlPrefix = 'http://localhost:8001/api';
        //public urlPrefix = 'http://webdictaat.azurewebsites.net/api';
        this.urlPrefix = "http://webdictaat.aii.avans.nl/api";
    }
    wdApi.prototype.get = function (url) {
        return this.http.get(this.urlPrefix + url, { withCredentials: true }).catch(this.handleError);
    };
    wdApi.prototype.post = function (url, data) {
        return this.http.post(this.urlPrefix + url, data, { withCredentials: true }).catch(this.handleError);
    };
    wdApi.prototype.postFile = function (url, file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("file", file, file.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            debugger;
            xhr.open('POST', _this.urlPrefix + url, true);
            xhr.withCredentials = true;
            xhr.send(formData);
        });
    };
    wdApi.prototype.put = function (url, data) {
        return this.http.put(this.urlPrefix + url, data, { withCredentials: true }).catch(this.handleError);
    };
    wdApi.prototype.delete = function (url) {
        return this.http.delete(this.urlPrefix + url, { withCredentials: true }).catch(this.handleError);
    };
    wdApi.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    wdApi = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], wdApi);
    return wdApi;
    var _a;
}());
//# sourceMappingURL=wdapi.service.js.map

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 522;


/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_cms_app_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_ui__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery_ui__);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_cms_app_module__["a" /* CMSModule */]);
//# sourceMappingURL=main.cms.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-cms-app",
            styles: [__webpack_require__(557)],
            template: __webpack_require__(562),
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_questions_questions_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_images_images_module__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pages_pages_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_tools_tools_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_game_elements_game_elements_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_rating_add_rating_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_dictaten_add_dictaat_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_dictaten_dictaten_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_dialog_dialog_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_dictaat_dictaat_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_pages_edit_page_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_avatar_avatar_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_profile_profile_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_demo_demo_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_dialog_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_question_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_rating_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_images_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_dictaten_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_account_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_core_security_dirty_guard__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CMSModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























var CMSModule = (function () {
    function CMSModule() {
    }
    CMSModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__shared_tools_tools_module__["a" /* ToolsModule */], __WEBPACK_IMPORTED_MODULE_5__shared_questions_questions_module__["a" /* QuestionsModule */], __WEBPACK_IMPORTED_MODULE_6__shared_images_images_module__["a" /* ImagesModule */], __WEBPACK_IMPORTED_MODULE_9__shared_game_elements_game_elements_module__["a" /* GameElementsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_20__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_7__shared_pages_pages_module__["a" /* PagesModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__shared_demo_demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_dictaten_add_dictaat_component__["a" /* AddDictaatComponent */], __WEBPACK_IMPORTED_MODULE_14__shared_dialog_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_17__shared_avatar_avatar_component__["a" /* AvatarComponent */], __WEBPACK_IMPORTED_MODULE_11__shared_rating_add_rating_component__["a" /* AddRatingComponent */], __WEBPACK_IMPORTED_MODULE_18__shared_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_13__shared_dictaten_dictaten_component__["a" /* DictatenComponent */], __WEBPACK_IMPORTED_MODULE_15__shared_dictaat_dictaat_component__["a" /* DictaatComponent */], __WEBPACK_IMPORTED_MODULE_16__shared_pages_edit_page_component__["a" /* EditPageComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__shared_services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_22__shared_services_question_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_24__shared_services_images_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_26__shared_services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_27__shared_core_wdapi_service__["a" /* wdApi */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_rating_service__["a" /* RatingService */], __WEBPACK_IMPORTED_MODULE_25__shared_services_dictaten_service__["a" /* DictatenService */], __WEBPACK_IMPORTED_MODULE_28__shared_core_security_dirty_guard__["a" /* DirtyGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] },
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CMSModule);
    return CMSModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dictaten_dictaten_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dictaat_dictaat_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pages_edit_page_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_profile_profile_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_demo_demo_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_core_security_dirty_guard__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var appRoutes = [
    { path: '', redirectTo: '/dictaten', pathMatch: 'full' },
    {
        path: 'dictaten',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_dictaten_dictaten_component__["a" /* DictatenComponent */]
    },
    {
        path: 'dictaten/:dictaatName',
        component: __WEBPACK_IMPORTED_MODULE_2__shared_dictaat_dictaat_component__["a" /* DictaatComponent */]
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_pages_edit_page_component__["a" /* EditPageComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__shared_core_security_dirty_guard__["a" /* DirtyGuard */]],
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_4__shared_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_pages_edit_page_component__["a" /* EditPageComponent */]
    },
    { path: 'demo', component: __WEBPACK_IMPORTED_MODULE_5__shared_demo_demo_component__["a" /* DemoComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarComponent = (function () {
    function AvatarComponent(accountService) {
        this.accountService = accountService;
    }
    AvatarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    AvatarComponent.prototype.Login = function () {
        this.accountService.Login();
    };
    AvatarComponent.prototype.Logout = function () {
        this.accountService.Logoff();
    };
    AvatarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-avatar",
            template: "\n<div *ngIf=\"user\">\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"item-hover\" routerLink=\"/profile\">\n            <p class=\"navbar-text\">Signed in as {{user.email}}</p>\n        </li>\n        <li>\n            <button class=\"btn btn-default navbar-btn\" (click)=\"Logout()\">Logout</button>\n             \n        </li>\n    </ul>\n</div>\n\n<div *ngIf=\"!user\">\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n            <button class=\"btn btn-default navbar-btn\" (click)=\"Login()\">Login</button>\n        </li>\n    </ul>\n</div>\n",
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === 'function' && _a) || Object])
    ], AvatarComponent);
    return AvatarComponent;
    var _a;
}());
//# sourceMappingURL=avatar.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_elements_game_elements_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_question_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_rating_service__ = __webpack_require__(92);
/* unused harmony export createComponentFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlOutlet; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







function createComponentFactory(compiler, metadata) {
    var cmpClass = (function () {
        function DynamicComponent() {
        }
        return DynamicComponent;
    }());
    var decoratedCmp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])(metadata)(cmpClass);
    var DynamicHtmlModule = (function () {
        function DynamicHtmlModule() {
        }
        DynamicHtmlModule = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__game_elements_game_elements_module__["a" /* GameElementsModule */]],
                providers: [__WEBPACK_IMPORTED_MODULE_5__services_question_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_6__services_rating_service__["a" /* RatingService */]],
                declarations: [decoratedCmp]
            }), 
            __metadata('design:paramtypes', [])
        ], DynamicHtmlModule);
        return DynamicHtmlModule;
    }());
    return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
        .then(function (moduleWithComponentFactory) {
        return moduleWithComponentFactory.componentFactories.find(function (x) { return x.componentType === decoratedCmp; });
    });
}
var HtmlOutlet = (function () {
    function HtmlOutlet(vcRef, compiler) {
        this.vcRef = vcRef;
        this.compiler = compiler;
        this.afterCompile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    HtmlOutlet.prototype.ngOnChanges = function () {
        var _this = this;
        var html = this.html;
        if (!html)
            return;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var compMetadata = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */]({
            selector: 'dynamic-html',
            template: this.html,
        });
        createComponentFactory(this.compiler, compMetadata)
            .then(function (factory) {
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ReflectiveInjector */].fromResolvedProviders([], _this.vcRef.parentInjector);
            _this.cmpRef = _this.vcRef.createComponent(factory, 0, injector, []);
            _this.afterCompile.emit();
        });
    };
    HtmlOutlet.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], HtmlOutlet.prototype, "html", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(), 
        __metadata('design:type', Object)
    ], HtmlOutlet.prototype, "afterCompile", void 0);
    HtmlOutlet = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: 'html-outlet' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewContainerRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Compiler */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Compiler */]) === 'function' && _b) || Object])
    ], HtmlOutlet);
    return HtmlOutlet;
    var _a, _b;
}());
//# sourceMappingURL=html-outlet.directive.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = (function () {
    function DialogComponent(dialogService, changeDetector) {
        this.dialogService = dialogService;
        this.changeDetector = changeDetector;
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogService.getDialogData().subscribe(function (dialogData) {
            _this.isVisible = true;
            _this.Content = dialogData.Content;
            _this.Title = dialogData.Title;
            _this.changeDetector.detectChanges();
        });
    };
    DialogComponent.prototype.hideDialog = function () {
        this.isVisible = false;
    };
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-dialog",
            template: __webpack_require__(563),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__["a" /* DialogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_dialog_service__["a" /* DialogService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]) === 'function' && _b) || Object])
    ], DialogComponent);
    return DialogComponent;
    var _a, _b;
}());
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDictaatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddDictaatComponent = (function () {
    function AddDictaatComponent(dictatenService, route) {
        this.dictatenService = dictatenService;
        this.route = route;
        this.showModal = false;
        this.dictaatName = "";
        this.dictaatAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AddDictaatComponent.prototype.trim = function (str) {
        return str.replace(/\s/g, '');
    };
    //event
    AddDictaatComponent.prototype.ngOnInit = function () {
    };
    AddDictaatComponent.prototype.add = function () {
        var _this = this;
        this.showModal = false;
        this.dictaatName = this.trim(this.dictaatName);
        this.dictatenService.addDictaat(this.dictaatName)
            .then(function (dictaten) {
            _this.dictaatName = null;
            _this.dictaatAdded.emit(dictaten);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(), 
        __metadata('design:type', Object)
    ], AddDictaatComponent.prototype, "dictaatAdded", void 0);
    AddDictaatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-add-dictaat",
            template: __webpack_require__(565),
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__["a" /* DictatenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_dictaten_service__["a" /* DictatenService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], AddDictaatComponent);
    return AddDictaatComponent;
    var _a, _b;
}());
//# sourceMappingURL=add-dictaat.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsComponent = (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-achievements",
            template: "\n        Hello world\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AchievementsComponent);
    return AchievementsComponent;
}());
//# sourceMappingURL=achievements.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleChoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultipleChoiceComponent = (function () {
    function MultipleChoiceComponent(questionsService, route, accountService) {
        this.questionsService = questionsService;
        this.route = route;
        this.accountService = accountService;
    }
    MultipleChoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) {
            _this.isAuth = user != null;
        });
        //Krijg initiele waarde van observable niet :(
        this.accountService.update();
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
            _this.questionsService.getQuestion(_this.dictaatName, _this.qid)
                .then(function (question) { return _this.question = question; })
                .catch(function (reason) { return _this.error = reason; });
        });
        this.questionsService.getQuestion;
    };
    MultipleChoiceComponent.prototype.giveAnswer = function (answer) {
        this.selectedAnswer = answer;
    };
    MultipleChoiceComponent.prototype.login = function () {
        this.accountService.Login();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Number)
    ], MultipleChoiceComponent.prototype, "qid", void 0);
    MultipleChoiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-multiple-choice",
            styles: ["\n\n.answer {\n   max-width:100%;\n   white-space:normal;\n}    \n\n\n    "],
            template: "\n        <div class='wd-component'>\n\n            <div *ngIf=\"error\" class=\"alert alert-danger\">\n                <p>{{error}}</p>\n            </div>\n\n            <p *ngIf=\"!error && isAuth && !question\" class='default'>Loading...</p>\n      \n            <div class=\"bs-callout bs-callout-primary\" *ngIf=\"question\" >\n  \n                <h4>{{question.text}}</h4>\n\n                <div *ngIf=\"!isAuth\">\n                    <button class='btn btn-info btn-raised' (click)=\"login()\">Login to submit answers</button>\n                </div>\n\n                <div *ngIf=\"isAuth\">\n                    <div *ngFor='let answer of question.answers'>\n                        <button class=\"btn btn-raised btn-default answer\" (click)=\"giveAnswer(answer)\"\n                                [ngClass]=\"{ \n                                    'btn-success' :  selectedAnswer == answer  && selectedAnswer.isCorrect,\n                                    'btn-danger' : selectedAnswer == answer  && !selectedAnswer.isCorrect\n                                }\">\n                            {{answer.text}}\n                        </button>\n                    </div>\n\n                     <div *ngIf=\"selectedAnswer && selectedAnswer.isCorrect\">\n                        {{selectedAnswer.text}} is correct!\n                    </div>\n\n                    <div *ngIf=\"selectedAnswer && !selectedAnswer.isCorrect\">\n                        {{selectedAnswer.text}} is not correct.\n                        Feel free to try again!\n                    </div>\n                    \n                </div>\n            </div>\n\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]) === 'function' && _c) || Object])
    ], MultipleChoiceComponent);
    return MultipleChoiceComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=multiple-choice.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rating_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_rating__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RatingComponent = (function () {
    function RatingComponent(route, ratingService, accountService) {
        this.route = route;
        this.ratingService = ratingService;
        this.accountService = accountService;
        this.rate = new __WEBPACK_IMPORTED_MODULE_4__models_rating__["b" /* Rate */]();
    }
    RatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUser()
            .subscribe(function (user) {
            _this.isAuth = user != null;
        });
        //Krijg initiele waarde van observable niet :(
        this.accountService.update();
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
            _this.ratingService.getRating(_this.dictaatName, _this.rid)
                .then(function (rating) {
                _this.rating = rating;
            })
                .catch(function (reason) { return _this.error = reason; });
        });
    };
    RatingComponent.prototype.login = function () {
        this.accountService.Login();
    };
    RatingComponent.prototype.sendRate = function () {
        var _this = this;
        this.ratingService.SendRate(this.dictaatName, this.rating.id, this.rate)
            .then(function (rate) { return _this.rating.myRate = rate; });
    };
    RatingComponent.prototype.setEmotion = function (emotion) {
        this.rate.emotion = emotion;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "rid", void 0);
    RatingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-rating",
            styles: ["\n        .emotion{\n             width: 35px; cursor: pointer;\n             -webkit-transition: all 0.4s; /* Safari */\n            transition: all 0.4s;\n            margin:4px;\n        }\n        .emotion.active { \n            transform: scale(1.3, 1.3); \n        }\n    "],
            template: "\n    <div class='wd-component'>\n\n        <div *ngIf=\"error\" class=\"alert alert-danger\">\n            <p>{{error}}</p>\n        </div>\n\n        <div class=\"bs-callout bs-callout-info\" *ngIf=\"rating\" >\n               \n            <h4>{{rating.title}}</h4>\n            <p>{{rating.description}}</p>\n\n            <div *ngIf=\"!isAuth\">\n                 <button class='btn btn-info btn-raised' (click)=\"login()\">Login to give feedback</button>\n            </div>\n\n            <div *ngIf=\"isAuth\">\n\n                <div *ngIf=\"!rating.myRate\">\n                    <div>\n                        <img (click)=\"setEmotion('sad')\" [ngClass]=\"{ 'active' : rate.emotion == 'sad' }\" class='emotion' src=\"http://webdictaat.azurewebsites.net/images/shared/sad.png\">\n                        <img (click)=\"setEmotion('happy')\" [ngClass]=\"{ 'active' : rate.emotion == 'happy' }\" class='emotion'  src=\"http://webdictaat.azurewebsites.net/images/shared/happy.png\">\n                    </div>\n\n                    <div *ngIf=\"rate.emotion\">\n                        <textarea class=\"form-control\" rows=\"3\" [(ngModel)]='rate.feedback' id=\"textArea\"></textarea>\n                        <span class=\"help-block\">Would you like to give feedback?</span>\n                        <button class='btn btn-info btn-raised' (click)=\"sendRate()\">Send rating</button>\n                    </div>\n                </div>\n\n                <div *ngIf=\"rating.myRate\">\n                    <p>Thank you for the feedback!</p>\n                    <p *ngIf=\"rating.myRate.feedback\"> \n                        <img width=\"30px\" *ngIf=\"rating.myRate.emotion == 0\" src=\"http://webdictaat.azurewebsites.net/images/shared/sad.png\">\n                        <img width=\"30px\" *ngIf=\"rating.myRate.emotion == 1\" src=\"http://webdictaat.azurewebsites.net/images/shared/happy.png\">\n                        - \"{{rating.myRate.feedback}}\"</p>\n                </div>\n\n\n            </div>\n\n            \n\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_rating_service__["a" /* RatingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_rating_service__["a" /* RatingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]) === 'function' && _c) || Object])
    ], RatingComponent);
    return RatingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=rating.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_images_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddImageComponent = (function () {
    function AddImageComponent(imageService, route, changeDetector) {
        this.imageService = imageService;
        this.route = route;
        this.changeDetector = changeDetector;
    }
    //event
    AddImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
        this.imageService.getIsModalVisible().subscribe(function (isModalVisible) {
            _this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                _this.changeDetector.detectChanges();
            }
        });
    };
    AddImageComponent.prototype.fileChange = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AddImageComponent.prototype.Add = function () {
        var _this = this;
        this.imageService.addImages(this.dictaatName, this.selectedFile)
            .then(function (imageLocation) {
            _this.imageService.CompleteModal(imageLocation);
        });
    };
    AddImageComponent.prototype.Cancel = function () {
        this.imageService.CancelModal();
    };
    AddImageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-add-image",
            template: __webpack_require__(567),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_images_service__["a" /* ImageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_images_service__["a" /* ImageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]) === 'function' && _c) || Object])
    ], AddImageComponent);
    return AddImageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=add-image.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_image_component__ = __webpack_require__(535);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagesModule = (function () {
    function ImagesModule() {
    }
    ImagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__add_image_component__["a" /* AddImageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__add_image_component__["a" /* AddImageComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ImagesModule);
    return ImagesModule;
}());
//# sourceMappingURL=images.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dictaat; });
var Dictaat = (function () {
    function Dictaat() {
    }
    return Dictaat;
}());
//# sourceMappingURL=dictaat.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSummary; });
var PageSummary = (function () {
    function PageSummary() {
    }
    return PageSummary;
}());
//# sourceMappingURL=page-summary.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_summary__ = __webpack_require__(538);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    return Page;
}(__WEBPACK_IMPORTED_MODULE_0__page_summary__["a" /* PageSummary */]));
//# sourceMappingURL=page.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QuestionAnswer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var QuestionAnswer = (function () {
    function QuestionAnswer() {
        this.isCorrect = false;
    }
    QuestionAnswer.prototype.toggle = function () {
        this.isCorrect = !this.isCorrect;
    };
    return QuestionAnswer;
}());
var Question = (function () {
    function Question() {
        this.answers = [];
    }
    Question.prototype.AddAnswer = function () {
        this.answers.push(new QuestionAnswer());
    };
    ;
    Question.prototype.RemoveAnswer = function (answer) {
        var index = this.answers.indexOf(answer);
        this.answers.splice(index, 1);
    };
    return Question;
}());
//# sourceMappingURL=question.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dictaat_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_page__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPageComponent = (function () {
    function AddPageComponent(pageService, dictaatService, route) {
        this.pageService = pageService;
        this.dictaatService = dictaatService;
        this.route = route;
        this.page = new __WEBPACK_IMPORTED_MODULE_3__models_page__["a" /* Page */]();
        this.menus = [];
        this.showModal = false;
        this.pageAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    //event
    AddPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatService.getDictaat(params['dictaatName'])
                .then(function (dictaat) {
                _this.dictaat = dictaat;
            });
        });
    };
    AddPageComponent.prototype.add = function () {
        var _this = this;
        this.showModal = false;
        this.pageService.addPage(this.dictaat.name, this.page, this.menuName)
            .then(function (page) {
            _this.page = new __WEBPACK_IMPORTED_MODULE_3__models_page__["a" /* Page */]();
            _this.pageAdded.emit(page);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(), 
        __metadata('design:type', Object)
    ], AddPageComponent.prototype, "pageAdded", void 0);
    AddPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-add-page",
            styles: [__webpack_require__(560)],
            template: __webpack_require__(568),
            providers: [__WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */], __WEBPACK_IMPORTED_MODULE_2__services_dictaat_service__["a" /* DictaatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dictaat_service__["a" /* DictaatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_dictaat_service__["a" /* DictaatService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AddPageComponent);
    return AddPageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=add-page.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dictaat__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesComponent = (function () {
    function PagesComponent(pagesSevice, router) {
        this.pagesSevice = pagesSevice;
        this.router = router;
    }
    PagesComponent.prototype.getPages = function () {
        var _this = this;
        this.pagesSevice.getPages(this.dictaat.name)
            .then(function (pages) { return _this.dictaat.pages = pages; });
    };
    PagesComponent.prototype.deletePage = function (page) {
        var _this = this;
        this.pagesSevice.deletePage(this.dictaat.name, page.name)
            .then(function () { return _this.getPages(); });
    };
    PagesComponent.prototype.editPage = function (page) {
        this.router.navigateByUrl("/dictaten/" + this.dictaat.name + "/pages/" + page.name);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_dictaat__["a" /* Dictaat */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_dictaat__["a" /* Dictaat */]) === 'function' && _a) || Object)
    ], PagesComponent.prototype, "dictaat", void 0);
    PagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-pages",
            template: __webpack_require__(570),
            providers: [__WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], PagesComponent);
    return PagesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_page_component__ = __webpack_require__(541);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__pages_component__["a" /* PagesComponent */], __WEBPACK_IMPORTED_MODULE_5__add_page_component__["a" /* AddPageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__pages_component__["a" /* PagesComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_question__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddQuestionComponent = (function () {
    function AddQuestionComponent(questionsService, route, changeDetector) {
        this.questionsService = questionsService;
        this.route = route;
        this.changeDetector = changeDetector;
        this.questionAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    //event
    AddQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
        this.questionsService.getIsModalVisible().subscribe(function (isModalVisible) {
            _this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                _this.question = new __WEBPACK_IMPORTED_MODULE_2__models_question__["a" /* Question */]();
                _this.changeDetector.detectChanges();
            }
        });
    };
    AddQuestionComponent.prototype.Add = function () {
        var _this = this;
        this.questionsService.addQuestion(this.dictaatName, this.question)
            .then(function (question) {
            _this.questionsService.CompleteModal(question);
        });
    };
    AddQuestionComponent.prototype.Cancel = function () {
        this.questionsService.CancelModal();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(), 
        __metadata('design:type', Object)
    ], AddQuestionComponent.prototype, "questionAdded", void 0);
    AddQuestionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-add-question",
            template: __webpack_require__(572),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]) === 'function' && _c) || Object])
    ], AddQuestionComponent);
    return AddQuestionComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=add-question.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_question_component__ = __webpack_require__(544);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsModule = (function () {
    function QuestionsModule() {
    }
    QuestionsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__add_question_component__["a" /* AddQuestionComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__add_question_component__["a" /* AddQuestionComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionsModule);
    return QuestionsModule;
}());
//# sourceMappingURL=questions.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rating_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_rating__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddRatingComponent = (function () {
    function AddRatingComponent(ratingService, route, changeDetector) {
        this.ratingService = ratingService;
        this.route = route;
        this.changeDetector = changeDetector;
    }
    //event
    AddRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
        this.ratingService.getIsModalVisible().subscribe(function (isModalVisible) {
            _this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                _this.rating = new __WEBPACK_IMPORTED_MODULE_2__models_rating__["a" /* Rating */]();
                _this.changeDetector.detectChanges();
            }
        });
    };
    AddRatingComponent.prototype.Add = function () {
        var _this = this;
        this.ratingService.addRating(this.dictaatName, this.rating)
            .then(function (question) {
            _this.ratingService.CompleteModal(question);
        });
    };
    AddRatingComponent.prototype.Cancel = function () {
        this.ratingService.CancelModal();
    };
    AddRatingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-add-rating",
            template: __webpack_require__(573),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_rating_service__["a" /* RatingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_rating_service__["a" /* RatingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]) === 'function' && _c) || Object])
    ], AddRatingComponent);
    return AddRatingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=add-rating.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var $;
var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-card-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    CardComponent.prototype.onDrop = function (ui) {
        return new Promise(function (resolve, reject) {
            var newItem = $("<div class='wd-component well wd-container'></div>");
            ui.item.replaceWith(newItem);
            newItem.focus();
            resolve(false);
        });
    };
    CardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-card",
            template: "<div id='wd-card-tool' class='wd-component'>Card</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
//# sourceMappingURL=card.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var $;
var ColumnComponent = (function () {
    function ColumnComponent() {
    }
    ColumnComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-columnn')
            .draggable({
            cursorAt: { left: 0, top: 0 },
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    ColumnComponent.prototype.onDrop = function (ui) {
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    ColumnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-column",
            template: "\n        <div  id='wd-columnn' class='wd-component'>\n            <div class='row'>\n                <div class='col-md-6 wd-container'></div>\n                <div class='col-md-6 wd-container'></div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ColumnComponent);
    return ColumnComponent;
}());
//# sourceMappingURL=column.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var $;
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-header-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    HeaderComponent.prototype.onDrop = function (ui) {
        return new Promise(function (resolve, reject) {
            ui.item.replaceWith("<div class='wd-component'><h1>Header</h1></div>");
            resolve(false);
        });
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-header",
            template: "<div  id='wd-header-tool' class='wd-component'>Header</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_images_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $;
var ImgComponent = (function () {
    function ImgComponent(imageServie) {
        this.imageServie = imageServie;
    }
    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    ImgComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-img-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    ImgComponent.prototype.onDrop = function (ui) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.imageServie.ShowModal()
                .then(function (imgName) {
                ui.item.replaceWith("<div class='wd-component'><img src='http://webdictaat.azurewebsites.net//images//" + imgName + "'/></div>");
                resolve(false);
            })
                .catch(function () {
                ui.item.remove();
            });
        });
    };
    ImgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-img-tool",
            template: "<div id='wd-img-tool' class='wd-component' >Img</div>",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_images_service__["a" /* ImageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_images_service__["a" /* ImageService */]) === 'function' && _a) || Object])
    ], ImgComponent);
    return ImgComponent;
    var _a;
}());
//# sourceMappingURL=img.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var $;
var TextComponent = (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-text-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    TextComponent.prototype.onDrop = function (ui) {
        return new Promise(function (resolve, reject) {
            var newItem = $("<div class='wd-component'><div class='wd-editable'>Change me!</div></div>");
            ui.item.replaceWith(newItem);
            newItem.focus();
            resolve(false);
        });
    };
    TextComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-text",
            template: "<div id='wd-text-tool' class='wd-component'>Tekst</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TextComponent);
    return TextComponent;
}());
//# sourceMappingURL=text.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var $;
var TrashComponent = (function () {
    function TrashComponent() {
    }
    TrashComponent.prototype.ngOnInit = function () {
        // $('#wd-trash').sortable({
        //     receive: this.removeElement
        // });
    };
    TrashComponent.prototype.removeElement = function (event, ui) {
        //If ancestor is .tools, dont remove
        var parentsWithTools = $(ui.item).parents('.tools');
        if (!parentsWithTools.length)
            ui.item.remove();
    };
    TrashComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-trash",
            template: "\n        <div id=\"wd-trash\" class='trashcan'>\n            <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n        </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], TrashComponent);
    return TrashComponent;
}());
//# sourceMappingURL=trash.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleChoiceToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $;
var MultipleChoiceToolComponent = (function () {
    function MultipleChoiceToolComponent(questionsService) {
        this.questionsService = questionsService;
        this.template = "<wd-multiple-choice>";
    }
    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    MultipleChoiceToolComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-multiple-choice-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    MultipleChoiceToolComponent.prototype.onDrop = function (ui) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.questionsService.ShowModal()
                .then(function (question) {
                ui.item.replaceWith("<wd-multiple-choice class='wd-game-component' [qid]='" + question.id + "' />");
                resolve(true);
            })
                .catch(function () {
                ui.item.remove();
            });
        });
    };
    MultipleChoiceToolComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-multiple-choice-tool",
            template: "<div id='wd-multiple-choice-tool' class='wd-component'>Multiple choice</div>",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionsService */]) === 'function' && _a) || Object])
    ], MultipleChoiceToolComponent);
    return MultipleChoiceToolComponent;
    var _a;
}());
//# sourceMappingURL=multiple-choice.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rating_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $;
var RatingToolComponent = (function () {
    function RatingToolComponent(ratingService) {
        this.ratingService = ratingService;
        this.template = "<wd-rating>";
    }
    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    RatingToolComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-rating-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    RatingToolComponent.prototype.onDrop = function (ui) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ratingService.ShowModal()
                .then(function (rating) {
                var element = "<wd-rating class='wd-game-component' [rid]='" + rating.id + "' />";
                ui.item.replaceWith(element);
                resolve(true);
            })
                .catch(function () {
                ui.item.remove();
            });
        });
    };
    RatingToolComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: "wd-rating-tool",
            template: "<div id='wd-rating-tool' class='wd-component'>Rating</div>",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_rating_service__["a" /* RatingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_rating_service__["a" /* RatingService */]) === 'function' && _a) || Object])
    ], RatingToolComponent);
    return RatingToolComponent;
    var _a;
}());
//# sourceMappingURL=rating.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_html_outlet_directive__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__html_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_tools_header_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_tools_text_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__default_tools_card_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_tools_column_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_tools_multiple_choice_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_tools_rating_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__default_tools_trash_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__default_tools_img_component__ = __webpack_require__(550);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ToolsModule = (function () {
    function ToolsModule() {
    }
    ToolsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__core_html_outlet_directive__["a" /* HtmlOutlet */], __WEBPACK_IMPORTED_MODULE_8__default_tools_column_component__["a" /* ColumnComponent */], __WEBPACK_IMPORTED_MODULE_6__default_tools_text_component__["a" /* TextComponent */], __WEBPACK_IMPORTED_MODULE_5__default_tools_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__html_component__["a" /* HtmlComponent */], __WEBPACK_IMPORTED_MODULE_7__default_tools_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__game_tools_multiple_choice_component__["a" /* MultipleChoiceToolComponent */], __WEBPACK_IMPORTED_MODULE_11__default_tools_trash_component__["a" /* TrashComponent */], __WEBPACK_IMPORTED_MODULE_12__default_tools_img_component__["a" /* ImgComponent */], __WEBPACK_IMPORTED_MODULE_10__game_tools_rating_component__["a" /* RatingToolComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__default_tools_column_component__["a" /* ColumnComponent */], __WEBPACK_IMPORTED_MODULE_6__default_tools_text_component__["a" /* TextComponent */], __WEBPACK_IMPORTED_MODULE_5__default_tools_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__html_component__["a" /* HtmlComponent */], __WEBPACK_IMPORTED_MODULE_7__default_tools_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__game_tools_multiple_choice_component__["a" /* MultipleChoiceToolComponent */], __WEBPACK_IMPORTED_MODULE_3__core_html_outlet_directive__["a" /* HtmlOutlet */], __WEBPACK_IMPORTED_MODULE_11__default_tools_trash_component__["a" /* TrashComponent */], __WEBPACK_IMPORTED_MODULE_12__default_tools_img_component__["a" /* ImgComponent */], __WEBPACK_IMPORTED_MODULE_10__game_tools_rating_component__["a" /* RatingToolComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolsModule);
    return ToolsModule;
}());
//# sourceMappingURL=tools.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(119)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(119)();
// imports


// module
exports.push([module.i, ".directory{\r\n    background-color:gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(119)();
// imports


// module
exports.push([module.i, "td{\r\n    padding:5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(119)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(119)();
// imports


// module
exports.push([module.i, ".tools{\r\n    width:250px;\r\n\r\n}\r\n\r\n.page-content{\r\n    margin-left:250px;\r\n    padding:0px 15px;\r\n}\r\n\r\na.selected{\r\n    color: #00AEED;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"#\">Webdictaat</a>\r\n        </div>\r\n\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a routerLink=\"/dictaten\">Dictaten</a></li>\r\n                <li><a routerLink=\"/demo\">Demo</a></li>\r\n                <li></li>\r\n            </ul>\r\n\r\n            <wd-avatar></wd-avatar>\r\n           \r\n          \r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"content\">\r\n    <wd-dialog></wd-dialog>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"navbar navbar-info navbar-fixed-bottom\">\r\n    <div class=\"container-fluid text-center\">\r\n        <form class=\"navbar-form\">\r\n            <a target=\"_blank\" class=\"btn btn-default btn-lg btn-block btn-raisedg\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSerzNXmkN_PB610oknjZADz6V2bvaWPf1ugChSsoHvzDnV8-Q/viewform\">Feedback? Deel het met ons!</a>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal fade in\" role=\"dialog\" *ngIf=\"isVisible\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"hideDialog()\">&times;</button>\r\n                <h4 class=\"modal-title\">{{Title}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                \r\n                /** \r\n                    Hier tekende ik eerst en component met de HtmlOutlet maar dit werke niet naar behoren. \r\n                **/\r\n\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hideDialog()\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\" style=\"margin-bottom: 5px;\">\r\n  <li><a href=\"#\">Webdictaat</a></li>\r\n  <li  *ngIf=\"dictaat\" class=\"active\">{{dictaat.name}}</li>\r\n</ul>\r\n\r\n<div class=\"container\">\r\n  \r\n    <div class=\"panel panel-default sidebar\" *ngIf=\"dictaat\">\r\n        <div class=\"panel-body text-center\">\r\n            <h1>{{dictaat.name}}</h1>\r\n            <a target=\"_blank\" href=\"/dictaten/{{dictaat.name}}\">\r\n                webdictaat.aii.avans.nl/dictaten/{{dictaat.name}}\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default sidebar\" *ngIf=\"dictaat\">\r\n        <wd-pages [dictaat]=\"dictaat\"></wd-pages>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-lg btn-success btn-raised\" (click)=\"showModal = true\">\r\n    <span class=\"glyphicon glyphicon-plus pull-left\"></span>&nbsp;Create a new Dictaat\r\n</button>\r\n\r\n<div class=\"modal\" *ngIf=\"showModal\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Add new dictaat</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                \r\n                <div class=\"form-group\">\r\n                    <label for=\"dictaatName\" class=\"col-md-2 control-label\">Name</label>\r\n\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"dictaatName\" id=\"dictaatName\" placeholder=\"Name of the dictaat\"\r\n                        [(ngModel)]=\"dictaatName\" required>\r\n                    </div>\r\n                </div>\r\n            \r\n\r\n                <p class=\"text-info\" *ngIf=\"dictaatName.indexOf(' ') >= 0\">\r\n                    De naam van de website mag geen spaties bevatten, en zal uiteindelijk veranderen in <strong>{{trim(dictaatName)}}</strong>\r\n                </p>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-secondary pull-left\" (click)=\"showModal = false\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-success pull-right\"\r\n                            (click)=\"add()\"\r\n                            [disabled]=\"!dictaatName || dictaatName.length < 3\">\r\n                        Add\r\n                    </button>\r\n                </div>\r\n            </div><!-- /.modal-content -->\r\n        </div><!-- /.modal-dialog -->\r\n    </div><!-- /.modal -->\r\n</div>"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default navbar-sub\">\r\n    <div class=\"panel-body text-center\">\r\n        <h1>Welkom op de site van Webdictaat!</h1>\r\n\r\n        <p>Maak nu een nieuw webdictaat, of bekijk de lijst van bestaande dictaten!</p>\r\n\r\n        <p *ngIf=\"isAuth\">\r\n            <wd-add-dictaat (dictaatAdded)=\"setDictaten($event)\"></wd-add-dictaat>\r\n        </p>\r\n\r\n        <p *ngIf=\"!isAuth\">\r\n            <button class=\"btn btn-primary btn-raised\" (click)=\"login()\">Login to get started!</button>\r\n        </p>\r\n\r\n        <img src=\"img/wd-logo.png\" class=\"wd-logo\" />\r\n    </div>\r\n    <div class=\"progress\" [hidden]=\"dictaten\">\r\n        <div class=\"progress-bar\"  [style.width]=\"loaderValue + '%'\"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n    \r\n    <div class=\"dictaten row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-4 text-center\"  *ngFor=\"let  dictaat of dictaten\">\r\n            <div class=\"panel panel-default\" >\r\n                <div class=\"panel-body\">\r\n\r\n                    <h2>{{dictaat.name}}</h2>\r\n\r\n                    <p *ngIf=\"isAuth\">\r\n                        <button type=\"button\" class=\"btn btn-raised btn-info\" (click)=\"gotoDetail(dictaat)\">Details</button>\r\n                    </p>\r\n\r\n                    <p>\r\n                        <a target=\"_blank\" href=\"/dictaten/{{dictaat.name}}\">\r\n                            webdictaat.nl/dictaten/{{dictaat.name}}\r\n                        </a>\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"panel-footer\">\r\n                    <p>\r\n                        Updates N days ago\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade in\" *ngIf=\"isModalVisible\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"Cancel()\">&times;</button>\r\n                <h4 class=\"modal-title\">Add Image</h4>\r\n            </div>\r\n\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                        <label class=\"btn btn-primary btn-raised\"  for=\"seletedFile\">Select image</label>\r\n                        <input name=\"seletedFile\" type=\"file\" (change)=\"fileChange($event)\" />\r\n                </div>\r\n\r\n                <p *ngIf=\"!selectedFile\">\r\n                    No file selected\r\n                </p>\r\n\r\n                <p *ngIf=\"selectedFile\">\r\n                    You selected {{selectedFile.name}}\r\n                </p>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"Add()\">Save</button>\r\n                <button class=\"btn btn-default\" (click)=\"Cancel()\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "\r\n<button class=\"btn btn-xs btn-success\" (click)=\"showModal = true\">\r\n    <span class=\"glyphicon glyphicon-plus\"></span>&nbsp;Create a new page\r\n</button>\r\n\r\n<div class=\"modal\" *ngIf=\"showModal\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Add new page</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">Name of the page</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Name of the page\"\r\n                           [(ngModel)]=\"page.name\" required>\r\n                    <div [hidden]=\"name.valid || name.pristine\"\r\n                         class=\"alert alert-danger\">\r\n                        Name is required\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"menu\">Select a sub menu *optional</label>\r\n                    <select class=\"form-control\" name=\"menu\" id=\"menu\" placeholder=\"Name of the page\"\r\n                            [(ngModel)]=\"menuName\" #name=\"ngModel\">\r\n                        <option></option>\r\n                        <option *ngFor=\"let menu of dictaat.menu.subMenus\" value=\"{{menu.name}}\">\r\n                            {{menu.name}}\r\n                        </option> \r\n\r\n                    </select>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-secondary pull-left\" (click)=\"showModal = false\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-success pull-right\"\r\n                            (click)=\"add()\"\r\n                            [disabled]=\"!page.name || page.name.length < 3\">\r\n                        Add\r\n                    </button>\r\n                </div>\r\n            </div><!-- /.modal-content -->\r\n        </div><!-- /.modal-dialog -->\r\n    </div><!-- /.modal -->\r\n</div>"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<!-- First we rendere all the possible modals-->\r\n<wd-add-question></wd-add-question>\r\n<wd-add-rating></wd-add-rating>\r\n<wd-add-image></wd-add-image>\r\n\r\n<ul class=\"breadcrumb\" style=\"margin-bottom: 5px;\">\r\n  <li><a href=\"#\">Webdictaat</a></li>\r\n  <li><a href=\"#/dictaten/{{dictaatName}}\">{{dictaatName}}</a></li>\r\n  <li class=\"active\">{{pageName}}</li>\r\n</ul>\r\n\r\n<div *ngIf=\"page\">\r\n    <div class=\"panel panel-default fixed tools text-center\">\r\n        <div class=\"panel-body bordered\">\r\n            <h3>Elements</h3>\r\n        </div>\r\n        <div class=\"btn-group btn-group-justified btn-group\">\r\n            <a [ngClass]=\"{'selected': selectedTab == 'text'}\" (click)=\"selectedTab = 'text'\" class=\"btn \">Text<div class=\"ripple-container\"></div></a>\r\n            <a [ngClass]=\"{'selected': selectedTab == 'tools'}\" (click)=\"selectedTab = 'tools'\" class=\"btn \">Tools</a>\r\n        </div>\r\n        <table class=\"table table-hover elements\" *ngIf=\"selectedTab == 'text'\">\r\n            <tr><td> <wd-header></wd-header> </td></tr>\r\n            <tr><td> <wd-text></wd-text> </td></tr>\r\n            <tr><td> <wd-card></wd-card> </td></tr>\r\n            <tr><td> <wd-column></wd-column> </td></tr>  \r\n        </table>\r\n\r\n         <table class=\"table table-hover elements\" *ngIf=\"selectedTab == 'tools'\">\r\n            <tr><td> <wd-multiple-choice-tool></wd-multiple-choice-tool> </td></tr>\r\n            <tr><td> <wd-rating-tool></wd-rating-tool> </td></tr>\r\n            <tr><td> <wd-img-tool></wd-img-tool> </td></tr>\r\n        </table>\r\n\r\n        <wd-trash></wd-trash>\r\n\r\n    </div>\r\n\r\n    <div class=\"page-content\">\r\n        <wd-html [innerHTML]=\"page.source\" (pageEdited)=\"updateSource($event)\" ></wd-html>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <wd-add-page (pageAdded)=\"getPages($event)\"></wd-add-page>\r\n</div>\r\n\r\n<table class=\"table table-hover\" >\r\n    <tr *ngFor=\"let  page of dictaat.pages\" (click)=\"editPage(page)\" [ngClass]=\"{active: page == selectedPage}\" >\r\n        <td>\r\n            <span class=\"glyphicon glyphicon-file\"></span>\r\n        </td>\r\n        <td>\r\n            {{page.name}}\r\n        </td>\r\n        <td width=\"30\">\r\n            <button class=\"btn btn-xs btn-danger\" (click)=\"deletePage(page)\">\r\n                <span class=\"glyphicon glyphicon-trash\"></span>\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default navbar-sub\">\r\n    <div class=\"panel-body text-center\">\r\n        <h1>Profile</h1>\r\n\r\n    </div>\r\n    <div class=\"progress\" [hidden]=\"dictaten\">\r\n        <div class=\"progress-bar\" [style.width]=\"loaderValue + '%'\" style=\"width: \"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"dictaten row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-4 text-center\" *ngFor=\"let  dictaat of dictaten\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">\r\n\r\n                    <h2>{{dictaat.name}}</h2>\r\n\r\n                    <p *ngIf=\"isAuth\">\r\n                        <button type=\"button\" class=\"btn btn-raised btn-info\" (click)=\"gotoDetail(dictaat)\">Details</button>\r\n                    </p>\r\n\r\n                    <p>\r\n                        <a target=\"_blank\" href=\"http://webdictaat.azurewebsites.net/dictaten/{{dictaat.name}}\">\r\n                            webdictaat.nl/dictaten/{{dictaat.name}}\r\n                        </a>\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"panel-footer\">\r\n                    <p>\r\n                        Updates N days ago\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal fade in\" role=\"dialog\" *ngIf=\"isModalVisible\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"Cancel()\">&times;</button>\r\n                <h4 class=\"modal-title\">Add Question</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              \r\n                <div class=\"form-group\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"isInMenu\">The question</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"question\" id=\"question\" placeholder=\"Name of the question\"\r\n                               [(ngModel)]=\"question.text\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"isInMenu\">Possible answers</label>\r\n\r\n                        <button class=\"btn btn-success btn-sm pull-right\" (click)=\"question.AddAnswer()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span>\r\n                        </button>\r\n\r\n                        <table class=\"table table-hover table-condensed\">\r\n                            <tbody>\r\n                                <tr *ngIf=\"question.answers.length == 0\">\r\n                                    <td colspan=\"3\" class=\"text-center\">\r\n                                        <p><i>List of possbile answers is empty</i></p>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let answer of question.answers\">\r\n                                    <td>\r\n                                        <input [(ngModel)]=\"answer.text\" required />\r\n                                    </td>\r\n                                    <td>\r\n                                        <button *ngIf=\"!answer.isCorrect\" class=\"btn btn-danger\" (click)=\"answer.isCorrect = !answer.isCorrect\">\r\n                                            Wrong\r\n                                        </button>\r\n                                        <button *ngIf=\"answer.isCorrect\" class=\"btn btn-success\" (click)=\"answer.isCorrect = !answer.isCorrect\">\r\n                                            Correct\r\n                                        </button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button class=\"btn btn-danger btn-sm\" (click)=\"question.RemoveAnswer(answer)\">\r\n                                            <span class=\"glyphicon glyphicon-minus\"></span>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                \r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"Add()\">Save</button>\r\n                <button class=\"btn btn-default\" (click)=\"Cancel()\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal fade in\" role=\"dialog\" *ngIf=\"isModalVisible\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"Cancel()\">&times;</button>\r\n                <h4 class=\"modal-title\">Add Rating</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              \r\n                <div class=\"form-group\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\">Title</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"Short title of the rating\"\r\n                               [(ngModel)]=\"rating.Title\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"descritpion\">Description</label>\r\n\r\n                        <input type=\"text\" class=\"form-control\" name=\"descritpion\" placeholder=\"Longer description of what the user is rating\"\r\n                               [(ngModel)]=\"rating.Description\" required>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"Add()\">Save</button>\r\n                <button class=\"btn btn-default\" (click)=\"Cancel()\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountService = (function () {
    function AccountService(wdapi) {
        var _this = this;
        this.wdapi = wdapi;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.wdapi.get("/account/Current")
            .toPromise()
            .then(function (response) {
            _this.user = response.json();
            _this.subject.next(_this.user);
        });
    }
    AccountService.prototype.Login = function () {
        window.location.href = this.wdapi.urlPrefix + "/account/ExternalLogin?returnurl=" + window.location;
    };
    AccountService.prototype.Logoff = function () {
        //redrict to home after logout
        window.location.href = this.wdapi.urlPrefix + "/account/LogOff?returnurl=" + window.location;
    };
    AccountService.prototype.getUser = function () {
        return this.subject.asObservable();
    };
    AccountService.prototype.update = function () {
        this.subject.next(this.user);
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(523);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_basemodal_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsService = (function (_super) {
    __extends(QuestionsService, _super);
    function QuestionsService(wdapi) {
        _super.call(this);
        this.wdapi = wdapi;
    }
    QuestionsService.prototype.addQuestion = function (dictaatName, question) {
        var _this = this;
        var url = "/dictaten/" + dictaatName + '/questions';
        return this.wdapi.post(url, question)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            _this.resolveCancel(); //hier nog niet bij mee
        });
    };
    QuestionsService.prototype.getQuestion = function (dictaatName, questionId) {
        if (!questionId) {
            return new Promise(function (resolve, reject) {
                reject("Cannot load question without questionId");
            });
        }
        var url = "/dictaten/" + dictaatName + '/questions/' + questionId;
        return this.wdapi.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    QuestionsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], QuestionsService);
    return QuestionsService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__core_basemodal_service__["a" /* BaseModalService */]));
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_wdapi_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RatingService = (function () {
    function RatingService(wdapi) {
        this.wdapi = wdapi;
        this.isModalVisible = false;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    RatingService.prototype.getIsModalVisible = function () {
        return this.subject.asObservable();
    };
    RatingService.prototype.ShowModal = function () {
        var _this = this;
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise(function (resolve, reject) {
            _this.resolveAddRating = resolve;
            _this.resolveCancel = reject;
        });
    };
    RatingService.prototype.CancelModal = function () {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    RatingService.prototype.CompleteModal = function (rating) {
        this.resolveAddRating(rating);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    };
    RatingService.prototype.addRating = function (dictaatName, rating) {
        var _this = this;
        var url = "/dictaten/" + dictaatName + '/rating';
        return this.wdapi.post(url, rating)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            _this.resolveCancel(); //hier nog niet bij mee
            return _this.handleError;
        });
    };
    RatingService.prototype.SendRate = function (dictaatName, ratingId, rate) {
        var _this = this;
        var url = "/dictaten/" + dictaatName + '/rating/' + ratingId + '/rates';
        return this.wdapi.post(url, rate)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            return _this.handleError;
        });
    };
    RatingService.prototype.getRating = function (dictaatName, ratingId) {
        if (!ratingId) {
            return new Promise(function (resolve, reject) {
                reject("Cannot load rating without ratingId");
            });
        }
        var url = "/dictaten/" + dictaatName + '/rating/' + ratingId;
        return this.wdapi.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    RatingService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    RatingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], RatingService);
    return RatingService;
    var _a;
}());
//# sourceMappingURL=rating.service.js.map

/***/ })

},[879]);
//# sourceMappingURL=main.bundle.js.map