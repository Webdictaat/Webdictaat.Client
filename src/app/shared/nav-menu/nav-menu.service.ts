import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router} from '@angular/router';

//Nodig om een object om te toveren in een promise.

import { NavMenuItem } from '../models/nav-menu';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { wdApi } from "../core/wd.service";

@Injectable()
export class NavMenuService {

    constructor(
        private https: Http,
        private router: Router,
        private api: wdApi) { }

    private menuItems: NavMenuItem[]; 

    public getLocalNavMenu() : Promise<NavMenuItem[]>{
        if (this.menuItems != null) {
            return Promise.resolve(this.menuItems);
        }
        else{
            return this.http.get('nav-menu.json?v=' + new Date().getTime())
                .toPromise()
                .then((response) => 
                    this.menuItems = response.json() as NavMenuItem[]
                ).catch(this.handleError);
        }
    }

    public updateNavMenu(dictaatName: string, menuItems: NavMenuItem[]){
        var resource = "/dictaten/" + dictaatName + "/menu";
        return this.api.put(resource, menuItems)
            .toPromise()
            .then((response) => response.json() as NavMenuItem[])
            
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

} 