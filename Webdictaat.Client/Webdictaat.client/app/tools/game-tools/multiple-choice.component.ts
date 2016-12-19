import { Component, OnInit } from '@angular/core';
import { ToolParams } from '../../models/tool-params';
import { QuestionsService } from '../../services/question.service';


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
                ui.helper.data("callback", function(ui, done){
                    component.onDrop(ui, done)
                });
            }
        })
    }

    private onDrop(ui, done): void {

        this.questionsService.ShowModal()
            .then((question) => {
                ui.item.replaceWith("<wd-multiple-choice class='wd-game-component' [qid]='" + question.id + "' />");
                done();
            })
            .catch(() => {
                ui.item.remove();
                done();
            });
    }
}

