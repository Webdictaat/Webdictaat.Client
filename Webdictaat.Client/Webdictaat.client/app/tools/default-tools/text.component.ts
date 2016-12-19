import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-text",
    template: "<div id='wd-text-tool' class='wd-component'>Tekst</div>"
})
export class TextComponent {

    public ngOnInit(): void {
        var component = this;

        $('#wd-text-tool').draggable({
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
        ui.item.replaceWith("<div class='wd-component'><p>Tekst</p></div>");
        done();
    }


}

