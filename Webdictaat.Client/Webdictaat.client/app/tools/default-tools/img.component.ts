import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/images.service';
declare var $: JQueryStatic;

@Component({
    selector: "wd-img-tool",
    template: "<div id='wd-img-tool' class='wd-component' >Img</div>",
})
export class ImgComponent implements OnInit  {

    private ui: any;
    private done: any; 



    constructor(private imageServie: ImageService) { }

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

    public onDrop(ui: any, done: any): void {
        this.ui = ui;
        this.done = done;
        this.imageServie.ShowModal().then((imgName) => {

            ui.item.replaceWith("<div class='wd-component'><img src='http://localhost:65418//images//" + imgName +"'/></div>");
            done();

        });

    }

}