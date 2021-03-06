﻿import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: "wd-card",
    template: `<div id='wd-card-tool' class='wd-component'>
    <i class="fa fa-square-o" aria-hidden="true"></i> Card
    </div>`
})
export class CardComponent {

    public ngOnInit(): void {
        var component = this;
        $('#wd-card-tool').draggable({
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
            var newItem = $("<div class='wd-component'><div class='panel wd-container'></div></div>");
            ui.item.replaceWith(newItem);
            ui.item = newItem;
            resolve(false);
        });

    }
}

