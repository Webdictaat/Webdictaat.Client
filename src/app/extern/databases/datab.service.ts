import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { wdApi } from "../../shared/core/wd.service";
import { Assignment } from "../../shared/models/assignment";

export class DbAssignment extends Assignment {
    public external: DbSubmission;
}

export class DbSubmission{
    public userId: string;
    public query: string;
    public status : number;
    public assignmentToken: string;
}


@Injectable()
export class DatabService {

    //private root  = "http://webdictaat.aii.avans.nl/apis/databases";
    private root = "http://localhost:22608"

    constructor(private http: Http, private wdApi: wdApi) {
       
    }

    public getAssignment(assignmentId, userId) : Promise<DbAssignment>
    {
        return this.wdApi.get('/dictaten/test/assignment/' + assignmentId)
            .toPromise()
            .then((response) => {

                var assignment = response.json() as DbAssignment;

                return this.http.get(this.root + "/assignments/" + assignmentId + "/submissions/" + userId)
                    .toPromise()
                    .then((response) => { 

                        assignment.external = response.json() as DbSubmission;

                        if(assignment.external && assignment.external.assignmentToken && !assignment.mySubmission){
                            return this.completeAssignment(assignment);
                        }
                        else {
                            return assignment;
                        }
                       
                    });
            });
    }

    private completeAssignment(assignment: DbAssignment) : Promise<DbAssignment>{
        var external = assignment.external;
        return this.wdApi.post("/dictaten/test/assignment/" + assignment.id + "/submissions", { token: assignment.external.assignmentToken })
            .toPromise()
            .then((response) => {
                var assignment = response.json() as DbAssignment;
                assignment.external = external;
                return assignment;
            });
    }

    public sendSubmission(assignmentId, submission : DbSubmission ) : Promise<DbSubmission>
    {
        return this.http.post(this.root + "/assignments/" + assignmentId + "/submissions", submission)
            .toPromise()
            .then(response => response.json() as DbSubmission);
    }

}