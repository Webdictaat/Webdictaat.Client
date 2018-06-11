import { Component,  OnInit, Input } from '@angular/core';
import { Dictaat } from '../models/dictaat';

import { AccountService } from '../services/account.service';
import { User } from '../models/user';

import { ActivatedRoute, Params } from '@angular/router';
import { DictaatService } from "../services/dictaat.service";
import { ConfigService } from "../services/config.service";


@Component({
    selector: "wd-avatar",
    styles: [`
    
        .profilelink{color:white;}
        div{ float:right;}
        a{color:white;}
    `],
    templateUrl: './avatar.component.html',
    providers: []
})
export class AvatarComponent implements OnInit {

    public user: User;

    @Input() isRoute : boolean = false;
   
    constructor(
        private accountService: AccountService, 
        private dictaatService: DictaatService,
        private configService: ConfigService) { 
            
        }

    public ngOnInit(): void {
        this.accountService.User.subscribe(user => {
            this.user = user as User;
        });
    }

    public Login(): void {
        this.accountService.Login();
        
    }

    public Logout(): void {
        this.accountService.Logoff();
    }
   
}

