import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../../shared/models/poll';
import { PollService } from '../../../shared/services/poll.service';

declare var $: any;

@Component({
    selector: "wd-poll-tool",
    template: `<div id='wd-poll-tool' class='wd-component'>
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> Poll
    </div>`
})
export class PollToolComponent {

    @Input()
    public dictaatName: string;

    constructor(private pollService: PollService) { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;
        $('#wd-poll-tool').draggable({
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
            this.pollService.ShowModal('choose', params)
                .then((poll: Poll) => {                  
                    ui.item.replaceWith("<wd-poll class='wd-component wd-game-component' [pid]='" + poll.id + "' />");
                    resolve(true);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });
       
    }
}

