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
var ColumnComponent = (function () {
    function ColumnComponent() {
    }
    ColumnComponent.prototype.ngOnInit = function () {
        $('.wd-component')
            .draggable({
            cursorAt: { left: 0, top: 0 },
            helper: "clone",
            connectToSortable: ".wd-container"
        });
    };
    ColumnComponent = __decorate([
        core_1.Component({
            selector: "wd-column",
            template: "<div class='wd-component wd-row'><div class='wd-flex-1 wd-container'></div><div class='wd-flex-1 wd-container'></div></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ColumnComponent);
    return ColumnComponent;
}());
exports.ColumnComponent = ColumnComponent;
//# sourceMappingURL=column.component.js.map