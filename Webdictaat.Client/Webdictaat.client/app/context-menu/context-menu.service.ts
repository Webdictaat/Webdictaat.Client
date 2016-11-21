import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';


@Injectable()
export class ContextMenuService {

    constructor() { }

    public showContextMenu(event) : void {
        console.log('showing context menu');
    }


}