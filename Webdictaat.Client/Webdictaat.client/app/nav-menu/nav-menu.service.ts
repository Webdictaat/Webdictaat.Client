import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router} from '@angular/router';

//Nodig om een object om te toveren in een promise.

import { NavMenu, NavMenuItem } from '../models/nav-menu';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class NavMenuService {

    constructor(
        private http: Http,
        private router: Router) { }

    private menu: NavMenu; 

    public getNavMenu() : Promise<NavMenu>{
        if (this.menu != null) {
            return Promise.resolve(this.menu);
        }
        else{
            return this.http.get('/nav-menu.json')
                .toPromise()
                .then((response) => 
                    this.menu = response.json() as NavMenu
                ).catch(this.handleError);
        }
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

} 