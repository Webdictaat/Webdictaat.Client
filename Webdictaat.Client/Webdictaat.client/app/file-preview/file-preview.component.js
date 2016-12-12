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
var file_preview_service_1 = require('../services/file-preview.service');
var FilePreviewComponent = (function () {
    function FilePreviewComponent(filePreviewService) {
        var _this = this;
        this.filePreviewService = filePreviewService;
        filePreviewService.selectedFile$.subscribe(function (file) { return _this.selectedFile = file; });
    }
    FilePreviewComponent.prototype.closeFile = function () {
        this.filePreviewService.clearSelection();
    };
    FilePreviewComponent = __decorate([
        core_1.Component({
            selector: "wd-file-preview",
            templateUrl: './app/file-preview/file-preview.component.html',
            styleUrls: ["./app/file-preview/file-preview.component.css"],
        }), 
        __metadata('design:paramtypes', [file_preview_service_1.FilePreviewService])
    ], FilePreviewComponent);
    return FilePreviewComponent;
}());
exports.FilePreviewComponent = FilePreviewComponent;
//# sourceMappingURL=file-preview.component.js.map