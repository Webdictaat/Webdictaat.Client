import { Component,  OnInit, Input } from '@angular/core';
import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';

import { DictaatService } from '../services/dictaat.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
    selector: "wd-dictaat",
    templateUrl: "./app/dictaat/dictaat.component.html",
    styleUrls: ["./app/dictaat/dictaat.component.css"],
    providers: [DictaatService    ]
})
export class DictaatComponent implements OnInit {

    public dictaat: Dictaat;

    constructor(
        private dictaatService: DictaatService,
        private route: ActivatedRoute, 
        private Router: Router) { }


    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['dictaatName'];
            this.dictaatService.getDictaat(name)
                .then(dictaat => {
                    this.dictaat = dictaat
                });
        });
    }

}

