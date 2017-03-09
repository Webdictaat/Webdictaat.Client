import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { wdApi } from '../core/wdapi.service';
import { DictaatSummary } from '../models/dictaat-summary';

//Nodig om een object om te toveren in een promise.
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class DictatenService {

    constructor(private wdapi: wdApi) { }

    public addDictaat(dictaatName: string): Promise<DictaatSummary[]> {

        return this.wdapi.post('/dictaten', { name: dictaatName })
            .toPromise()
            .then(response =>
                response.json() as DictaatSummary[]
            );
    }

    public getDictaten(): Promise<DictaatSummary[]> {
        return this.wdapi.get('/dictaten')
            .toPromise()
            .then(response =>
                response.json() as DictaatSummary[]
            );
    }

}