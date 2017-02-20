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
//stackoverflow.com/questions/40060498/angular-2-1-0-create-child-component-on-the-fly-dynamically/40080290#40080290
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var game_elements_module_1 = require("../game-elements/game-elements.module");
var question_service_1 = require("../services/question.service");
var rating_service_1 = require("../services/rating.service");
function createComponentFactory(compiler, metadata) {
    var cmpClass = (function () {
        function DynamicComponent() {
        }
        return DynamicComponent;
    }());
    var decoratedCmp = core_1.Component(metadata)(cmpClass);
    var DynamicHtmlModule = (function () {
        function DynamicHtmlModule() {
        }
        return DynamicHtmlModule;
    }());
    DynamicHtmlModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, router_1.RouterModule, game_elements_module_1.GameElementsModule],
            providers: [question_service_1.QuestionsService, rating_service_1.RatingService],
            declarations: [decoratedCmp]
        })
    ], DynamicHtmlModule);
    return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
        .then(function (moduleWithComponentFactory) {
        return moduleWithComponentFactory.componentFactories.find(function (x) { return x.componentType === decoratedCmp; });
    });
}
exports.createComponentFactory = createComponentFactory;
var HtmlOutlet = (function () {
    function HtmlOutlet(vcRef, compiler) {
        this.vcRef = vcRef;
        this.compiler = compiler;
        this.afterCompile = new core_1.EventEmitter();
    }
    HtmlOutlet.prototype.ngOnChanges = function () {
        var _this = this;
        var html = this.html;
        if (!html)
            return;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var compMetadata = new core_1.Component({
            selector: 'dynamic-html',
            template: this.html,
        });
        createComponentFactory(this.compiler, compMetadata)
            .then(function (factory) {
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], _this.vcRef.parentInjector);
            _this.cmpRef = _this.vcRef.createComponent(factory, 0, injector, []);
            _this.afterCompile.emit();
        });
    };
    HtmlOutlet.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    return HtmlOutlet;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HtmlOutlet.prototype, "html", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HtmlOutlet.prototype, "afterCompile", void 0);
HtmlOutlet = __decorate([
    core_1.Directive({ selector: 'html-outlet' }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.Compiler])
], HtmlOutlet);
exports.HtmlOutlet = HtmlOutlet;
//# sourceMappingURL=html-outlet.directive.js.map