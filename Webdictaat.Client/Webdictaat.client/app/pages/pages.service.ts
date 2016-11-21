import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { Page } from '../models/page';
import { PageSummary } from '../models/page-summary';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class PagesService {

    constructor(private http: Http) { }

    private dictatenUrl = 'http://localhost:65418/api/dictaten/';

    public getPages(dictaatName: String): Promise<PageSummary[]> {
        let url: string = this.dictatenUrl + dictaatName + '/pages';
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as PageSummary[]
            ).catch(this.handleError);
    }

    public addPage(dictaatName: String, page: Page, menuName: string): Promise<Page> {

        var data = {
            page: page,
            subMenu: menuName
        };

        let url: string = this.dictatenUrl + dictaatName + '/pages';

        return this.http.post(url, data)
            .toPromise()
            .then(response =>
                response.json() as Page
            ).catch(this.handleError);
    }

    public editPage(dictaatName: String, page: Page): Promise<Page> {
        let url: string = this.dictatenUrl + dictaatName + '/pages/' + page.name;
        return this.http.put(url, page)
            .toPromise()
            .then(response =>
                response.json() as Page
            ).catch(this.handleError);
    }

    public getPage(dictaatName: String, pageName: string): Promise<Page> {
        let url: string = this.dictatenUrl + dictaatName + '/pages/' + pageName;
        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Page
            ).catch(this.handleError);
    }


    public deletePage(dictaatName: String, pageName: String): Promise<Response>{
        let url: string = this.dictatenUrl + dictaatName + '/pages/' + pageName;
        return this.http.delete(url)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}