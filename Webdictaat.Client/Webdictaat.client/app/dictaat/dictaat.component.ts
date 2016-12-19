import { Component,  OnInit, Input } from '@angular/core';
import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';

import { DictaatService } from '../services/dictaat.service';
import { FilePreviewService } from '../services/file-preview.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: "wd-dictaat",
    templateUrl: "./app/dictaat/dictaat.component.html",
    styleUrls: ["./app/dictaat/dictaat.component.css"],
    providers: [DictaatService    ]
})
export class DictaatComponent implements OnInit {

    @Input()
    public dictaatName: String;

    public dictaat: Dictaat;

    public selectedPage;

    constructor(
        private dictaatService: DictaatService,
        private route: ActivatedRoute,
        private filePreviewService: FilePreviewService) { }

    public selectPage(page : Page): void {
        this.selectedPage = page;
    }

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['dictaatName'];
            this.dictaatService.getDictaat(name)
                .then(dictaat => {
                    this.dictaat = dictaat
                    this.selectedPage = dictaat.pages[0]
                });
        });
    }

}

