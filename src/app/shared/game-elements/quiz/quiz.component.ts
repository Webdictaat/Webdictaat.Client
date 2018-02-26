import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { AccountService } from "../../services/account.service";
import { QuizService } from "../../services/quiz.service";
import { ConfigService } from '../../services/config.service';
import { Quiz } from '../../models/quiz/quiz';
import { Question } from '../../models/quiz/question';
import { Answer } from '../../models/quiz/answer';



@Component({
  selector: 'wd-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input()
  public qid : number;

  public isLoading: boolean; 
  public isSubmitting: boolean;
  public quiz : Quiz; 
  public dictaatName: string;
  public isAuth: boolean;
  public correctAnswers: number;
  public givenAnswers : number[];

  constructor(
    private configService: ConfigService,
    private accountService: AccountService,
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.quiz = this.quizService.getTemporary(this.qid);

    this.accountService.User.subscribe(user => { this.isAuth = user != null; });
    
    this.configService.DictaatName.subscribe((name) => {
          this.dictaatName = name;
          if(!this.quiz)
          {
              this.isLoading = true;
              this.refreshQuiz();
          }              
    });
  }

  public refreshQuiz(){
    this.quizService.getQuiz(this.dictaatName, this.qid)
      .then((q: Quiz) => { 
        this.quiz = q;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
      });
  }

  public edit(){
    var original = Object.assign({}, this.quiz); 
    this.quizService.ShowModal('edit', [this.quiz])
      .then((quiz) => this.refreshQuiz())
      .catch(() => {
        this.quiz = new Quiz(original);
      });
  }

  public start() {  
      this.quiz.start();
  }


  public continue(){
    this.quiz.nextQuestion();
    this.quizService.saveTemporary(this.quiz);
    if(this.quiz.status == 'finished'){
      this.submit();
    }
  }

  public submit(){
    this.isSubmitting = true;

    var attempt = [];
    this.quiz.questions.forEach(q =>{
      attempt.push({
        questionId: q.id,
        isCorrect: q.isCorrect
      });
    })

    this.quizService.submitAnswers(this.dictaatName ,this.quiz.id, attempt)
      .then((quiz) => {
          this.quiz = quiz;
          this.isSubmitting = false;
          this.quizService.deleteTemporary(this.quiz.id);
      }); 
  }

  public retakeQuiz(){
    this.start();
  }

  public login() {
      this.accountService.Login();
  }
}
