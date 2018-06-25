import { Component,  OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { Dictaat } from "core";
import { DictaatService } from "core";


@Component({
    selector: "wd-dictaat",
    templateUrl: "./dictaat.component.html",
    styleUrls: ["./dictaat.component.css"],
    providers: []
})
export class DictaatComponent implements OnInit {

    public dictaat: Dictaat;
    public activeTab: string = "pages";

    constructor(
        private dictaatService: DictaatService,
        protected route: ActivatedRoute, 
        private Router: Router) { }


    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['dictaatName'];
            this.dictaatService.getDictaat(name)
                .then(dictaat => this.dictaat = dictaat )
                .catch(e => {
                    this.Router.navigateByUrl('/');  
                });
        });
    }

}

