import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { wdApi } from "../core/wd.service";

@Injectable()
export class ParticipantService{

    constructor(private wdapi: wdApi)
    {

    }

    public getParticipant(dictaatName: string, email: string){
         return this.wdapi.get('/dictaten/' + dictaatName + '/participants/' + email)
            .toPromise()
            .then(response => response.json() );
    }

}