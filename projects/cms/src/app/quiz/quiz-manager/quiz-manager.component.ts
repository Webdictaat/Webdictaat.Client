import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'core/lib/models/quiz/quiz';
import { Question } from 'core/lib/models/quiz/question';

@Component({
  selector: 'wd-quiz-manager',
  templateUrl: './quiz-manager.component.html',
  styleUrls: ['./quiz-manager.component.css']
})
export class QuizManagerComponent implements OnInit {

  @Input()
  public quiz: Quiz;

  public selected: Question;
  public tab: number = 0;
  
  constructor() { 
    this.tab = 0;
  }

  ngOnInit() {
    this.selected = this.quiz.questions[0];
  }

  RemoveQuestion(question): void{
    var toDelete = this.quiz.questions.indexOf(question);
    this.quiz.questions.splice(toDelete, 1);
    if(this.quiz.questions)
    {
        this.selected = this.quiz.questions[this.quiz.questions.length -1];
    }
    else{
      this.selected = null;
    }
    
  }

  AddQuestion(): void{
      var question = new Question();
      this.quiz.questions.push(question);
      this.selected = question;
  }


  isValid(question: Question){
    return question.text && question.type;
  }

}
