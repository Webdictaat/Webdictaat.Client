import { Component, EventEmitter, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DictaatService } from "../../shared/services/dictaat.service";
import { Dictaat } from "../../shared/models/dictaat";
import { Observable } from "rxjs/Observable";
import { User } from "../../shared/models/user";

@Component({
    selector: "wd-settings-dictaat",
    templateUrl: "./settings-dictaat.component.html",
})
export class DictaatSettingsComponent {
    
    public errMsg: string;
    public showModal: boolean;
    public contributers: User[];

    private dictaat: Dictaat;

    constructor(private dictaatService: DictaatService) { }

    ngOnInit() {
        this.dictaatService.CurrentDictaat
        .subscribe((dictaat) => {
            if(dictaat){
                this.dictaat = dictaat;
                this.dictaatService.getDictaatContributers(dictaat.name)
                    .then(contributers => this.contributers = contributers)
            }
        });
    }

    public addContributers(email: string){
        this.errMsg = null;
        this.dictaatService.addContributer(this.dictaat.name, email)
        .then(contributers => {
            this.contributers = contributers;
            this.showModal = false;
        }).catch(err => {
            this.errMsg = "Could not find user with email " + email;
        })
        

    }


}