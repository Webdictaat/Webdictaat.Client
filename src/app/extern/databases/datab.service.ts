import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export class Assignment{
    public description: string;
    public id: number;
}

export class Submission{
    public email: string;
    public query: string;
}


@Injectable()
export class DatabService {

    private root  = "http://webdictaat.aii.avans.nl/apis/databases/api";
   
    constructor(private http: Http) {
       
    }

    public getAssignment(assignmentId) : Promise<Assignment>
    {
        return this.http.get(this.root + "/assignments/" + assignmentId)
            .toPromise()
            .then(response => response.json() as Assignment);
    }

    public sendSubmission(assignmentId, submission : Submission ) : Promise<Submission>
    {
        return this.http.post(this.root + "/assignments/" + assignmentId + "/submissions", submission)
            .toPromise()
            .then(response => response.json() as Submission);
    }

}