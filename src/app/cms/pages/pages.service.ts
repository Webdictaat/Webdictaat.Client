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
export class PagesService extends BaseModalService {

    constructor(private wdapi: wdApi) { 
        super();
    }

    public getPages(dictaatName: String): Promise<PageSummary[]> {

        return this.wdapi.get("/dictaten/" + dictaatName + "/pages")
            .toPromise()
            .then(response => response.json() as PageSummary[]);
    }

    public addPage(dictaatName: String, page: any, menuName: string, templateName: string): Promise<NavMenuItem[]> {

        var data = {
            page: page,
            subMenu: menuName,
            templateName: templateName
        };

        let url: string = "/dictaten/" + dictaatName + '/pages';

        return this.wdapi.post(url, data)
            .toPromise()
            .then(response => response.json() as NavMenuItem[] )
    }

    public editPage(dictaatName: String, page: Page): Promise<Page> {
        let url: string = "/dictaten/" + dictaatName + '/pages/' + page.name;
        return this.wdapi.put(url, page)
            .toPromise()
            .then(response => response.json() as Page);

    }

    public getPage(dictaatName: String, pageName: string): Promise<Page> {

        let url: string = "/dictaten/" + dictaatName + '/pages/' + pageName;

        return this.wdapi.get(url)
            .toPromise()
            .then(response => response.json() as Page);

    }


    public deletePage(dictaatName: String, pageName: String): Promise<NavMenuItem[]>{

        let url: string = "/dictaten/" + dictaatName + '/pages/' + pageName;

        return this.wdapi.delete(url)
            .toPromise()
            .then(response => response.json() as NavMenuItem[]);
    }
}