import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { BaseModalService } from '../core/basemodal.service';
import { wdApi } from '../core/wd.service';




@Injectable()
export class StylingService extends BaseModalService {

    constructor(private wdapi: wdApi) { 
        super();
    }

    public getStyle(dictaatName: String, styleName: string): Promise<string> {

        let url: string = "/dictaten/" + dictaatName + '/styling/' + styleName;

        return this.wdapi.get(url)
            .toPromise()
            .then(response => response.text());

    }

    public updateStyle(dictaatName: String, styleName: string, content: string): Promise<string> {

        let url: string = "/dictaten/" + dictaatName + '/styling/' + styleName;
        
        return this.wdapi.put(url, { content: content })
            .toPromise()
            .then(response => response.toString());
    }
}