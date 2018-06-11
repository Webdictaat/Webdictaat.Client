import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Assignment } from '../../models/assignment';
import { wdApi } from '../../core/wd.service';

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
    public timestamp: any;

    public hide: boolean;
}   


@Injectable()
export class DatabService {

    private root  = "http://webdictaat.aii.avans.nl/apis/databases";
    //private root = "http://localhost:22608"

    constructor(private http: Http, private wdApi: wdApi) {
       
    }

    public getAssignment(daid): Promise<any>{
        return this.http.get(this.root + "/assignments/" + daid)
            .map((response) => response.json())
            .toPromise();
    }

    public getSubmissions(daid, userId) : Promise<DbSubmission>
    {
        return this.http.get(this.root + "/assignments/" + daid + "/submissions/" + userId)
            .map((response) => response.json() as DbSubmission )
            .toPromise();
    }

    public sendSubmission(waid, daid, submission : DbSubmission ) : Promise<DbSubmission>
    {
        submission.originalAssignmentId = waid;
        return this.http.post(this.root + "/assignments/" + daid + "/submissions", submission)
            .toPromise()
            .then(response => response.json() as DbSubmission);
    }

}