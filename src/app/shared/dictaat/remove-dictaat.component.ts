import { Component, EventEmitter, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DictaatService } from '../services/dictaat.service';

import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: "wd-remove-dictaat",
     host: {
        '(document:click)': 'outsideModal($event)',
    },
    templateUrl: "./remove-dictaat.component.html",
    providers: [DictaatService]
})
export class RemoveDictaatComponent {
    
    public errorMsg: string;

    public showModal: boolean = false;
    public disableSubmit: boolean = false;

    @Input()
    public dictaat : Dictaat;

    constructor(
        private dictaatService: DictaatService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        
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

    public remove(): void {
        //disable the submit button
        this.disableSubmit = true;

        //remove the deictaat and redirect
        this.dictaatService.removeDictaat(this.dictaat.name)
            .then((success) => {
                if(success){
                    debugger;
                    this.showModal = false;
                    this.router.navigateByUrl('/');
                }
                else{
                    this.disableSubmit = false;
                    this.errorMsg = "Something went wrong. Please contact an administrator";
                }

              
            });
       
    }
}

