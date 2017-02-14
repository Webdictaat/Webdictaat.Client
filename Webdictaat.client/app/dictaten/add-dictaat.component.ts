import { Component, EventEmitter, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DictatenService } from '../services/dictaten.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-dictaat",
    templateUrl: "./app/dictaten/add-dictaat.component.html",
    providers: []
})
export class AddDictaatComponent {

    public showModal: boolean = false;

    public dictaatName: string = "";

    @Output()
    public dictaatAdded = new EventEmitter();

    constructor(
        private dictatenService: DictatenService,
        private route: ActivatedRoute
    ) { }

    public trim(str) {
        return str.replace(/\s/g, '');
    }

    //event
    public ngOnInit(): void {

 
    }

    public add(): void {
        this.showModal = false;

        this.dictaatName = this.trim(this.dictaatName);

        this.dictatenService.addDictaat(this.dictaatName)
            .then(dictaten => {
                this.dictaatName = null;
                this.dictaatAdded.emit(dictaten)
            });
    }
}

