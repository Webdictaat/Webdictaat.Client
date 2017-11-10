import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizService } from "../../../shared/services/quiz.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { BaseModalService, BaseModalComponent } from "../../../shared/core/basemodal.service";
import { ConfigService } from "../../../shared/services/config.service";
import { Quiz } from '../../../shared/models/quiz/quiz';
import { Question } from '../../../shared/models/quiz/question';
import { Answer } from '../../../shared/models/quiz/answer';


@Component({
    selector: "wd-add-quiz",
    styleUrls: ['./add-quiz.component.css'],
    templateUrl: "./add-quiz.component.html",
})
export class AddQuizComponent extends  BaseModalComponent implements OnInit {
   

    public quiz: Quiz;
    public selectedQuestion : Question;
    public selectedIndex: number;
    public newAnswerText: string; 
    private  dictaatName: string;

    constructor(
        private quizService: QuizService,
        private  zone: NgZone,
        private dictaatService: DictaatService,        
    ) {
        super();
    }

    //event
    public ngOnInit(): void {
        this.resetQuiz();
        this.wdOnInit(this.quizService, this.zone);
        this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { if(dictaat) { this.dictaatName = dictaat.name } });       
    }        

    private resetQuiz(){
        this.quiz = new Quiz();  
        this.quiz.questions.push(new Question());
    }

    public Add(): void {
        this.quiz.questions = [];
        this.quizService.addQuiz(this.dictaatName, this.quiz)
            .then((quiz: Quiz) => {
                this.quizService.CompleteModal(quiz);
            });
    }


    public Cancel(): void {
        this.resetQuiz();
        this.quizService.CancelModal();
    }
}

