"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var AppRequestOptions = (function (_super) {
    __extends(AppRequestOptions, _super);
    function AppRequestOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppRequestOptions.prototype.merge = function (options) {
        options.url = 'http://localhost:65418/api' + options.url;
        return _super.prototype.merge.call(this, options);
    };
    return AppRequestOptions;
}(http_1.BaseRequestOptions));
exports.AppRequestOptions = AppRequestOptions;
//# sourceMappingURL=app.options.js.map