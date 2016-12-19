import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

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
                ui.helper.data("callback", function (ui, done) {
                    component.onDrop(ui, done)
                });
            }
        })
    }

    public onDrop(ui: any, done: any): void {
        ui.item.replaceWith("<div class='wd-component'><h1>Header</h1></div>");
        done();
    }

}

