import { Component,  OnInit, Input } from '@angular/core';
import { Dictaat } from '../models/dictaat';

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

    public selectedFile;

    @Input()
    public dictaatName: String;

    public dictaat: Dictaat;

    constructor(
        private dictaatService: DictaatService,
        private route: ActivatedRoute,
        private filePreviewService: FilePreviewService) { }

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['dictaatName'];
            this.dictaatService.getDictaat(name)
                .then(dictaat => this.dictaat = dictaat);
        });
    }

    public selectPage(page): void {
        this.filePreviewService.selectFile(this.dictaat.name, page);
    }

    public addPage(): void {

    }

    public goBack(): void {
        window.history.back();
    }
}

