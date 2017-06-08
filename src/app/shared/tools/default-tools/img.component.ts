﻿import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../services/images.service';

declare var $: any;

@Component({
    selector: "wd-img-tool",
    template: `<div id='wd-img-tool' class='wd-component' >
        <i class="fa fa-picture-o" aria-hidden="true"></i> Image
    </div>`
})
export class ImgComponent implements OnInit  {

    @Input()
    public dictaatName: string;

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
            var params = [];
            params['dictaatName'] = this.dictaatName;
            this.imageServie.ShowModal(params)
                .then((result) => {
                    var newItem = $("<div class='wd-component image-local'><img src='http://webdictaat.aii.avans.nl//dictaten//"+ result.dictaatName+"//images//" + result.imageLocation + "'/></div>");
                    ui.item.replaceWith(newItem);
                    ui.item = newItem;
                    resolve(false);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });

    }

}