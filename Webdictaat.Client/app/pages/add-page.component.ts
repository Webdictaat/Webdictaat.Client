import { Component, EventEmitter, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PagesService } from './pages.service';
import { DictaatService } from '../services/dictaat.service';

import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-page",
    styleUrls: ['./app/pages/add-page.component.css'],
    templateUrl: "./app/pages/add-page.component.html",
    providers: [PagesService, DictaatService]
})
export class AddPageComponent  {

    public page: Page = new Page();
    public menus: string[] = [];

    public showModal: boolean = false;
    public menuName: string;

    private dictaat: Dictaat;

    @Output()
    public pageAdded = new EventEmitter();

    constructor(
        private pageService: PagesService,
        private dictaatService: DictaatService,
        private route: ActivatedRoute
    ) { }

    //event
    public ngOnInit(): void {
        
        this.route.params.forEach((params: Params) => {
            this.dictaatService.getDictaat(params['dictaatName'])
                .then(dictaat => {
                    this.dictaat = dictaat;
                });
        });
    }

    public add(): void {
        this.showModal = false;

        this.pageService.addPage(this.dictaat.name, this.page, this.menuName)
            .then(page => {
                this.page = new Page();
                this.pageAdded.emit(page)
            });
    }
}

