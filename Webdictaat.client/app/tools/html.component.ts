import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef, NgZone } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { ToolParams } from '../models/tool-params';

declare var $: JQueryStatic;

@Component({
    selector: "wd-html",
    styles: [`
    .code-editor{
        width:100%;
        max-width:100%;
    }
`],
    template: `
  
        <div id='page'>
            <html-outlet  [html]="innerHTML" (afterCompile)="afterCompile()"></html-outlet>
        </div>
        <div class='panel-footer'>
            <button class="btn btn-lg btn-success btn-raised" (click)='savePage()'>
                <span class="glyphicon glyphicon-floppy-disk pull-left"></span>&nbsp;Save page
            </button>
        </div>
    `,
})
export class HtmlComponent implements OnInit{

    public editableElements =  ".wd-editable, p, span, h1, h2, h3, h4, h5";
    public containerElements = ".wd-container";

    @Input()
    public innerHTML: string;

    @Output()
    public pageEdited = new EventEmitter();

    private pageElement : JQuery;

    constructor(
        private dialogService: DialogService,
        private changeDetector: ChangeDetectorRef,
        private zone: NgZone) { }

    public ngOnInit(): void{
        this.pageElement = $('#page'); //.html(this.innerHTML);
    }

    public ngOnChanges() : void{
    }

    private onDrop = (event: any, ui) => {

        var target = ui.item.data("component");

        if (!target)
            return; //Sometimes we drop components that do not need any enhancement

        target.onDrop(ui).then((needsRecompile) => {

            //If the component needs a recompile, we do a full rerender of the components.
            //Otherwise, we just do some class enhancement 
            if (needsRecompile) {
                this.recompile();
            }
            else {

                ui.item
                    .removeAttr('style')
                    .find(this.editableElements)
                    .attr("contenteditable", "true");

                this.pageElement.find('.wd-container').find(this.editableElements)
                    .attr("contenteditable", "true");

                //Als het gedropte item sub containers bevat, even drop enable
                this.enableContainers(ui.item);

                //Helaas nodig omdat browsers stom doen omtrent content editable
                this.solveEnterIssue(ui.item);

                //Omdat het soms even duurt voordat een component kan renderen, moeten we hier even op wachten.
                //De focues 'refresht' het scherm zogenaamd. 
                setTimeout(() => ui.item.focus(), 0);

            }

            this.recompile();
        })
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

        this.zone.run(() => { }); //Get back into angular running context
    }

    public decompileHtml(): string {
        //ophalen html
        var pageObject: JQuery = this.pageElement.find("dynamic-html");

        //var lin = $(this).attr('href'); //verwijderen van ng-reflect voor id's

        pageObject.find(".wd-game-component").empty(); //leeg maken van gecompileerde componenten

        pageObject.find('*').removeAttr("contenteditable"); //verwijder contenteditable van elementen
        //verwijder alle classes van jquery-ui (beginnnen met ui)
        pageObject.find('*').removeClass (function (index, className) {
            return (className.match (/(^|\s)ui-\S+/g) || []).join(' ');
        });
    
        
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
     * @param element waarbij 'enters' vervangen moeten worden
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



