import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { wdApi } from "../../shared/core/wd.service";
import { Assignment } from "../../shared/models/assignment";
import { Observable } from 'rxjs';

export class DbAssignment extends Assignment {
    public external: DbSubmission;
}

export class DbSubmission{
    public email: string;
    public query: string;
    public statusId : number;
    public originalAssignmentId: number;
    public assignmentToken: string;
    public message: string;
}   


@Injectable()
export class DatabService {

    private root  = "http://webdictaat.aii.avans.nl/apis/databases";
    //private root = "http://localhost:22608"

    constructor(private http: Http, private wdApi: wdApi) {
       
    }

    public getAssignment(daid): Observable<any>{
        return new Observable(o => {
        //return data from local
        var cache = this.getFromLocal('a', daid);
        if(cache)
            return o.next(cache);

        //if no cache then retreive from online
        this.http.get(this.root + "/assignments/" + daid)
            .map((response) => response.json())
            .do((a) => this.saveAssignmentInLocal(a))
            .subscribe(a => o.next(a))
        });
    }

    public getSubmissions(daid, userId) : Observable<DbSubmission>
    {
        return new Observable(o => {

            //return data from local
            var cache = this.getFromLocal('s', daid);
            if(cache)
                return o.next(cache);

            //if no cache then retreive from online
            this.http.get(this.root + "/assignments/" + daid + "/submissions/" + userId)
                .map((response) => response.json())
                .do((s) => this.saveSubmissionInLocal(s))
                .subscribe(s => o.next(s))
            });
    
    }

    public sendSubmission(waid, daid, submission : DbSubmission ) : Observable<DbSubmission>
    {
        submission.originalAssignmentId = waid;
        return this.http.post(this.root + "/assignments/" + daid + "/submissions", submission)
            .map((response) => response.json())
            .do((s) => this.saveSubmissionInLocal(s))
    }

    public getFromLocal(type, id) : any
    {
        return JSON.parse(localStorage.getItem('databaas:' +  + type + ':' + id));
    }

    private saveAssignmentInLocal(assignment)
    {
        localStorage.setItem('databaas:a:' + assignment.assignmentId, JSON.stringify(assignment));
    }

    private saveSubmissionInLocal(submission)
    {
        if(!submission) return; 
        localStorage.setItem('databaas:s:' + submission.assignmentId, JSON.stringify(submission));
    }
}