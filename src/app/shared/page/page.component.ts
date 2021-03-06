import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from './page.service';

declare var window:any;

@Component({
    selector: "wd-page",
    template: `
    <div *ngIf="page">
        <html-outlet [html]="page" (afterCompile)="enableExternalLibraries()"></html-outlet>
    </div>
`,
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
                .then(page => {
                    this.page = page;
                });
        });
    }

    public enableExternalLibraries(): void{
        if(window.Prism){
           window.Prism.highlightAll();
        }
    }
}

