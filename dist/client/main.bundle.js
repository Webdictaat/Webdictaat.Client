webpackJsonp([1],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(568);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], wdApi);
    return wdApi;
    var _a;
}());
//# sourceMappingURL=wdapi.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(64);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_basemodal_service__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(64);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], QuestionsService);
    return QuestionsService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__core_basemodal_service__["a" /* BaseModalService */]));
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_wdapi_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(64);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_wdapi_service__["a" /* wdApi */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_wdapi_service__["a" /* wdApi */]) === 'function' && _a) || Object])
    ], RatingService);
    return RatingService;
    var _a;
}());
//# sourceMappingURL=rating.service.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_service__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = (function () {
    function PageComponent(route, pageService) {
        this.route = route;
        this.pageService = pageService;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var name = params['pageName'];
            _this.pageService.getPage(name)
                .then(function (page) {
                return _this.page = page;
            });
        });
    };
    PageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: "wd-page",
            template: "\n    <div *ngIf=\"page\">\n        <html-outlet [html]=\"page\"></html-outlet>\n    </div>\n",
            providers: [__WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */]) === 'function' && _b) || Object])
    ], PageComponent);
    return PageComponent;
    var _a, _b;
}());
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 379;


/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_client_app_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_ui__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery_ui__);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_client_app_module__["a" /* ClientsModule */]);
//# sourceMappingURL=main.client.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
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
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.Title = "Webdictaat";
        this.showSidebar = false;
        router.events.subscribe(function (val) { return _this.showSidebar = false; });
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: "wd-client-app",
            template: __webpack_require__(398),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_page_page_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_core_html_outlet_directive__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_nav_menu_nav_menu_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_avatar_avatar_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_question_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_account_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_rating_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_core_wdapi_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ClientsModule = (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__shared_core_html_outlet_directive__["a" /* HtmlOutlet */], __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__shared_page_page_component__["a" /* PageComponent */], __WEBPACK_IMPORTED_MODULE_8__shared_nav_menu_nav_menu_component__["a" /* NavMenuComponent */], __WEBPACK_IMPORTED_MODULE_9__shared_avatar_avatar_component__["a" /* AvatarComponent */]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* HashLocationStrategy */] },
                __WEBPACK_IMPORTED_MODULE_10__shared_services_question_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_11__shared_services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_12__shared_services_rating_service__["a" /* RatingService */], __WEBPACK_IMPORTED_MODULE_13__shared_core_wdapi_service__["a" /* wdApi */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ClientsModule);
    return ClientsModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_page_page_component__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var appRoutes = [
    {
        path: ':pageName',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_page_page_component__["a" /* PageComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__(115);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
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

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(64);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], BaseModalService);
    return BaseModalService;
}());
//# sourceMappingURL=basemodal.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_elements_game_elements_module__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_question_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_rating_service__ = __webpack_require__(170);
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
    var decoratedCmp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])(metadata)(cmpClass);
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
        this.afterCompile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    HtmlOutlet.prototype.ngOnChanges = function () {
        var _this = this;
        var html = this.html;
        if (!html)
            return;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var compMetadata = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */]({
            selector: 'dynamic-html',
            template: this.html,
        });
        createComponentFactory(this.compiler, compMetadata)
            .then(function (factory) {
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ReflectiveInjector */].fromResolvedProviders([], _this.vcRef.parentInjector);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], HtmlOutlet.prototype, "html", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], HtmlOutlet.prototype, "afterCompile", void 0);
    HtmlOutlet = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({ selector: 'html-outlet' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewContainerRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Compiler */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Compiler */]) === 'function' && _b) || Object])
    ], HtmlOutlet);
    return HtmlOutlet;
    var _a, _b;
}());
//# sourceMappingURL=html-outlet.directive.js.map

/***/ }),

/***/ 388:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: "wd-achievements",
            template: "\n        Hello world\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AchievementsComponent);
    return AchievementsComponent;
}());
//# sourceMappingURL=achievements.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiple_choice_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rating_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__achievements_component__ = __webpack_require__(388);
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

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(115);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], MultipleChoiceComponent.prototype, "qid", void 0);
    MultipleChoiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
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

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rating_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_rating__ = __webpack_require__(393);
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
        this.rate = new __WEBPACK_IMPORTED_MODULE_4__models_rating__["a" /* Rate */]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "rid", void 0);
    RatingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
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

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* unused harmony export NavMenuItem */
var NavMenu = (function () {
    function NavMenu() {
        this.SubMenus = [];
        this.MenuItems = [];
        this.show = false;
    }
    return NavMenu;
}());
var NavMenuItem = (function () {
    function NavMenuItem() {
    }
    return NavMenuItem;
}());
//# sourceMappingURL=nav-menu.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Rating */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rate; });
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

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_menu_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_nav_menu__ = __webpack_require__(392);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavMenuComponent = (function () {
    function NavMenuComponent(route, navMenuService) {
        this.route = route;
        this.navMenuService = navMenuService;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navMenu == null) {
            this.navMenuService.getNavMenu()
                .then(function (navMenu) {
                _this.navMenu = navMenu;
            });
        }
    };
    NavMenuComponent.prototype.toggleMenu = function () {
        this.showMenu = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_nav_menu__["a" /* NavMenu */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__models_nav_menu__["a" /* NavMenu */]) === 'function' && _a) || Object)
    ], NavMenuComponent.prototype, "navMenu", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], NavMenuComponent.prototype, "isRoot", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], NavMenuComponent.prototype, "showMenu", void 0);
    NavMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: "wd-nav-menu",
            template: "\n<ul class=\"nav navbar-nav\" *ngIf=\"navMenu\" [ngClass]=\"{'dropdown-menu ': !isRoot}\">\n\n    <li *ngFor=\"let item of navMenu.MenuItems\" >\n        <a routerLink=\"{{item.Url}}\" routerLinkActive=\"active\">{{item.Name}}</a>\n    </li>\n\n    {{showMenu}}\n\n    <li class=\"dropdown\" *ngFor=\"let menu of navMenu.SubMenus\">\n\n        <a  (click)=\"menu.show = !menu.show\" class=\"dropdown-toggle\">{{menu.Name}}<span class=\"caret\"></span></a>\n      \n        <wd-nav-menu [navMenu]=\"menu\" [showMenu]=\"showMenu\"  (click)=\"menu.show = !menu.show\" *ngIf=\"menu.show\">\n        </wd-nav-menu>\n    </li>\n</ul>\n",
            providers: [__WEBPACK_IMPORTED_MODULE_2__nav_menu_service__["a" /* NavMenuService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__nav_menu_service__["a" /* NavMenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__nav_menu_service__["a" /* NavMenuService */]) === 'function' && _c) || Object])
    ], NavMenuComponent);
    return NavMenuComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=nav-menu.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavMenuService = (function () {
    function NavMenuService(http, router) {
        this.http = http;
        this.router = router;
    }
    NavMenuService.prototype.getNavMenu = function () {
        var _this = this;
        if (this.menu != null) {
            return Promise.resolve(this.menu);
        }
        else {
            return this.http.get('nav-menu.json')
                .toPromise()
                .then(function (response) {
                return _this.menu = response.json();
            }).catch(this.handleError);
        }
    };
    NavMenuService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NavMenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavMenuService);
    return NavMenuService;
    var _a, _b;
}());
//# sourceMappingURL=nav-menu.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = (function () {
    function PageService(http) {
        this.http = http;
    }
    PageService.prototype.getPage = function (pageName) {
        return this.http.get('pages/' + pageName + '.html', { withCredentials: true })
            .toPromise()
            .then(function (response) { return response.text(); }).catch(this.handleError);
    };
    PageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PageService);
    return PageService;
    var _a;
}());
//# sourceMappingURL=page.service.js.map

/***/ }),

/***/ 397:
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

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"showSidebar = !showSidebar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">{{Title}}</a>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\r\n\t\t  <wd-nav-menu [isRoot]=\"true\"></wd-nav-menu>\r\n      <wd-avatar></wd-avatar>\r\n\t</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"side-nav-wrapper\" >\r\n  <nav class=\"side-nav\" [ngClass]=\"{'active' : showSidebar }\">\r\n    <wd-nav-menu [isRoot]=\"true\" ></wd-nav-menu>\r\n  </nav>\r\n</div>\r\n\r\n<router-outlet ></router-outlet>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"content\">\r\n\t\t<div class=\"left-menu\"></div>\r\n\t\t<div class=\"flex-1\">\r\n\t\t\t<div class=\"main-content\">\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(380);


/***/ })

},[831]);
//# sourceMappingURL=main.bundle.js.map