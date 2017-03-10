import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export class DialogData {
    public Content: string;
    public Title: string;
}

@Injectable()
export class DialogService {

    private dialogData: DialogData;
    private subject: Subject<DialogData> = new Subject<DialogData>();

    constructor(private http: Http) {

    }

    public showDialog(title: string, content: string): void {
        this.dialogData = { Title: title, Content: content };
        this.subject.next(this.dialogData);
    }

    public getDialogData(): Observable<DialogData> {
        return this.subject.asObservable();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}