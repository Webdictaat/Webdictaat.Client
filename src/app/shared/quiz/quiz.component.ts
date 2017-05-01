import { Component, OnInit, Input } from '@angular/core';
import { Quiz, Answer } from "./quiz";
import { ActivatedRoute, Params } from "@angular/router";
import { Question } from "../models/question";
import { AccountService } from "../services/account.service";
import { QuizService } from "../services/quiz.service";

@Component({
  selector: 'wd-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input()
  public qid : number;
  public quiz : Quiz; 
  public dictaatName: string;
  public isAuth: boolean;
  public questionIndex : number;
  public correctAnswers: number;
  public givenAnswers : number[];

  constructor(
    private accountService: AccountService,
    private quizService: QuizService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.accountService.getUser()
      .subscribe(user => {
          this.isAuth = user != null
      });

    //Krijg initiele waarde van observable niet :(
    this.accountService.update();

    this.route.params.forEach((params: Params) => {
        this.dictaatName = params['dictaatName'];
        this.quizService.getQuiz(this.dictaatName, this.qid)
          .then((q: Quiz) => { 
             this.quiz = q;
             this.quiz.myAttempts.length == 0 ? this.quiz.status = "idle" : this.quiz.status = "finished";
          });

    });
  }

  public start() {
      this.questionIndex = 0;
      this.quiz.status = "started";
      this.correctAnswers = 0;
      this.givenAnswers = [];
      this.quiz.questions.forEach(q => q.selectedAnswer = null);
  }

  public next(answer: Answer){
    this.givenAnswers.push(answer.id);
    this.questionIndex++
  }

  public previous(){
    this.questionIndex--;
  }

  public selectQuestion(index){
    this.questionIndex = index;
  }

  public review(){
    this.questionIndex = 0;
  }

  public canSubmit(){
    var result = true;
    this.quiz.questions.forEach((q) => { if(!q.selectedAnswer) { result = false } });
    return result;
  }

  public submit(){
    this.quiz.status = 'pending';
    this.quizService.submitAnswers(this.dictaatName ,this.quiz.id, this.givenAnswers)
      .then((attempt) => {
          this.quiz.myAttempts.unshift(attempt);
          this.quiz.status = 'finished';
      });
  }


  public retakeQuiz(){
    this.start();
  }

  public login() {
      this.accountService.Login();
  }
}
