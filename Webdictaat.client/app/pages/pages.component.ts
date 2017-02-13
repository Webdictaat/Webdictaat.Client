import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PagesService} from './pages.service';
import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';
import { Router } from '@angular/router';


@Component({
    selector: "wd-pages",
    templateUrl: "./app/pages/pages.component.html",
    providers: [PagesService]
})
export class PagesComponent {

    public selectedFile;

    @Input()
    public dictaat: Dictaat;

    @Output()
    public pageSelected = new EventEmitter();

    public selectedPage: Page;


    public newPage: Page;

    constructor(
        private pagesSevice: PagesService,
        private router : Router
     ) { }

    public selectPage(page): void {
        this.selectedPage = page;
        this.pageSelected.emit(page);
    }

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

