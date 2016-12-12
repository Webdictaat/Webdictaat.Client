import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { ToolParams } from '../models/tool-params';

declare var $: JQueryStatic;

@Component({
    selector: "wd-html",
    template: `
        <div id='page'>
            <html-outlet [html]="innerHTML" (afterCompile)="afterCompile()"></html-outlet>
        </div>
        <button class='btn btn-default' (click)='savePage()'>Save</button>
    `,
})
export class HtmlComponent implements OnInit{

    public editableElements =  "p, span, h1, h2, h3, h4, h5";
    public containerElements = ".wd-container";

    @Input()
    public innerHTML: string;

    @Output()
    public pageEdited = new EventEmitter();

    private pageElement : JQuery;

    constructor(private dialogService: DialogService, private changeDetector: ChangeDetectorRef) {}

    public ngOnInit(): void{
        this.pageElement = $('#page'); //.html(this.innerHTML);
    }

    public ngOnChanges() : void{
    }

    private onDrop = (event: any, ui) => {

        var callback = ui.item.data("callback");
        var component = this;

        if (callback) 
            callback(ui, function () {
                component.recompile();
            });
        
        ui.item
            .removeAttr('style')
            .find(this.editableElements)
            .attr("contenteditable", "true");

        //Helaas nodig omdat browsers stom doen omtrent content editable
        this.solveEnterIssue(ui.item);

        this.enableContainers(ui.item);

        //we need to refresh the things
        
    }

    private compileHtml(html : string): void {
        this.innerHTML = html;
        this.changeDetector.detectChanges();
    }

    /**
     * Na het compileren moeten er een aantal klasse worden toegevoegd
     */
    public afterCompile() {

        this.enableContainers(this.pageElement);

        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");

        this.solveEnterIssue(this.pageElement.find(this.editableElements));

    }

    private decompileHtml(): string {
        var pageObject: JQuery = this.pageElement.find("dynamic-html");
        var lin = $(this).attr('href'); //verwijderen van ng-reflect voor id's
        pageObject.find(".wd-game-component").empty(); //leeg maken van gecompileerde componenten
        pageObject.find(this.editableElements).removeAttr("contenteditable");
        var htmlString = pageObject.html();
        htmlString = htmlString.replace(/ng-reflect-(.+?)=/g, '[$1]=')
        return htmlString;
    }

    private recompile(): void {
        this.compileHtml(this.decompileHtml());
    }


    private savePage(): void {
        this.pageEdited.emit(this.decompileHtml());
    }


    private enableContainers(element): void {

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
    }  

    /**
     * Deze methode is nodig om beter om te gaan met de user input 'enter'.
     * Origineel zal de browser een div toevoegen. Dit is geen nette valide html.
     * Deze code snippet vervangt de div door een span.
     * @param element
     */
    private solveEnterIssue(element): void {

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
    }
}



