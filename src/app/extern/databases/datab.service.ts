import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export class Assignment{
    public description: string;
    public id: number;
}

@Injectable()
export class DatabService {

    private root  = "http://webdictaat.aii.avans.nl/apis/databases/api";
   
    constructor(private http: Http) {
       
    }

    public getAssignment(assignmenttId) : Promise<Assignment>
    {
        return this.http.get(this.root + "/assignments/" + assignmenttId)
            .toPromise()
            .then(response => response.json() as Assignment);
    }

}