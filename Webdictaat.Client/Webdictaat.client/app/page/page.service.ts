import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { Page } from '../models/page';
import { PageSummary } from '../models/page-summary';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class PageService {

    constructor(private http: Http) { }

    public getPage(pageName: String) {
        return this.http.get('/pages/' + pageName + '.html')
            .toPromise()
            .then(response => response.text()    
            ).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}