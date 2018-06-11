import { Injectable, NgZone } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


export class ModalEvent{
    modalType: string;
    params: any;
    isVisible: boolean;
}

export class ShowModalEvent extends ModalEvent{
    constructor(modalType, params){
        super();
        this.modalType = modalType;
        this.params = params;
        this.isVisible = true;
       
    }
}

export class CancelModalEvent extends ModalEvent{
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


    public ShowModal(modal: string, params: any[]): Promise<any> {
        this.modalEvent.next(new ShowModalEvent(modal, params));
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
    public modalType: string;
    public params: any[];
    private baseService: BaseModalService;

    ///call this method to initialize base component
    protected wdOnInit(service: BaseModalService, zone: NgZone): void {
        this.baseService = service;
        service.modalEvent.subscribe((modalEvent: ModalEvent) => { 
            this.isModalVisible = modalEvent.isVisible;
            this.modalType = modalEvent.modalType;
            this.params = modalEvent.params;
            zone.run(() => {});
        });
    }

    public cancel(){
        this.baseService.CancelModal();
    }

}