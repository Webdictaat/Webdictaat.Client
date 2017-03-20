import { Component, OnInit } from '@angular/core';


var $ : any;

@Component({
    selector: "wd-column",
    template: `
        <div  id='wd-columnn2' class='wd-component'>
            <i class="fa fa-columns" aria-hidden="true"></i> 2
        </div> | 
        <div  id='wd-columnn3' class='wd-component'>
            <i class="fa fa-columns" aria-hidden="true"></i> 3
        </div>
    `
})
export class ColumnComponent {

    private content: string;
    public columnCount = 0;

    public ngOnInit(): void {
        var component = this;
        $('#wd-columnn2')
            .draggable({
                cursorAt: { left: 0, top: 0 },
                helper: "clone",
                connectToSortable: ".wd-container",
                start: function (e, ui) {
                    component.columnCount = 2;
                    ui.helper.data("component", component);
                }
            })

        $('#wd-columnn3')
            .draggable({
                cursorAt: { left: 0, top: 0 },
                helper: "clone",
                connectToSortable: ".wd-container",
                start: function (e, ui) {
                    component.columnCount = 3;
                    ui.helper.data("component", component);
                }
            })
    }

    //returns a promise with a boolean, to recompile or not
    public onDrop(ui): Promise<boolean> {
        return new Promise((resolve, reject) => {
            var newItem = $("");
            switch(this.columnCount){
                case 2: newItem = $("<div class='row wd-component'><div class='col-md-6 wd-container'></div><div class='col-md-6 wd-container'></div></div>"); break;
                case 3: newItem = $("<div class='row wd-component'><div class='col-md-4 wd-container'></div><div class='col-md-4 wd-container'></div><div class='col-md-4 wd-container'></div></div>"); break;
            }
           
            ui.item.replaceWith(newItem);
            newItem.focus();
            resolve(false);
        });
    }
}

