import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'core';

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

    //private server = "http://localhost:65418/";
    private server = "http://webdictaat.aii.avans.nl/";

    constructor(private imageServie: ImageService) { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;

        $('#wd-img-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container, .wd-jumbotron",
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
            this.imageServie.ShowModal('add', params)
                .then((result) => {
                    var src = this.server + "dictaten//"+ result.dictaatName+"//images//" + result.imageLocation ;
                    var newItem = $("<div class='wd-component'><div class='wd-editable'><img src='" + src + "'/></div></div>");
                    ui.item.replaceWith(newItem);
                    ui.item = newItem;
                    ui.item.data('src', src);
                    resolve(false);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });

    }

}