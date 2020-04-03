import { Injectable } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { Headers, Http, Response } from '@angular/http';
import { wdApi } from '../core/wd.service';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/rx";
import { Router, ActivatedRoute, Params } from '@angular/router';


@Injectable()
export class AccountService {

    public User: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private wdapi: wdApi, 
        private router: Router, 
        private activatedRoute: ActivatedRoute)
     {
        this.getCurrentUser();
    }

    private getCurrentUser(){
        var user = JSON.parse(localStorage.getItem('user'));
        this.User.next(user);
        this.wdapi.get('/account/current')
            .toPromise()
            .then((response) => {
                var user = response.json() as User;
                this.User.next(user);
                localStorage.setItem('user', JSON.stringify(user));
                })
            .catch((err) => {
                this.User.next(null);
                localStorage.setItem('user', null);
            })
    }


    public SetToken(token: string): void
    {
        this.wdapi.setToken(token);
        this.getCurrentUser();   
    }

    public Login(): void {
        //retrieve the host url including subfolders this app is runing in.
        var baseUrl: string = window.location.toString().split('#')[0];
        window.location.href = this.wdapi.urlPrefix + "/account/AvansLogin?returnurl=" + baseUrl;
    }

    public Logoff(): void {
        //redrict to home after logout
        this.wdapi.removeToken();
        localStorage.removeItem('user');
        window.location.href = this.wdapi.urlPrefix + "/account/LogOff?returnurl=" + window.location;

    }
}