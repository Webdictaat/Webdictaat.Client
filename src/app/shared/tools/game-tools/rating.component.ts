import { Component, OnInit } from '@angular/core';
import { ToolParams } from '../../models/tool-params';
import { RatingService } from '../../services/rating.service';

var $ : any;

@Component({
    selector: "wd-rating-tool",
    template: "<div id='wd-rating-tool' class='wd-component'>Rating</div>",
})
export class RatingToolComponent {

    private template: String = "<wd-rating>";

    constructor(private ratingService: RatingService) { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;
        $('#wd-rating-tool').draggable({
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
            this.ratingService.ShowModal()
                .then((rating) => {
                    var element = "<wd-rating class='wd-game-component' [rid]='" + rating.id + "' />";
                    ui.item.replaceWith(element);
                    resolve(true);

                })
                .catch(() => {
                    ui.item.remove();
                });
        });

    }
}

