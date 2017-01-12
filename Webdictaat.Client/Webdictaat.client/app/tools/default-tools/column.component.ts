import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-column",
    template: `
        <div  id='wd-columnn' class='wd-component'>
            <div class='row'>
                <div class='col-md-6 wd-container'></div>
                <div class='col-md-6 wd-container'></div>
            </div>
        </div>
    `
})
export class ColumnComponent {

    private content: string;

    public ngOnInit(): void {
        var component = this;
        $('#wd-columnn')
            .draggable({
                cursorAt: { left: 0, top: 0 },
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
            resolve(false);
        });
    }
}

