import { Component, OnInit } from '@angular/core';
import { VideoService } from 'core';

declare var $: any;

@Component({
    selector: "wd-video-tool",
    template: `<div id='wd-video-tool' class='wd-component' >
        <i class="fa fa-youtube" aria-hidden="true"></i> Youtube
    </div>`
})
export class VideoComponent implements OnInit  {

    constructor(private videoService: VideoService) { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;

        $('#wd-video-tool').draggable({
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
            this.videoService.ShowModal('add', [])
                .then((videoTag) => {
                    var newItem = $("<div class='wd-component'>" + videoTag + "</div>");
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