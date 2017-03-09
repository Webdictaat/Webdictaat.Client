import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../services/question.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Question, QuestionAnswer } from '../models/question';
import { AccountService } from '../services/account.service';


@Component({
    selector: "wd-multiple-choice",
    styles: [`

.answer {
   max-width:100%;
   white-space:normal;
}    


    `],
    template: `
        <div class='wd-component'>

            <div *ngIf="error" class="alert alert-danger">
                <p>{{error}}</p>
            </div>

            <p *ngIf="!error && isAuth && !question" class='default'>Loading...</p>
      
            <div class="bs-callout bs-callout-primary" *ngIf="question" >
  
                <h4>{{question.text}}</h4>

                <div *ngIf="!isAuth">
                    <button class='btn btn-info btn-raised' (click)="login()">Login to submit answers</button>
                </div>

                <div *ngIf="isAuth">
                    <div *ngFor='let answer of question.answers'>
                        <button class="btn btn-raised btn-default answer" (click)="giveAnswer(answer)"
                                [ngClass]="{ 
                                    'btn-success' :  selectedAnswer == answer  && selectedAnswer.isCorrect,
                                    'btn-danger' : selectedAnswer == answer  && !selectedAnswer.isCorrect
                                }">
                            {{answer.text}}
                        </button>
                    </div>

                     <div *ngIf="selectedAnswer && selectedAnswer.isCorrect">
                        {{selectedAnswer.text}} is correct!
                    </div>

                    <div *ngIf="selectedAnswer && !selectedAnswer.isCorrect">
                        {{selectedAnswer.text}} is not correct.
                        Feel free to try again!
                    </div>
                    
                </div>
            </div>

        </div>
    `
})
export class MultipleChoiceComponent implements OnInit {

    //question id
    @Input()
    public qid: number; 
    public question: Question;
    public selectedAnswer: QuestionAnswer;
    public error: string;

    public isAuth: boolean;

    private dictaatName: string;

    

    constructor(
        private questionsService: QuestionsService,
        private route: ActivatedRoute,
        private accountService: AccountService
    ) { }

    public ngOnInit() {

        this.accountService.getUser()
            .subscribe(user => {
                this.isAuth = user != null
            });

        //Krijg initiele waarde van observable niet :(
        this.accountService.update();

        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
            this.questionsService.getQuestion(this.dictaatName, this.qid)
                .then(question => this.question = question)
                .catch( reason => this.error = reason);
        });

        this.questionsService.getQuestion;
    }


    public giveAnswer(answer): void {
        this.selectedAnswer = answer;
    }

    public login() {
        this.accountService.Login();
    }


}

