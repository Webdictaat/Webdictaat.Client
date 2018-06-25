import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { QuizService } from "core";
import { DictaatService } from "core";
import { ConfigService } from "core";
import { Quiz } from 'core';
import { Question } from 'core';


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
