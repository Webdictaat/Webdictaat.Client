import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { Dictaat } from '../models/dictaat';
import { wdApi } from '../core/wd.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { DictaatSummary } from "../models/dictaat-summary";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class DictaatService {


    private _currentDictaat: Dictaat;
    public CurrentDictaat = new BehaviorSubject<Dictaat>(null);

    constructor(
        private wdapi: wdApi, 
        private route: ActivatedRoute, 
        private router: Router) {}

    public getDictaat(dictaatName: String): Promise<Dictaat> {
        return this.wdapi.get("/dictaten/" + dictaatName)
            .map(response => new Dictaat(response.json()))
            .toPromise()
            .then(dictaat => {
                this.CurrentDictaat.next(dictaat);
                return dictaat;
            })
    }

    public removeDictaat(dictaatName: String): Promise<any> {
          return this.wdapi.delete("/dictaten/" + dictaatName)
            .toPromise()
            .then(response => response.json() as any);
    }

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