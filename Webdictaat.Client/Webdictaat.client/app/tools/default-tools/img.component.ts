import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-img-tool",
    template: "<div id='wd-img-tool' class='wd-component' >Img</div>",
})
export class ImgComponent implements OnInit  {

    constructor() { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;

        $('#wd-img-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("callback", function (ui, done) {
                    component.onDrop(ui, done)
                });
            }
        })
    }

    public onDrop(ui : any, done: any): void {
        ui.item.replaceWith("<div class='wd-component'><img src='https://abitor2.files.wordpress.com/2013/07/monkey-smile.jpg' /></div>");
        done();
    }

}