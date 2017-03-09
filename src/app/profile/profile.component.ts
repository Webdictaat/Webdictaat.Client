import { Component, OnInit, Input } from '@angular/core';
import { DictatenService } from '../services/dictaten.service';
import { AccountService } from '../services/account.service';

@Component({
    selector: "wd-profile",
    templateUrl: "./profile.component.html",
    providers: []
})
export class ProfileComponent implements OnInit {

    public msg: string = "hello world";

    public user;
    public dictaten; 

    constructor(private dictatenService: DictatenService, private accountService: AccountService) { }

    public ngOnInit(): void {

        this.accountService.getUser()
            .subscribe(user => this.user = user);

        this.dictatenService.getDictaten()
            .then(dictaten => this.dictaten = dictaten);
      }
}

