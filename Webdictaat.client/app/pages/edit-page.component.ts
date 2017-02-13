import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PagesService } from './pages.service';
import { Page } from '../models/page';




@Component({
    selector: "wd-edit-page",
    templateUrl: "app/pages/edit-page.component.html",
    providers: [PagesService]
})
export class EditPageComponent {

    @Input()
    public pageName: string;

    private pageElement;

    private page: Page;

    private dictaatName: string;

    constructor(
        private route: ActivatedRoute,
        private pagesService: PagesService
    ) {

    }

    public ngOnChanges(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['pageName'];
            this.dictaatName = params['dictaatName'];
            this.pagesService.getPage(this.dictaatName, this.pageName)
                .then(page => { this.page = page; });
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
