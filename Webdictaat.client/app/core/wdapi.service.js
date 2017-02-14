"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//Nodig om een object om te toveren in een promise.
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var wdApi = (function () {
    function wdApi(http) {
        this.http = http;
        //public urlPrefix = 'http://webdictaat.azurewebsites.net/api';
        this.urlPrefix = 'http://localhost:65418/api';
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], wdApi);
    return wdApi;
}());
exports.wdApi = wdApi;
//# sourceMappingURL=wdapi.service.js.map