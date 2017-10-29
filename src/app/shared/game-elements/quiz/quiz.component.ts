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

    this.accountService.getUser()
      .subscribe(user => {
          this.isAuth = user != null
      });

    this.configService.DictaatName.subscribe((name) => {
          this.dictaatName = name;
          this.isLoading = true;

          this.quiz = new Quiz();
          this.quiz.title = 'Demo Quiz';
          this.quiz.description = 'Een quiz als demo!';
          
          //mc
          var mc = new Question();
          mc.type = 'mc';
          mc.text = "Welke letter komt het eerst?";
          mc.answers.push(new Answer({ id: 0, text: "A", isCorrect: true}));
          mc.answers.push(new Answer({ id: 1, text: "B"}));
          mc.answers.push(new Answer({ id: 2, text: "C"}));
          mc.explanation = 'Omat het alfabet zo werkt';
          this.quiz.questions.push(mc);

          //blanks
          var blanks = new Question();
          blanks.type = 'blanks';
          blanks.text = "de [[kat]] krabt de [[krullen]] van de [[trap]]";
          blanks.explanation = 'Het alfabet begint met ABCDEFG';
          blanks.answers.push(new Answer({ id: 1, text: "Hond"}));
          blanks.answers.push(new Answer({ id: 2, text: "Treden"}));
          this.quiz.questions.push(blanks);

          //group
          var group = new Question();
          group.type = 'group';
          group.text = "Selecteer alle levende dingen";
          group.explanation = 'Een virus leeft niet';
          group.answers.push(new Answer({ id: 1, text: "Hond", isCorrect: true}));
          group.answers.push(new Answer({ id: 2, text: "Kat", isCorrect: true}));
          group.answers.push(new Answer({ id: 2, text: "Steen"}));
          group.answers.push(new Answer({ id: 2, text: "Boom", isCorrect: true}));
          group.answers.push(new Answer({ id: 2, text: "Cel"}));
          group.answers.push(new Answer({ id: 2, text: "Virus"}));
          group.answers.push(new Answer({ id: 2, text: "AI", isCorrect: true}));
          this.quiz.questions.push(group);

          //group
          var sentence = new Question();
          sentence.type = 'sentence';
          sentence.text = "[[De kat]] [[krabt]] [[de krullen]] [[van]] [[de trap]]";
          sentence.explanation = 'Een virus leeft niet';
          this.quiz.questions.push(sentence);

          this.isLoading = false;
          //this.quiz.status = 'finished';

          this.quiz.start();

          // this.quizService.getQuiz(this.dictaatName, this.qid)
          // .then((q: Quiz) => { 
          //    this.quiz = q;
          //    this.isLoading = false;
          // })
          // .catch((error) => {
          //   this.isLoading = false;
          // });

    });
  }

  public CorrectAnswerCount(){
    var counter = 0;
    this.quiz.questions.forEach(q => q.isCorrect ? counter++ : '');
    return counter;
  }

  public start() {  
      this.quiz.start();
  }

  public continue(){
    this.quiz.nextQuestion();
    if(this.quiz.status == 'finished'){
      //this.submit();
    }
  }

  public submit(){
    this.isLoading = true;
    this.quizService.submitAnswers(this.dictaatName ,this.quiz.id, this.givenAnswers)
      .then((attempt) => {
          this.quiz.myAttempts.unshift(attempt);
          this.isLoading = false;
      }); 
  }


  public retakeQuiz(){
    this.start();
  }

  public login() {
      this.accountService.Login();
  }
}
