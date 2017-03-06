import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params , NavigationStart} from '@angular/router';
import { PagesService } from './pages.service';
import { Page } from '../models/page';
import { DirtyComp } from "../core/security/dirty.guard";




@Component({
    selector: "wd-edit-page",
    templateUrl: "app/pages/edit-page.component.html",
    styleUrls: [ "app/pages/edit-page.component.css"],
    providers: [PagesService]
})
export class EditPageComponent implements DirtyComp {
    
    public isDirty(): boolean{
        return this.originalSource != this.page.source;
    }


    private pageElement;
    public page: Page;
    public originalSource: string;

    public pageName: string;
    public dictaatName: string;

    public selectedTab: string = "text";

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
                .then(page => { this.page = page; this.originalSource = this.page.source});
        });

    }

    public savePage(): void {
        this.pagesService.editPage(this.dictaatName, this.page)
            .then((page) =>this.page = page );
    }

    public updateSource(pageSource): void {
        this.page.source = pageSource;
        this.savePage();
    }

}
