import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../../shared/services/quiz.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { QuizSummary } from "../../../shared/quiz/quiz";

@Component({
  selector: 'wd-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  
  quizes: QuizSummary[];

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

}
