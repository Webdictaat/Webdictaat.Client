import { Component, EventEmitter, Output, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PagesService } from './pages.service';
import { DictaatService } from '../services/dictaat.service';

import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseModalService, BaseModalComponent } from "../core/basemodal.service";

@Component({
    selector: "wd-add-page",
    styleUrls: ['./add-page.component.css'],
    templateUrl: "./add-page.component.html",
    providers: [DictaatService]
})
export class AddPageComponent extends BaseModalComponent {
        errors: any[];
    
    public page: Page = new Page();
    public menus: string[] = [];
    public menuName: string;
    private dictaat: Dictaat;

    constructor(
        private pageService: PagesService,
        private dictaatService: DictaatService,
        private route: ActivatedRoute,
        private zone: NgZone
    ) { 
        super();
        this.page.name = "";
    }

    public trim(str) {
        return str.replace(/\s/g, '');
    }

    //event
    public ngOnInit(): void {
        super.wdOnInit(this.pageService, this.zone);
        this.route.params.forEach((params: Params) => {
            this.dictaatService.getDictaat(params['dictaatName'])
                .then(dictaat => {
                    this.dictaat = dictaat;
                });
        });
    }

    public add(): void {

        this.errors = [];

        this.dictaat.pages.forEach((page) => {
            if(page.name == this.page.name){
                this.errors.push("Page with name " + this.page.name + " already excists");
            }
        });

        if(this.errors.length != 0)
            return;

        var page = {
            name: this.page.name, 
            url: this.trim(this.page.name)
        };

        this.pageService.addPage(this.dictaat.name, page, this.menuName)
            .then(page => {
                this.page = new Page();
                this.pageService.CompleteModal(page);
            });
    }
}

