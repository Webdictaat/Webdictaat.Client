import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { Dictaat } from '../models/dictaat';
import { wdApi } from '../core/wdapi.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class DictaatService {

    constructor(private wdapi: wdApi) { }

    public getDictaat(dictaatName: String): Promise<Dictaat> {
        return this.wdapi.get("/dictaten/" + dictaatName)
            .toPromise()
            .then(response => response.json() as Dictaat);

    }
}