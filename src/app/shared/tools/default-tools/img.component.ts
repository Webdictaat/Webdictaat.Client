import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/images.service';
var $ : any;

@Component({
    selector: "wd-img-tool",
    template: "<div id='wd-img-tool' class='wd-component' >Img</div>",
})
export class ImgComponent implements OnInit  {

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
                ui.helper.data("component", component);
            }
        })
    }

    //returns a promise with a boolean, to recompile or not
    public onDrop(ui): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.imageServie.ShowModal()
                .then((imgName) => {
                    ui.item.replaceWith("<div class='wd-component'><img src='http://webdictaat.aii.avans.nl//images//" + imgName + "'/></div>");
                    resolve(false);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });

    }

}