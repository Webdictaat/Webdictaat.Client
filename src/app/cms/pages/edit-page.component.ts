import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params , NavigationStart} from '@angular/router';
import { PagesService } from './pages.service';
import { HtmlComponent } from "../tools/html.component";
import { Page } from "../../shared/models/page";
import { ConfigService } from "../../shared/services/config.service";


@Component({
    selector: "wd-edit-page",
    templateUrl: "./edit-page.component.html",
    styleUrls: [ "./edit-page.component.css"],
    providers: [PagesService]
})
export class EditPageComponent   { //implements DirtyComp
    

    @ViewChild(HtmlComponent)
    private htmlComponent: HtmlComponent;

    private pageElement;
    public page: Page;
    public originalSource: string;

    public raw: boolean;

    public pageName: string;
    public dictaatName: string;
    public timer: any;

    //codemirror
    public codeconfig : any = { 
        lineNumbers: true,
        mode: "HTML",
        
    };
    

    constructor(
        private route: ActivatedRoute,
        private pagesService: PagesService,
        private router: Router,
        private config: ConfigService,
    ) {}

    public ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            this.pageName = params['pageName'];
            this.dictaatName = params['dictaatName'];
            this.config.SetLocalConfig({ name: this.dictaatName });
            this.pagesService.getPage(this.dictaatName, this.pageName)
                .then(page => { 
                    this.page = page; 
                    this.originalSource = this.page.source //required for the dirty flag
                    this.checkForDirt();
                });
        });

    }

    public checkForDirt = function(){
        if(this.raw){
            this.isDirty = this.page.source != this.originalSource;
        }
        else{
            if(this.htmlComponent){
                var decompiled = this.htmlComponent.decompileHtml();
                this.isDirty = this.page.source != decompiled;
            }
            else{
                this.isDirty = false;
            }
        }
        setTimeout(() => this.checkForDirt(), 1000);
    }

    public savePage(): void {

        if(!this.raw){
            //retrieve the decompiled html from ...
            var source = this.htmlComponent.decompileHtml();
            source = source.replace('{', '&#123;');
            source = source.replace('}', '&#125;');
            this.page.source = source;
        }
       

        this.pagesService.editPage(this.dictaatName, this.page)
            .then((page) => {
                this.originalSource = this.page.source;
                this.page = page;
             }, (error) => alert("Something broke :( i am sorry!"));
    }
  

}
