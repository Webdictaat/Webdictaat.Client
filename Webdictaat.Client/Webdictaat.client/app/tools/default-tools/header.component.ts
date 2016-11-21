import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-header",
    template: "<div  id='wd-header' class='wd-component'><h1>Header</h1></div>"
})
export class HeaderComponent {

    private content: string;

    public ngOnInit(): void {
        $('#wd-header').draggable({
            helper: "clone",
            connectToSortable: ".wd-container"
        });
    }

}

