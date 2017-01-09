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
                ui.helper.data("component", component);
            }
        })
    }

    //returns a promise with a boolean, to recompile or not
    public onDrop(ui): Promise<boolean> {

        return new Promise((resolve, reject) => {
            var newItem = $("<div class='wd-component'><div class='wd-editable'>Change me!</div></div>");
            ui.item.replaceWith(newItem);
            newItem.focus();
            resolve(false);
        });

    }
}

