import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { DictaatService } from "../services/dictaat.service";

@Component({
    selector: "wd-profile",
    templateUrl: "./profile.component.html",
    providers: []
})
export class ProfileComponent implements OnInit {

    public msg: string = "hello world";

    public user;
    public dictaten; 

    constructor(private dictatenService: DictaatService, private accountService: AccountService) { }

    public ngOnInit(): void {

        this.accountService.User.subscribe(user => this.user = user);

        this.dictatenService.getDictaten()
            .then(dictaten => this.dictaten = dictaten);
      }
}

