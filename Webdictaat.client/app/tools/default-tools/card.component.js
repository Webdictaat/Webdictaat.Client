"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
    return CardComponent;
}());
CardComponent = __decorate([
    core_1.Component({
        selector: "wd-card",
        template: "<div id='wd-card-tool' class='wd-component'>Card</div>"
    })
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map