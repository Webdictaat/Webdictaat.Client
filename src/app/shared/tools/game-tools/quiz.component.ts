import { Component, OnInit } from '@angular/core';
import { ToolParams } from '../../models/tool-params';
import { Quiz, Question } from "../../quiz/quiz";
import { QuizService } from "../../services/quiz.service";



@Component({
    selector: "wd-quiz-tool",
    template: `<div id='wd-quiz-tool' class='wd-component'>
        <i class="fa fa-question-circle-o" aria-hidden="true"></i> Quiz
    </div>`
})
export class QuizToolComponent {

    private template: String = "<wd-quiz>";

    constructor(private quizService: QuizService) { }

    /**
     * Omslachtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;
        $('#wd-quiz-tool').draggable({
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
            this.quizService.ShowModal()
                .then((quiz: Quiz) => {                  
                    ui.item.replaceWith("<wd-quiz class='wd-component wd-game-component' [qid]='" + quiz.id + "' />");
                    resolve(true);
                })
                .catch(() => {
                    ui.item.remove();
                });
        });
       
    }
}

