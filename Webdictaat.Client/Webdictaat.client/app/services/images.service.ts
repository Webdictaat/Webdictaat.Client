﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {

    constructor(private http: Http) { }

    private dictatenUrl = 'http://webdictaat.azurewebsites.net/api/dictaten/';

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
        return new Promise((resolve, reject) => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            formData.append("file", image, image.name);
            
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            let url: string = this.dictatenUrl + dictaatName + '/upload';

            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.send(formData);
        });
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}