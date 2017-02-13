"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require('@angular/http');
var AppRequestOptions = (function (_super) {
    __extends(AppRequestOptions, _super);
    function AppRequestOptions() {
        _super.apply(this, arguments);
    }
    AppRequestOptions.prototype.merge = function (options) {
        options.url = 'http://localhost:65418/api' + options.url;
        return _super.prototype.merge.call(this, options);
    };
    return AppRequestOptions;
}(http_1.BaseRequestOptions));
exports.AppRequestOptions = AppRequestOptions;
//# sourceMappingURL=app.options.js.map