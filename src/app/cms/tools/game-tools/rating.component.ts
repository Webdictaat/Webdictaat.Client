import { Component, OnInit, Input } from '@angular/core';
import { RatingService } from '../../../shared/services/rating.service';

declare var $ : any;

@Component({
    selector: "wd-rating-tool",
    template: `<div id='wd-rating-tool' class='wd-component'>
        <i class="fa fa-smile-o" aria-hidden="true"></i> Rating
    </div>`
})
export class RatingToolComponent {

    @Input()
    public dictaatName: string;

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
            var params = [];
            params['dictaatName'] = this.dictaatName;
            this.ratingService.ShowModal(params)
                .then((rating) => {
                    var element = "<wd-rating class='wd-component wd-game-component' [rid]='" + rating.id + "' />";
                    ui.item.replaceWith(element);
                    resolve(true);

                })
                .catch(() => {
                    ui.item.remove();
                });
        });

    }
}

