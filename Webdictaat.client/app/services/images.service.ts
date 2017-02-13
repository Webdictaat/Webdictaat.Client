import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wdapi.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {

    constructor(private wdapi: wdApi) { }


    public isModalVisible: boolean = false;
    private subject: Subject<boolean> = new Subject<boolean>();

    private resolveAddImage;
    private resolveCancel;


    public getIsModalVisible(): Observable<boolean> {
        return this.subject.asObservable();
    }

    public ShowModal(): Promise<string[]> {
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise<string[]>((resolve, reject) => {
            this.resolveAddImage = resolve; 
            this.resolveCancel = reject;
        });
    }

    public CancelModal(): void {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    }

    public CompleteModal(imageLocation: string) {
        this.resolveAddImage(imageLocation);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
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