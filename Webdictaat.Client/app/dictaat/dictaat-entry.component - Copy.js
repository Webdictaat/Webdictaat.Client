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
var DictaatEntryComponent = (function () {
    function DictaatEntryComponent() {
        this.onSelect = new core_1.EventEmitter();
        this.showSub = false;
    }
    DictaatEntryComponent.prototype.select = function (file) {
        this.onSelect.emit(file.location);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DictaatEntryComponent.prototype, "entry", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DictaatEntryComponent.prototype, "onSelect", void 0);
    DictaatEntryComponent = __decorate([
        core_1.Component({
            selector: "wd-dictaat-entry",
            templateUrl: './app/dictaat/dictaat-entry.component.html',
            styles: ["\n        ul{\n            padding-left:20px;\n        }\n\n        li{\n            padding:0px;\n            list-style-type:none;\n        }\n\n        .entry{\n            cursor: pointer;\n        }\n\n        .glyphicon{\n            margin-right:5px;\n        }\n\n\n        "],
        }), 
        __metadata('design:paramtypes', [])
    ], DictaatEntryComponent);
    return DictaatEntryComponent;
}());
exports.DictaatEntryComponent = DictaatEntryComponent;
//# sourceMappingURL=dictaat-entry.component - Copy.js.map