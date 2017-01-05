import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class AccountService {


    private accountUrl = 'http://webdictaat.azurewebsites.net/api/account/';

    //the user
    private user: User;
    private subject: Subject<User> = new Subject<User>();

    constructor(private http: Http) {
        this.http.get(this.accountUrl + "Current", { withCredentials: true })
            .toPromise()
            .then(response => {
                this.user = response.json() as User;
                this.subject.next(this.user);
            }).catch(this.handleError);
    }

    public Login(): void {
        window.location.href = this.accountUrl + "ExternalLogin?returnurl=" + window.location;
    }

    public Logoff(): void {
        this.http.post(this.accountUrl + "/LogOff", null)
            .toPromise()
            .then(response => {
                //reload browser after logoff
                location.reload();
            }).catch(this.handleError);
    }

    public getUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public update(): void {
        this.subject.next(this.user);
    }

    private handleError(): void {
        console.log("not logged in ");
    }

}