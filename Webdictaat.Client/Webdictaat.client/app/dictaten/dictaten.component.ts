import { Component, OnInit } from '@angular/core';
import { DictatenService } from './dictaten.service';
import { AccountService } from '../services/account.service';
import { DictaatSummary } from '../models/dictaat-summary';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
    selector: "wd-dictaten",
    templateUrl: "./app/dictaten/dictaten.component.html",
    styleUrls: ["./app/dictaten/dictaten.component.css"],
    providers: [DictatenService]
})
export class DictatenComponent implements OnInit {

    public dictaten: DictaatSummary[];
    public selectedDictaat: DictaatSummary;

    private user: User;

    constructor(
        private accountService: AccountService,
        private dictatenService: DictatenService,
        private httpService: Http,
        private router: Router
    ) { }

    public ngOnInit(): void {

        this.accountService.GetMyProfile()
            .then(user => this.user = user);

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

}

