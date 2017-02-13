﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class wdApi {

    constructor(private http: Http) { }

    //private urlPrefix = 'http://webdictaat.azurewebsites.net/api';
    public urlPrefix = 'http://localhost:65418/api';

    public get(url) {
        return this.http.get(this.urlPrefix + url, { withCredentials: true }).catch(this.handleError);
    }

    public post(url, data) {
        return this.http.post(this.urlPrefix + url, data, { withCredentials: true }).catch(this.handleError);
    }

    public postFile(url: string, file: File) {

        return new Promise((resolve, reject) => {

            let formData: FormData = new FormData();
            let xhr: XMLHttpRequest = new XMLHttpRequest();

            formData.append("file", file, file.name);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.send(formData);

        });

       
    }

    public put(url, data) {
        return this.http.put(this.urlPrefix + url, data, { withCredentials: true }).catch(this.handleError);
    }

    delete(url) {
        return this.http.delete(this.urlPrefix + url, { withCredentials: true }).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}