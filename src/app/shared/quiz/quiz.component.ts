import { Component, OnInit, Input } from '@angular/core';
import { Quiz, Answer, Question } from "./quiz";
import { ActivatedRoute, Params } from "@angular/router";
import { AccountService } from "../services/account.service";
import { QuizService } from "../services/quiz.service";
import { Loader } from "../core/loading.base";


@Component({
  selector: 'wd-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent extends Loader implements OnInit {

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
  ) { 
    super(true);

  }

  ngOnInit() {

    this.accountService.getUser()
      .subscribe(user => {
          this.isAuth = user != null
      });

    //Krijg initiele waarde van observable niet :(
    this.accountService.update();

    this.route.params.forEach((params: Params) => {
        this.dictaatName = params['dictaatName'];
        this.load()
          .quizService.getQuiz(this.dictaatName, this.qid)
          .then((q: Quiz) => { 
             this.quiz = q;
             if(this.quiz.myAttempts){
                this.quiz.myAttempts.length == 0 ? this.quiz.status = "idle" : this.quiz.status = "finished";
             }           
             else{
               this.quiz.status = 'idle';
             }
             this.ready(); 
          })
          .catch((error) => {
            this.ready();;
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
