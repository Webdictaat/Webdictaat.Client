import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Quiz, QuizSummary, Question, Answer } from "../../../shared/models/quiz";
import { QuizService } from "../../../shared/services/quiz.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { ConfigService } from "../../../shared/services/config.service";


@Component({
  selector: 'wd-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnChanges {
    


  @Input()
  public quiz: Quiz;

  @Output()
  public onCancel = new EventEmitter();

  public selectedQuestion: Question;
  public selectedIndex: number;
  public newAnswerText: string;
  public dictaatName: string;
  

  constructor(
    private configService: ConfigService,
    private dictaatService: DictaatService,
    private quizService: QuizService) { }

    ngOnChanges(changes: SimpleChanges): void {
      if(this.quiz){
          this.selectedIndex = 0;
          this.selectedQuestion = this.quiz.questions[0];           
      }
      this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { if(dictaat) { this.dictaatName = dictaat.name } });       
    }

    SelectQuestion(i): void{
        this.selectedIndex = i;
        this.selectedQuestion = this.quiz.questions[i];
    }

    AddQuestion(): void{
        this.quiz.questions.push(new Question());
    }

    SaveQuestion(): void{
        this.quizService.updateQuestion(this.dictaatName, this.quiz.id,this.selectedQuestion);
    }

    DeleteQuestion(): void{
        var toDelete = this.quiz.questions[this.selectedIndex];
        this.quiz.questions.splice(this.selectedIndex, 1);
        this.quizService.removeQuestion(this.dictaatName, this.quiz.id, toDelete);
    }
    
    AddAnswer(): void {
        this.selectedQuestion.answers.push(new Answer({ text: this.newAnswerText}));
        this.newAnswerText = null;
    };

}
