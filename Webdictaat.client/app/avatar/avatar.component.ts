import { Component,  OnInit, Input } from '@angular/core';
import { Dictaat } from '../models/dictaat';

import { AccountService } from '../services/account.service';
import { User } from '../models/user';

import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: "wd-avatar",
    templateUrl: "./app/avatar/avatar.component.html",
    providers: []
})
export class AvatarComponent implements OnInit {

    public user: User;
   
    constructor(private accountService: AccountService) { }

    public ngOnInit(): void {

        this.accountService.getUser()
            .subscribe(user => {
                this.user = user as User
            });
    }

    public Login(): void {
        this.accountService.Login();
        
    }

    public Logout(): void {
        this.accountService.Logoff();
    }
   
}

