import { Component, EventEmitter, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DictatenService } from './dictaten.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-dictaat",
    templateUrl: "./app/dictaten/add-dictaat.component.html",
    providers: [DictatenService]
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

    //event
    public ngOnInit(): void {

 
    }

    public add(): void {
        this.showModal = false;

        this.dictatenService.addDictaat(this.dictaatName)
            .then(dictaten => {
                this.dictaatName = null;
                this.dictaatAdded.emit(dictaten)
            });
    }
}

