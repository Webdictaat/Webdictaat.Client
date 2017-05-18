import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wdapi.service';
import { BaseModalService } from '../core/basemodal.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Assignment } from "../models/assignment";

@Injectable()
export class AssignmentService extends BaseModalService{

    constructor(private wdapi: wdApi)
    {
        super();
    }

     public getAssignments(dictaatName: String): Promise<Assignment[]> {
       
        let url: string = "/dictaten/" + dictaatName + '/assignment';

        return this.wdapi.get(url)
            .toPromise()
            .then(response => {
                return response.json() as Assignment[]
            })
            
    }

    public addAssignment(dictaatName, assignment: Assignment): Promise<Assignment> {
        let url: string = "/dictaten/" + dictaatName + '/assignment';
        return this.wdapi.post(url, assignment)
            .toPromise()
            .then(response => {
                return response.json() as Assignment
            })
    }
}