import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { BaseModalService } from "../../shared/core/basemodal.service";
import { wdApi } from "../../shared/core/wd.service";
import { PageSummary } from "../../shared/models/page-summary";
import { NavMenuItem } from "../../shared/models/nav-menu";
import { Page } from "../../shared/models/page";



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
            .then(response => response._body);
    }
}