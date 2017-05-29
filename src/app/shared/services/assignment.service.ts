import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wd.service';
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

    public getAssignmentDetails(dictaatName: String, assignmentId: number): Promise<Assignment> {
       
        let url: string = "/dictaten/" + dictaatName + '/assignment/' + assignmentId;

        return this.wdapi.get(url)
            .toPromise()
            .then(response => {
                return response.json() as Assignment
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

    public update(dictaatName: string, assignment: Assignment):  Promise<Assignment>{
        let url: string = "/dictaten/" + dictaatName + '/assignment/' + assignment.id;
        return this.wdapi.put(url, assignment)
            .toPromise()
            .then(response => {
                return response.json() as Assignment
            })
    }

    public delete(dictaatName: string, assignment: Assignment):  Promise<Assignment>{
        let url: string = "/dictaten/" + dictaatName + '/assignment/' + assignment.id;
        return this.wdapi.delete(url)
            .toPromise()
            .then(response => {
                return response.json() as Assignment
            })
    }
}