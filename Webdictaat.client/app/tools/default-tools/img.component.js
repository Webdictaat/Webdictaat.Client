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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var images_service_1 = require("../../services/images.service");
var ImgComponent = (function () {
    function ImgComponent(imageServie) {
        this.imageServie = imageServie;
    }
    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    ImgComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-img-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    ImgComponent.prototype.onDrop = function (ui) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.imageServie.ShowModal()
                .then(function (imgName) {
                ui.item.replaceWith("<div class='wd-component'><img src='http://webdictaat.azurewebsites.net//images//" + imgName + "'/></div>");
                resolve(false);
            })
                .catch(function () {
                ui.item.remove();
            });
        });
    };
    return ImgComponent;
}());
ImgComponent = __decorate([
    core_1.Component({
        selector: "wd-img-tool",
        template: "<div id='wd-img-tool' class='wd-component' >Img</div>",
    }),
    __metadata("design:paramtypes", [images_service_1.ImageService])
], ImgComponent);
exports.ImgComponent = ImgComponent;
//# sourceMappingURL=img.component.js.map