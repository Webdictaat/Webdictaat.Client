import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class wdApi {

    //fields
    
    private jwt : string;
    public urlPrefix = window["rootVar"] ? window["rootVar"] : 'http://localhost:65418/api';

    constructor(private http: Http) { 
        this.jwt = localStorage.getItem('jwt');
    } 

    
    //methods

    public setToken(token:string): void{
        localStorage.setItem('jwt', token);
        this.jwt = token;
    }

    public removeToken(): void{
        localStorage.removeItem('jwt');
        this.jwt = null;
    }

    public createAuthorizationHeader() {
        var headers = new Headers();
        if(this.jwt)
            headers.append('Authorization', 'Bearer ' + this.jwt);
        return headers;
      }

    public get(url) {
        return this.http.get(this.urlPrefix + url, { 
           headers: this.createAuthorizationHeader()  
        })
    }

    public post(url, data) {
        return this.http.post(this.urlPrefix + url, data, { 
            headers: this.createAuthorizationHeader()  
         })
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

            xhr.open('POST', this.urlPrefix + url, true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + this.jwt)
            xhr.send(formData);

        });

       
    }

    public put(url, data) {
        return this.http.put(this.urlPrefix + url, data, { 
            headers: this.createAuthorizationHeader()  
         });
    }

    public delete(url) {
        return this.http.delete(this.urlPrefix + url, { 
            headers: this.createAuthorizationHeader()  
         });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}