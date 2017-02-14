import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()

export class BaseModalService {

    public isModalVisible: boolean = false;
    private subject: Subject<boolean> = new Subject<boolean>();

    protected resolveComplete;
    protected resolveCancel;

    public getIsModalVisible(): Observable<boolean> {
        return this.subject.asObservable();
    }

    public ShowModal(): Promise<any> {
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise<any>((resolve, reject) => {
            this.resolveComplete = resolve;
            this.resolveCancel = reject;
        });
    }

    public CancelModal(): void {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    }

    public CompleteModal(objectToResolve: any) {
        this.resolveComplete(objectToResolve);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    }

}