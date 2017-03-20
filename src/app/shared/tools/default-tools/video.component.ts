import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/images.service';
import { VideoService } from "../../services/video.service";
var $ : any;

@Component({
    selector: "wd-video-tool",
    template: `<div id='wd-img-tool' class='wd-component' >
        <i class="fa fa-video" aria-hidden="true"></i> Video
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
            this.videoService.ShowModal()
                .then((videoTag) => {
                    ui.item.replaceWith("<div class='wd-component'>" + videoTag + "</div>");
                    resolve(false);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });

    }

}