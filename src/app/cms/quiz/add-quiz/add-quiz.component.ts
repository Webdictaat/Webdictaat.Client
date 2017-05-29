import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Question, Quiz, Answer } from "../../../shared/quiz/quiz";
import { QuizService } from "../../../shared/services/quiz.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { BaseModalService, BaseModalComponent } from "../../../shared/core/basemodal.service";


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

    constructor(
        private quizService: QuizService,
        private  zone: NgZone
    ) {
        super();
    }

    //event
    public ngOnInit(): void {
        this.resetQuiz();
        this.wdOnInit(this.quizService, this.zone);
    }

    private resetQuiz(){
        this.quiz = new Quiz();  
        this.selectedIndex = 0;
        this.selectedQuestion = this.quiz.questions[0];
    }

    public Add(): void {
        this.quizService.addQuiz(this.params['dictaatName'], this.quiz)
            .then((quiz: Quiz) => {
                this.quizService.CompleteModal(quiz);
            });
    }

    DeleteQuestion(): void{
        var toDelete = this.quiz.questions[this.selectedIndex];
        this.quiz.questions.splice(this.selectedIndex, 1);
        this.selectedIndex--;
        if(this.selectedIndex > 0){
            this.selectedQuestion = this.quiz.questions[this.selectedIndex];
        }
        else{
            this.selectedQuestion = null;
        }
    }

    SelectQuestion(i): void{
        this.selectedIndex = i;
        this.selectedQuestion = this.quiz.questions[i];
    }

    AddQuestion(): void{
        this.quiz.questions.push(new Question());
        this.selectedIndex = this.quiz.questions.length - 1;
        this.selectedQuestion = this.quiz.questions[this.selectedIndex];
    }
    
    AddAnswer(): void {
        this.selectedQuestion.answers.push(new Answer({ text: this.newAnswerText}));
        this.newAnswerText = null;
    };

    public Cancel(): void {
        this.resetQuiz();
        this.quizService.CancelModal();
    }
}

