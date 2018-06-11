import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/rx';
import { DictaatService } from "core/lib/services/dictaat.service";
import { AccountService } from "core/lib/services/account.service";
import { DictaatSummary } from "core/lib/models/dictaat-summary";


@Component({
    selector: "wd-dictaten",
    templateUrl: "./dictaten.component.html",
    styleUrls: ["./dictaten.component.css"],
    providers: []
})
export class DictatenComponent implements OnInit {

    public dictaten: DictaatSummary[];
    public selectedDictaat: DictaatSummary;

    public isAuth: boolean;
 
    public loaderValue: number = 0;

    constructor(
        private accountService: AccountService,
        private dictatenService: DictaatService,
        private httpService: Http,
        private router: Router
    ) { }

    public ngOnInit(): void {

        //fake loader :D
        let timer = Observable.timer(0, 25);
        timer.subscribe(t => {
            if (this.loaderValue == 100) {
                this.loaderValue++;
            }
        });

        this.accountService.User.subscribe(user => this.isAuth = user != null);

        this.dictatenService.getDictaten()
            .then(dictaten => { 
                this.setDictaten(dictaten);
            });
    }

    public setDictaten(dictaten: DictaatSummary[]): void {
        this.dictaten = dictaten.filter(d => d.canEdit  || d.isEnabled);
    }

    public gotoDetail(dictaat: DictaatSummary): void {
        let link = ['/dictaten', dictaat.name];
        this.router.navigate(link);
    }

    public login() {
        this.accountService.Login();
    }

}

