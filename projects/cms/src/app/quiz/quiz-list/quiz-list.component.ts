import { Component, OnInit } from '@angular/core';
import { QuizService } from "core";
import { DictaatService } from "core";
import { QuizSummary, Quiz } from 'core';

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
              this.refresh();
          }
         
      });
  }

  private refresh(){
    this.quizService.getQuizes(this.dictaatName)
      .then((quizes) => {
          this.quizes = quizes;
      })
  }

  public Update(quiz: Quiz): void{
      this.quizService.update(this.dictaatName, quiz)
      .then((quiz) => {
        this.refresh();
        this.selectedQuiz = null;
      })
  }

  public addQuiz(){

    this.quizService.ShowModal('add', [])
      .then((quiz) => {
        this.quizes.push(quiz);
      })
  }
  
  public editQuiz(quiz: Quiz): void{
    this.quizService.ShowModal('edit', [quiz])
      .then((quiz) => {
        quiz = quiz;
      })
  }

  public cancelEdit(): void{
    this.selectedQuiz = null;
  }

}
