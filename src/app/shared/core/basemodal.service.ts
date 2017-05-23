import { Injectable, NgZone } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

class ModalEvent{
    params: any;
    isVisible: boolean;
}

class ShowModalEvent extends ModalEvent{
    constructor(params){
        super();
        this.params = params;
        this.isVisible = true;
       
    }
}

class CancelModalEvent extends ModalEvent{
    constructor(){
        super();
        this.params = null;
        this.isVisible = false;
    }
}


@Injectable()
export class BaseModalService {

    public modalEvent: Subject<ModalEvent> = new Subject<ModalEvent>();
 
    protected resolveComplete;
    protected resolveCancel;

    public constructor(){}


    public ShowModal(params: any[]): Promise<any> {
        this.modalEvent.next(new ShowModalEvent(params));
        return new Promise<any>((resolve, reject) => {
            this.resolveComplete = resolve;
            this.resolveCancel = reject;
        });
    }

    public CancelModal(): void {
        this.resolveCancel();
        this.modalEvent.next(new CancelModalEvent());
    }

    public CompleteModal(objectToResolve: any) {
        this.resolveComplete(objectToResolve);
        this.modalEvent.next(new CancelModalEvent())
    }

}

export class BaseModalComponent {

    public isModalVisible;
    public params: string[];
    private baseService: BaseModalService;

    ///call this method to initialize base component
    protected wdOnInit(service: BaseModalService, zone: NgZone): void {
        this.baseService = service;
        service.modalEvent.subscribe((modalEvent: ModalEvent) => { 
            this.isModalVisible = modalEvent.isVisible;
            this.params = modalEvent.params;
            zone.run(() => {});
        });
    }

    public cancel(){
        this.baseService.CancelModal();
    }

}