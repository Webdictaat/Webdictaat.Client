﻿import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: "wd-trash",
    template: `
        <div id="wd-trash" class='trashcan'>
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </div>`,
})
export class TrashComponent {

    private content: string;

    public ngOnInit(): void {
        $('#wd-trash').sortable({
            receive: this.removeElement
        });
    }

    public removeElement(event, ui): void {
        ui.item.remove();
    }

}

