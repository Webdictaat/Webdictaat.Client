import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { Dictaat, DictaatSession, DictaatMarkings } from '../models/dictaat';
import { wdApi } from '../core/wd.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import {  } from "rxjs/BehaviorSubject";
import { User, Group } from "../models/user";
import { ConfigService } from "./config.service";
import {  } from "rxjs/rx";
import { DictaatSummary } from "../models/dictaat-summary";
import { map } from 'rxjs/operators';



@Injectable()
export class DictaatService {

    public CurrentDictaat = new BehaviorSubject<Dictaat>(null);

    constructor(
        private wdapi: wdApi, 
        private route: ActivatedRoute, 
        private router: Router,
        private config: ConfigService) {}

      public getDictaat(dictaatName: String): Promise<Dictaat> {
        return this.wdapi.get("/dictaten/" + dictaatName)
            .pipe(map(response => new Dictaat(response.json())))
            .toPromise()
            .then(dictaat => {
                if(dictaat){
                    this.CurrentDictaat.next(dictaat);  
                    return dictaat;
                }               
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

    public copyDictaat(dictaatName: string, newDictaatName) : Promise<DictaatSummary[]> {

        return this.wdapi.post('/dictaten/' + dictaatName + '/copies', { name: newDictaatName })
            .pipe(map(response => response.json() as DictaatSummary[] ))
            .toPromise()
    }

    public getDictaatSession(dictaatName: String): Observable<DictaatSession> {
        return this.wdapi.get("/dictaten/" + dictaatName + '/sessions/current')
            .pipe(map(response => response.json()));
    }

    public getDictaatContributers(dictaatName: String): Promise<User[]> {
        return this.wdapi.get("/dictaten/" + dictaatName + '/contributers')
            .pipe(map(response => response.json()))
            .toPromise();
    }

    public join(dictaatName: string, group: string){
        return this.wdapi.post('/dictaten/' + dictaatName + '/groups/' + group, {})
            .toPromise()
            .then(response =>
                response.json() as boolean
            );
    }

    public switchGroup(dictaatName: string, group: string){
        return this.wdapi.put('/dictaten/' + dictaatName + '/groups/' + group, {})
            .pipe(map(response => response.json() as boolean));
    }

    public addContributer(dictaatName: string, email: string) : Promise<User[]> {
        return this.wdapi.post('/dictaten/' + dictaatName + '/contributers/', {'email': email})
            .pipe(map(response => response.json() as User[]))
            .toPromise();
    }

    public getDictaten(): Promise<DictaatSummary[]> {
        return this.wdapi.get('/dictaten')
            .toPromise()
            .then(response =>
                response.json() as DictaatSummary[]
            );
    }

    public getMarkings(name: string): Promise<DictaatMarkings>{
        return this.wdapi.get('/dictaten/' + name +  '/markings')
            .toPromise()
            .then(response => {
                return new DictaatMarkings(response.json());
            });
    }

  
    public getParticipants(dictaatName: string){
        return this.wdapi.get('/dictaten/' + dictaatName + '/participants')
           .toPromise()
           .then(response => response.json() );
    }

    public getGroups(dictaatName: string){
        return this.wdapi.get('/dictaten/' + dictaatName + '/groups')
            .toPromise()
            .then(response => response.json() );
    }

    public addGroups(dictaatName: string, groups: Group[]): Observable<Group[]> {
        return this.wdapi.post('/dictaten/' + dictaatName + '/groups', groups)
        .pipe(map(response => response.json()));
    }

    public removeGroup(dictaatName: string, groupName: string): Observable<Group[]> {
        return this.wdapi.delete('/dictaten/' + dictaatName + '/groups/' + groupName)
        .pipe(map(response => response.json()));
    }
}