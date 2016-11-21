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
var TrashComponent = (function () {
    function TrashComponent() {
    }
    TrashComponent.prototype.ngOnInit = function () {
        $('#wd-trash').sortable({
            receive: this.removeElement
        });
    };
    TrashComponent.prototype.removeElement = function (event, ui) {
        //If ancestor is .tools, dont remove
        var parentsWithTools = $(ui.item).parents('.tools');
        if (!parentsWithTools.length)
            ui.item.remove();
    };
    TrashComponent = __decorate([
        core_1.Component({
            selector: "wd-trash",
            template: "\n        <div id=\"wd-trash\" class='trashcan'>\n            <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n        </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], TrashComponent);
    return TrashComponent;
}());
exports.TrashComponent = TrashComponent;
//# sourceMappingURL=trash.component.js.map