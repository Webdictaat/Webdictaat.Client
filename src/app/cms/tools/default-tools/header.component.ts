﻿import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: "wd-header",
    template: "<div  id='wd-header-tool' class='wd-component'>Header</div>"
})
export class HeaderComponent {

    public ngOnInit(): void {
        var component = this;

        $('#wd-header-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        })
    }

    //returns a promise with a boolean, to recompile or not
    public onDrop(ui): Promise<boolean> {
        return new Promise((resolve, reject) => {
            var newItem = "<div>Header</div>";
            ui.item.replaceWith(newItem);
            ui.item = newItem;
            resolve(false);
        });
    }    
}

