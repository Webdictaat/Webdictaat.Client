import { Component, OnInit, Input } from '@angular/core';
import { ToolParams } from '../../models/tool-params';
import { AssignmentService } from "../../services/assignment.service";
import { Assignment } from "../../models/assignment";



@Component({
    selector: "wd-leaderboard-tool",
    template: `<div id='wd-leaderboard-tool' class='wd-component'>
      <i class="fa fa-trophy" aria-hidden="true"></i> Leaderboard
    </div>`
})
export class LeaderboardToolComponent {

    @Input()
    public dictaatName: string;

    private template: String = "<wd-leaderboard class='wd-component wd-game-component'>";

    constructor() { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;
        $('#wd-leaderboard-tool').draggable({
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
            ui.item.replaceWith(this.template);
            resolve(true);
        });
       
    }
}

