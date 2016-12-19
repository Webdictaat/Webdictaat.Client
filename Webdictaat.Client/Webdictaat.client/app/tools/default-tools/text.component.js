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
var TextComponent = (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-text-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    TextComponent.prototype.onDrop = function (ui) {
        return new Promise(function (resolve, reject) {
            var newItem = $("<div class='wd-component'><p>Change me!</p></div>");
            ui.item.replaceWith(newItem);
            newItem.focus();
            resolve(false);
        });
    };
    TextComponent = __decorate([
        core_1.Component({
            selector: "wd-text",
            template: "<div id='wd-text-tool' class='wd-component'>Tekst</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TextComponent);
    return TextComponent;
}());
exports.TextComponent = TextComponent;
//# sourceMappingURL=text.component.js.map