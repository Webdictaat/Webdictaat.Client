import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-text",
    template: "<div id='wd-text' class='wd-component'><p>Tekst</p></div>"
})
export class TextComponent {

    private content: string;

    public ngOnInit(): void {
        $('#wd-text').draggable({
            helper: "clone",
            connectToSortable: ".wd-container"
        });
    }

}

