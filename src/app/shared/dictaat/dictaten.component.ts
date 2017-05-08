import { Component, OnInit } from '@angular/core';
import { DictatenService } from '../services/dictaten.service';
import { AccountService } from '../services/account.service';
import { DictaatSummary } from '../models/dictaat-summary';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs/rx';


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
        private dictatenService: DictatenService,
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

        this.accountService.getUser().subscribe(user => this.isAuth = user != null);
        this.accountService.update();

        this.dictatenService.getDictaten()
            .then(dictaten => this.dictaten = dictaten);
    }

    public setDictaten(dictaten: DictaatSummary[]): void {
        this.dictaten = dictaten;
    }

    public gotoDetail(dictaat: DictaatSummary): void {
        let link = ['/dictaten', dictaat.name];
        this.router.navigate(link);
    }

    public login() {
        this.accountService.Login();
    }

}

