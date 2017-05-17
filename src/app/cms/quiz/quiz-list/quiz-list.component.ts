import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../../shared/services/quiz.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { QuizSummary, Quiz } from "../../../shared/quiz/quiz";

@Component({
  selector: 'wd-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public selectedQuiz: Quiz;
  public quizes: QuizSummary[];

  constructor(
    private quizService: QuizService, 
    private dictaatService: DictaatService) { }

  private dictaatName: string;


  ngOnInit() {
      this.dictaatService.CurrentDictaat
      .subscribe((dictaat) => {
          if(dictaat){
              this.dictaatName = dictaat.name;
              this.quizService.getQuizes(this.dictaatName)
              .then((quizes) => {
                  this.quizes = quizes;
              })
          }
         
      });
  }

  public Update(quiz: Quiz): void{
      this.quizService.update(quiz.dictaat, quiz)
      .then((quiz) => {
        this.selectedQuiz = null;
      })
  }

  
  public enableEdit(quiz: Quiz): void{
    this.quizService.getQuiz(quiz.dictaat, quiz.id)
      .then((quiz) => {
        this.selectedQuiz = quiz;
      })
  }

  public cancelEdit(): void{
    this.selectedQuiz = null;
  }

}