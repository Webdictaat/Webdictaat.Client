import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PagesService} from './pages.service';
import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';
import { Router } from '@angular/router';


@Component({
    selector: "wd-pages",
    templateUrl: "./pages.component.html",
    providers: [PagesService]
})
export class PagesComponent {

    public newPage: Page;

    @Input()
    public dictaat: Dictaat;

    constructor(
        private pagesSevice: PagesService,
        private router : Router
     ) { }

    public getPages(): void {
        this.pagesSevice.getPages(this.dictaat.name)
            .then(pages => this.dictaat.pages = pages);
    }

    public deletePage(page: Page): void {
        this.pagesSevice.deletePage(this.dictaat.name, page.name)
            .then(() => this.getPages());
    }

    public editPage(page: Page): void {
        this.router.navigateByUrl("/dictaten/" + this.dictaat.name + "/pages/" + page.name); 
    }


}

