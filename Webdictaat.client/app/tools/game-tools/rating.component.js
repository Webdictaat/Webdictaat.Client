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
var core_1 = require("@angular/core");
var rating_service_1 = require("../../services/rating.service");
var RatingToolComponent = (function () {
    function RatingToolComponent(ratingService) {
        this.ratingService = ratingService;
        this.template = "<wd-rating>";
    }
    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    RatingToolComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-rating-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        });
    };
    //returns a promise with a boolean, to recompile or not
    RatingToolComponent.prototype.onDrop = function (ui) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ratingService.ShowModal()
                .then(function (rating) {
                var element = "<wd-rating class='wd-game-component' [rid]='" + rating.id + "' />";
                ui.item.replaceWith(element);
                resolve(true);
            })
                .catch(function () {
                ui.item.remove();
            });
        });
    };
    return RatingToolComponent;
}());
RatingToolComponent = __decorate([
    core_1.Component({
        selector: "wd-rating-tool",
        template: "<div id='wd-rating-tool' class='wd-component'>Rating</div>",
    }),
    __metadata("design:paramtypes", [rating_service_1.RatingService])
], RatingToolComponent);
exports.RatingToolComponent = RatingToolComponent;
//# sourceMappingURL=rating.component.js.map