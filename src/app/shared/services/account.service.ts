import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { wdApi } from '../core/wd.service';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/rx";


@Injectable()
export class AccountService {

    private user: User;
    public User: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private wdapi: wdApi) {
        this.wdapi.get("/account/Current")
            .toPromise()
            .then(response => {
                this.user = response.json() as User;
                this.User.next(this.user);
            });
    }

    public Login(): void {
        window.location.href = this.wdapi.urlPrefix + "/account/ExternalLogin?returnurl=" + window.location;
    }

    public Logoff(): void {
        //redrict to home after logout
        window.location.href = this.wdapi.urlPrefix + "/account/LogOff?returnurl=" + window.location;
    }
}