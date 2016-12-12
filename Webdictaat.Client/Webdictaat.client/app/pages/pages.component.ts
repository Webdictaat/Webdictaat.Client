import { Component, OnInit, Input } from '@angular/core';

import { PagesService} from './pages.service';
import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';
import { FilePreviewService } from '../services/file-preview.service';
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

    public newPage: Page;

    constructor(
        private pagesSevice: PagesService,
        private filePreviewService: FilePreviewService,
        private router : Router
     ) { }

    public selectPage(page): void {
        this.filePreviewService.selectFile(this.dictaat.name, page);
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

