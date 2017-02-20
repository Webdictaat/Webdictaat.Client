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
var dialog_service_1 = require("../services/dialog.service");
var HtmlComponent = (function () {
    function HtmlComponent(dialogService, changeDetector, zone) {
        var _this = this;
        this.dialogService = dialogService;
        this.changeDetector = changeDetector;
        this.zone = zone;
        this.editableElements = ".wd-editable, p, span, h1, h2, h3, h4, h5";
        this.containerElements = ".wd-container";
        this.htmlMode = false;
        this.pageEdited = new core_1.EventEmitter();
        this.onDrop = function (event, ui) {
            var target = ui.item.data("component");
            if (!target)
                return; //Sometimes we drop components that do not need any enhancement
            target.onDrop(ui).then(function (needsRecompile) {
                //If the component needs a recompile, we do a full rerender of the components.
                //Otherwise, we just do some class enhancement 
                if (needsRecompile) {
                    _this.recompile();
                }
                else {
                    ui.item
                        .removeAttr('style')
                        .find(_this.editableElements)
                        .attr("contenteditable", "true");
                    _this.pageElement.find('.wd-container').find(_this.editableElements)
                        .attr("contenteditable", "true");
                    //Als het gedropte item sub containers bevat, even drop enable
                    _this.enableContainers(ui.item);
                    //Helaas nodig omdat browsers stom doen omtrent content editable
                    _this.solveEnterIssue(ui.item);
                    setTimeout(function () { return ui.item.focus(); }, 0);
                }
                _this.recompile();
            });
        };
    }
    HtmlComponent.prototype.ngOnInit = function () {
        this.pageElement = $('#page'); //.html(this.innerHTML);
    };
    HtmlComponent.prototype.ngOnChanges = function () {
    };
    HtmlComponent.prototype.compileHtml = function (html) {
        this.innerHTML = html;
        this.changeDetector.detectChanges();
    };
    /**
     * Na het compileren moeten er een aantal klasse worden toegevoegd
     */
    HtmlComponent.prototype.afterCompile = function () {
        this.enableContainers(this.pageElement);
        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");
        this.solveEnterIssue(this.pageElement.find(this.editableElements));
        this.zone.run(function () { }); //Get back into angular running context
    };
    HtmlComponent.prototype.decompileHtml = function () {
        var pageObject = this.pageElement.find("dynamic-html");
        var lin = $(this).attr('href'); //verwijderen van ng-reflect voor id's
        pageObject.find(".wd-game-component").empty(); //leeg maken van gecompileerde componenten
        pageObject.find(this.editableElements).removeAttr("contenteditable");
        var htmlString = pageObject.html();
        htmlString = htmlString.replace(/ng-reflect-(.+?)=/g, '[$1]=');
        return htmlString;
    };
    HtmlComponent.prototype.recompile = function () {
        this.compileHtml(this.decompileHtml());
    };
    HtmlComponent.prototype.savePage = function () {
        this.pageEdited.emit(this.decompileHtml());
    };
    HtmlComponent.prototype.enableContainers = function (element) {
        element.find('.wd-container').sortable({
            connectWith: '.wd-container, #wd-trash',
            cancel: this.editableElements,
            hoverClass: "ui-state-hover",
            beforeStop: this.onDrop,
            placeholder: "highlight",
            forcePlaceholderSize: true,
            forceHelperSize: true,
            start: function (e, ui) {
                ui.placeholder.height(ui.item.outerHeight());
                ui.item.addClass('dragged');
            },
            stop: function (e, ui) {
                ui.item.removeClass('dragged');
            }
        });
    };
    /**
     * Deze methode is nodig om beter om te gaan met de user input 'enter'.
     * Origineel zal de browser een div toevoegen. Dit is geen nette valide html.
     * Deze code snippet vervangt de div door een span.
     * @param element
     */
    HtmlComponent.prototype.solveEnterIssue = function (element) {
        element.on("keypress", function (e) {
            var changedElement = $(this);
            //if the last character is a zero-width space, remove it
            var contentEditableHTML = changedElement.html();
            var lastCharCode = contentEditableHTML.charCodeAt(contentEditableHTML.length - 1);
            if (lastCharCode == 8203) {
                changedElement.html(contentEditableHTML.slice(0, -1));
            }
            // handle "Enter" keypress
            if (e.which == 13) {
                if (window.getSelection) {
                    var selection = window.getSelection();
                    var range = selection.getRangeAt(0);
                    var br = document.createElement("br");
                    var zwsp = document.createTextNode("\u200B");
                    var textNodeParent = document.getSelection().anchorNode.parentNode;
                    var inSpan = textNodeParent.nodeName == "SPAN";
                    var span = document.createElement("span");
                    // if the carat is inside a <span>, move it out of the <span> tag
                    if (inSpan) {
                        range.setStartAfter(textNodeParent);
                        range.setEndAfter(textNodeParent);
                    }
                    // insert the <br>
                    range.deleteContents();
                    range.insertNode(br);
                    range.setStartAfter(br);
                    range.setEndAfter(br);
                    // create a new span on the next line
                    if (inSpan) {
                        range.insertNode(span);
                        range.setStart(span, 0);
                        range.setEnd(span, 0);
                    }
                    // add a zero-width character
                    range.insertNode(zwsp);
                    range.setStartBefore(zwsp);
                    range.setEndBefore(zwsp);
                    // insert the new range
                    selection.removeAllRanges();
                    selection.addRange(range);
                    return false;
                }
            }
        });
    };
    return HtmlComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HtmlComponent.prototype, "innerHTML", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HtmlComponent.prototype, "pageEdited", void 0);
HtmlComponent = __decorate([
    core_1.Component({
        selector: "wd-html",
        styles: ["\n    .code-editor{\n        width:100%;\n        max-width:100%;\n    }\n"],
        template: "\n        <div class=\"togglebutton\">\n            <label>\n                <input type=\"checkbox\" [(ngModel)]=\"htmlMode\" ><span class=\"toggle\"></span> Toggle button\n            </label>\n        </div>\n        <div id='page'  [hidden]=\"htmlMode\">\n            <html-outlet [html]=\"innerHTML\" (afterCompile)=\"afterCompile()\"></html-outlet>\n        </div>\n        <div [hidden]=\"!htmlMode\">\n            <textarea class=\"code-editor\" rows=\"15\" [(ngModel)]=\"innerHTML\" > </textarea>\n        </div>\n        <div class='panel-footer'>\n            <button class=\"btn btn-lg btn-success btn-raised\" (click)='savePage()'>\n                <span class=\"glyphicon glyphicon-floppy-disk pull-left\"></span>&nbsp;Save page\n            </button>\n        </div>\n    ",
    }),
    __metadata("design:paramtypes", [dialog_service_1.DialogService,
        core_1.ChangeDetectorRef,
        core_1.NgZone])
], HtmlComponent);
exports.HtmlComponent = HtmlComponent;
//# sourceMappingURL=html.component.js.map