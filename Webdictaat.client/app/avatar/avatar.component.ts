import { Component,  OnInit, Input } from '@angular/core';
import { Dictaat } from '../models/dictaat';

import { AccountService } from '../services/account.service';
import { User } from '../models/user';

import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: "wd-avatar",
    template: `
<div *ngIf="user">
    <ul class="nav navbar-nav navbar-right">
        <li class="item-hover" routerLink="/profile">
            <p class="navbar-text">Signed in as {{user.email}}</p>
        </li>
        <li>
            <button class="btn btn-default navbar-btn" (click)="Logout()">Logout</button>
             
        </li>
    </ul>
</div>

<div *ngIf="!user">
    <ul class="nav navbar-nav navbar-right">
        <li>
            <button class="btn btn-default navbar-btn" (click)="Login()">Login</button>
        </li>
    </ul>
</div>
`,
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

