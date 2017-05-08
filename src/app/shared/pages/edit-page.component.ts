import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params , NavigationStart} from '@angular/router';
import { PagesService } from './pages.service';
import { Page } from '../models/page';
import { DirtyComp } from "../core/security/dirty.guard";
import { HtmlComponent } from "../tools/html.component";


@Component({
    selector: "wd-edit-page",
    templateUrl: "./edit-page.component.html",
    styleUrls: [ "./edit-page.component.css"],
    providers: [PagesService]
})
export class EditPageComponent implements DirtyComp  {
    
    public isDirty(): boolean{

        var editedSource = this.htmlComponent.decompileHtml();
        var dirty = this.originalSource != editedSource;
        return dirty;
    }

    @ViewChild(HtmlComponent)
    private htmlComponent: HtmlComponent;

    private pageElement;
    public page: Page;
    public originalSource: string;

    public pageName: string;
    public dictaatName: string;
    public timer: any;

    constructor(
        private route: ActivatedRoute,
        private pagesService: PagesService,
        private router: Router
    ) {}

    public ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            this.pageName = params['pageName'];
            this.dictaatName = params['dictaatName'];
            this.pagesService.getPage(this.dictaatName, this.pageName)
                .then(page => { 
                    this.page = page; 
                    this.originalSource = this.page.source //required for the dirty flag
                    this.checkForDirt();
                });
        });

    }

    public checkForDirt = function(){
        if(this.htmlComponent){
             var decompiled = this.htmlComponent.decompileHtml();
             this.isDirty = this.page.source != decompiled;
        }
        else{
            this.isDirty = false;
        }
        setTimeout(() => this.checkForDirt(), 1000);
    }

    public savePage(): void {

        //retrieve the decompiled html from ...
        this.page.source = this.htmlComponent.decompileHtml();

        this.pagesService.editPage(this.dictaatName, this.page)
            .then((page) => {
                  alert('Page saved');
             }, (error) => alert("Something broke :( i am sorry!"));
    }
  

}
