import { Component, OnInit, Input } from '@angular/core';
import { AssignmentService } from 'core';
import { Assignment } from 'core';

declare var $ : any;

@Component({
    selector: "wd-assignment-tool",
    template: `<div id='wd-assignment-tool' class='wd-component'>
      <i class="fa fa-flag" aria-hidden="true"></i> Assignment
    </div>`
})
export class AssignmentToolComponent {

    @Input()
    public dictaatName: string;

    private template: String = "<wd-quiz>";

    constructor(private assignmentService: AssignmentService) { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;
        $('#wd-assignment-tool').draggable({
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
            this.assignmentService.ShowModal('choose', params)
                .then((assignment: Assignment) => {                  
                    ui.item.replaceWith("<wd-assignment class='wd-component wd-game-component' [aid]='" + assignment.id + "' />");
                    resolve(true);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });
       
    }
}

