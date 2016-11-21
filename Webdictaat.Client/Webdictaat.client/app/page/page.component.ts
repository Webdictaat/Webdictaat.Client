import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from './page.service';

@Component({
    selector: "wd-page",
    templateUrl: "http://localhost:3000/app/page/page.component.html",
    providers: [PageService]
})
export class PageComponent implements OnInit {

    private page;

    constructor(
        private route: ActivatedRoute,
        private pageService: PageService
    ) { }

    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['pageName'];
            this.pageService.getPage(name)
                .then(page => 
                    this.page = page);
        });
    }
}

