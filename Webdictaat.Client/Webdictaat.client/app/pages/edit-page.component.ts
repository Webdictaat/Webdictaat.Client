import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PagesService } from './pages.service';
import { Page } from '../models/page';




@Component({
    selector: "wd-edit-page",
    templateUrl: "http://localhost:3000/app/pages/edit-page.component.html",
    providers: [PagesService]
})
export class EditPageComponent implements OnInit {

    private pageElement;
    private page: Page;
    private dictaatName: string;


    constructor(
        private route: ActivatedRoute,
        private pagesService: PagesService
    ) {

    }

    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['pageName'];
            this.dictaatName = params['dictaatName'];
            this.pagesService.getPage(this.dictaatName, name)
                .then(page => {
                    this.page = page;
                });
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
