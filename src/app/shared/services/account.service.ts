﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { wdApi } from '../core/wdapi.service';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class AccountService {


    //the user
    private user: User;
    private subject: Subject<User> = new Subject<User>();

    constructor(private wdapi: wdApi) {
        this.wdapi.get("/account/Current")
            .toPromise()
            .then(response => {
                this.user = response.json() as User;
                this.subject.next(this.user);
            });
    }

    public Login(): void {
        window.location.href = this.wdapi.urlPrefix + "/account/ExternalLogin?returnurl=" + window.location;
    }

    public Logoff(): void {
        //redrict to home after logout
        window.location.href = this.wdapi.urlPrefix + "/account/LogOff?returnurl=" + window.location;
    }

    public getUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public update(): void {
        this.subject.next(this.user);
    }

}