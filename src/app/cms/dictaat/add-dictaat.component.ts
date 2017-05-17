import { Component, EventEmitter, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';


import { ActivatedRoute, Params } from '@angular/router';
import { DictaatService } from "../../shared/services/dictaat.service";


@Component({
    selector: "wd-add-dictaat",
    templateUrl: "./add-dictaat.component.html",
    host: {
        '(document:click)': 'outsideModal($event)',
    },
    providers: []
})
export class AddDictaatComponent {

    public showModal: boolean = false;

    public dictaatName: string = "";

    @Output()
    public dictaatAdded = new EventEmitter();

    constructor(
        private dictatenService: DictaatService,
        private route: ActivatedRoute
    ) { }

    public trim(str) {
        return str.replace(/\s/g, '');
    }

    //event
    public ngOnInit(): void {

 
    }

    public outsideModal($event){
        //if showing, and some one clicked outside the modal container
        if(this.showModal && $event.srcElement.className == "modal")
        {
            this.cancel();
        }
    }

    public cancel(){
        this.showModal = false;
    }


    public add(): void {
        this.showModal = false;

        this.dictaatName = this.trim(this.dictaatName);

        this.dictatenService.addDictaat(this.dictaatName)
            .then(dictaten => {
                this.dictaatName = null;
                this.dictaatAdded.emit(dictaten)
            })
            .catch(reason => {

            });
    }
}

