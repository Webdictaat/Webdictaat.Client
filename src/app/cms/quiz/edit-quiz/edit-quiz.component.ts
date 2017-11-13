import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { QuizService } from "../../../shared/services/quiz.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { ConfigService } from "../../../shared/services/config.service";
import { Quiz } from '../../../shared/models/quiz/quiz';
import { Question } from '../../../shared/models/quiz/question';


@Component({
    selector: 'wd-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnChanges {
    
    @Input()
    public quiz: Quiz;

    @Output()
    public onCancel = new EventEmitter();

    public selectedQuestion: Question;
    public selectedIndex: number;
    public dictaatName: string;


    constructor(
        private configService: ConfigService,
        private dictaatService: DictaatService,
        private quizService: QuizService) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.dictaatService.CurrentDictaat.subscribe((dictaat) => {
            if (dictaat) {
                this.dictaatName = dictaat.name;
            }
        });
    }
}
