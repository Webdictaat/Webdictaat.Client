import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef, NgZone } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { ToolParams } from '../models/tool-params';

declare var $ : any;
declare var CKEDITOR : any;

@Component({
    selector: "wd-html",
    template: `
  
      

        <!-- most bootstrap elements only work when inside a container!! -->
        <div id='page' class='container maxed'>
            <html-outlet  [html]="innerHTML" (afterCompile)="afterCompile()"></html-outlet>
        </div>
        <div class='panel-footer'>
            <button class="btn btn-lg btn-success btn-raised" (click)='savePage()'>
                <span class="glyphicon glyphicon-floppy-disk pull-left"></span>&nbsp;Save page
            </button>
        </div>
    `,
})
export class HtmlComponent implements OnInit {
        

    public editableElements =  ".wd-editable";
    public containerElements = ".wd-container";

    @Input()
    public innerHTML: string;

    @Output()
    public pageEdited = new EventEmitter();

    private pageElement : any;

    constructor(
        private dialogService: DialogService,
        private changeDetector: ChangeDetectorRef,
        private zone: NgZone) { }

    public ngOnInit(): void{
        this.pageElement = $('#page'); //.html(this.innerHTML);
        CKEDITOR.disableAutoInline = true;
    }

    public ngOnChanges() : void{
    }

    private onDrop = (event: any, ui) => {

        var target = ui.item.data("component");

        if (!target)
            return; //If no target was added, return

        target.onDrop(ui).then((needsRecompile) => {

            //If the component needs a recompile, we do a full rerender of the components.
            //Otherwise, we just do some class enhancement 
            if (needsRecompile) {
                this.recompile();
            }
            else {

                //verwijder door jquery geplaatste stijl
                ui.item.removeAttr('style');

                //enable 
                this.enableEditor(ui.item);
                this.enableContainers(ui.item);
                this.enableDragging(ui.item);

                //Omdat het soms even duurt voordat een component kan renderen, moeten we hier even op wachten.
                //De focues 'refresht' het scherm zogenaamd. 
                setTimeout(() => ui.item.focus(), 0);
            }
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

        this.enableEditor(this.pageElement);
        this.enableContainers(this.pageElement);
        this.enableDragging(this.pageElement);

        this.zone.run(() => { }); //Get back into angular running context

       
    }

    public decompileHtml(): string {
        //ophalen html
        var pageObject: any = this.pageElement.find("dynamic-html");

        //var lin = $(this).attr('href'); //verwijderen van ng-reflect voor id's

        pageObject.find(".wd-game-component").empty(); //leeg maken van gecompileerde componenten

        pageObject.find('*').removeAttr("contenteditable"); //verwijder contenteditable van elementen
        
        //verwijder alle classes van jquery-ui (beginnnen met ui) en CKEditor
        pageObject.find('*').removeClass (function (index, className) {
            return (className.match (/(^|\s)ui-\S+/g) || className.match (/(^|\s)ui-\S+/g)  || []).join(' ');
        });

        pageObject.find('.handle').remove();//remove all handles
        pageObject.find('*').removeClass (function (index, className) {
            return (className.match (/(^|\s)ui-\S+/g) || []).join(' ');
        });
    
        //Angular replaces input attributes with an ng-reflect attributes
        //to get our valid html back, we need to remove these ng-reflect attributes
        var htmlString = pageObject.html();
        htmlString = htmlString.replace(/ng-reflect-(.+?)=/g, '[$1]=')

        return htmlString;
    }

    private recompile(): void {
        this.compileHtml(this.decompileHtml());
    }


    private savePage(): void {
        var html = this.decompileHtml()
        this.pageEdited.emit(html);
        this.compileHtml(html);
    }

    private enableDragging(element): void {
        //remove and add handles
        element.find('.handle').remove();
        element.find('.wd-component').addBack('.wd-component')
            .append("<div class='handle'><i class='fa fa-ellipsis-h' aria-hidden='true'></i></div>");
    }

    private enableEditor(element): void{
        
        element.find(this.editableElements)
            .attr("contenteditable", "true")
            .each((k, editableElement) => {
                CKEDITOR.inline(editableElement)
            });

    }

    private enableContainers(element): void {

        element.find('.wd-container').sortable({
            handle: ".handle",
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
}



