import { Component, OnInit, NgZone } from '@angular/core';
import { QuizService } from 'core';
import { DictaatService } from 'core';
import { Quiz, QuizSummary } from 'core';
import { BaseModalComponent } from 'core';

@Component({
  selector: 'wd-quiz-modal',
  templateUrl: './quiz-modal.component.html',
  styleUrls: ['./quiz-modal.component.css']
})
export class QuizModalComponent  extends BaseModalComponent implements OnInit {

  private dictaatName: string;
  public quizes: QuizSummary[];

  constructor(
    private quizService: QuizService,
    private dictaatService: DictaatService,
    private zone: NgZone
){
  super(); 
  
}

  ngOnInit() {
    super.wdOnInit(this.quizService, this.zone);

    this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { 
      if(dictaat) { this.dictaatName = dictaat.name } 

      //check for modal changes to update assignment list
      this.quizService.modalEvent.subscribe((event) => {
          if(event.isVisible && event.modalType == 'choose')
          {
            this.quizService.getQuizes(this.dictaatName)
              .then((quizes) => this.quizes = quizes);
          }
      })
    });     
    
    
  }

  public completeModal(quiz: Quiz){
    if(quiz)
      this.quizService.CompleteModal(quiz);
    else
      this.quizService.CancelModal();
  }
}
