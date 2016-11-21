import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { DictaatSummary } from '../models/dictaat-summary';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class DictatenService {

    constructor(private http: Http) { }

    private dictatenUrl = 'http://localhost:65418/api/dictaten';

    public addDictaat(dictaatName: string): Promise<DictaatSummary[]> {

        return this.http.post(this.dictatenUrl, { name: dictaatName } )
            .toPromise()
            .then(response =>
                response.json() as DictaatSummary[]
            ).catch(this.handleError);
    }

    public getDictaten(): Promise<DictaatSummary[]> {
        return this.http.get(this.dictatenUrl)
            .toPromise()
            .then(response => 
                response.json() as DictaatSummary[]
            ).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}