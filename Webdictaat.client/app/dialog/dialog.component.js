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
var dialog_service_1 = require('../services/dialog.service');
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
        core_1.Component({
            selector: "wd-dialog",
            templateUrl: "./app/dialog/dialog.component.html",
        }), 
        __metadata('design:paramtypes', [dialog_service_1.DialogService, core_1.ChangeDetectorRef])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map