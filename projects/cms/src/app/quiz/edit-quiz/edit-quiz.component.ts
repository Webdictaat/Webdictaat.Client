import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { QuizService } from "core/lib/services/quiz.service";
import { DictaatService } from "core/lib/services/dictaat.service";
import { ConfigService } from "core/lib/services/config.service";
import { Quiz } from 'core/lib/models/quiz/quiz';
import { Question } from 'core/lib/models/quiz/question';


@Component({
    selector: 'wd-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit, OnChanges {
   

    @Input()
    public qid: number;

    public quiz: Quiz;
    public selectedQuestion: Question;
    public selectedIndex: number;
    public dictaatName: string;

    @Output()
    public onFinished = new EventEmitter();


    constructor(
        private configService: ConfigService,
        private dictaatService: DictaatService,
        private quizService: QuizService) { }

    ngOnInit(): void {

    }    

    ngOnChanges(changes: SimpleChanges): void {
        this.dictaatService.CurrentDictaat.subscribe((dictaat) => {
            if (dictaat) {
                this.dictaatName = dictaat.name;
                this.quizService.getQuiz(dictaat.name, this.qid)
                .then(quiz => this.quiz = quiz);         
            }
        });
     
    }

    public Save(){
        this.quizService.update(this.dictaatName, this.quiz)
          .then((quiz) => this.onFinished.emit(quiz));
    }
  
    public Cancel(){
        this.onFinished.emit();
    }
  
}
