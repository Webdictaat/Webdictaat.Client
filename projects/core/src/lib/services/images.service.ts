import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Subject, Observable } from 'rxjs';
import { wdApi } from '../core/wd.service';
import { BaseModalService } from '../core/basemodal.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService extends BaseModalService{

    constructor(private wdapi: wdApi) {
        super();
    }

    public addImages(dictaatName: string, image: File): Promise<any> {
        let url: string = "/dictaten/" + dictaatName + '/upload';
        return this.wdapi.postFile(url, image);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}