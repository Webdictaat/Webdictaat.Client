import { Component, OnInit } from '@angular/core';
import { ToolParams } from '../../models/tool-params';
import { QuestionsService } from '../../services/question.service';
import { Question } from '../../models/question';

declare var $: JQueryStatic;

@Component({
    selector: "wd-multiple-choice-tool",
    template: "<div id='wd-multiple-choice-tool' class='wd-component'>Multiple choice</div>",
})
export class MultipleChoiceToolComponent {

    private template: String = "<wd-multiple-choice>";

    constructor(private questionsService: QuestionsService) { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;
        $('#wd-multiple-choice-tool').draggable({
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
            this.questionsService.ShowModal()
                .then((question: Question) => {                  
                    ui.item.replaceWith("<wd-multiple-choice class='wd-game-component' [qid]='" + question.id + "' />");
                    resolve(true);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });
       
    }
}

