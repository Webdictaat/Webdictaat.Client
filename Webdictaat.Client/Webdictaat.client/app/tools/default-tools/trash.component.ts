import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

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
        //If ancestor is .tools, dont remove
        var parentsWithTools = $(ui.item).parents('.tools');
        if (!parentsWithTools.length)
            ui.item.remove();
    }

}

