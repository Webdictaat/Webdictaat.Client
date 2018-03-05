import { Component, OnInit, NgZone } from '@angular/core';
import { PollService } from '../../../shared/services/poll.service';
import { Poll } from '../../../shared/models/poll';
import { DictaatService } from '../../../shared/services/dictaat.service';
import { BaseModalComponent } from '../../../shared/core/basemodal.service';

@Component({
  selector: 'wd-poll-modal',
  templateUrl: './poll-modal.component.html',
  styleUrls: ['./poll-modal.component.css']
})
export class PollModalComponent extends BaseModalComponent implements OnInit {

  private dictaatName: string;
  public polls: Poll[];
  public showModal: boolean;

  constructor(
    public pollService: PollService,
    public dictaatService: DictaatService,
    private zone: NgZone
){
  super();   
}
  ngOnInit() {
    super.wdOnInit(this.pollService, this.zone);
    this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { 

      if(dictaat) { this.dictaatName = dictaat.name } 

      //check for modal changes to update assignment list
      this.pollService.modalEvent.subscribe((event) => {

          this.showModal = event.isVisible;

          if(event.isVisible && event.modalType == 'choose')
          {
            this.pollService.getPolls(this.dictaatName)
              .then((polls) => this.polls = polls );
          }
      })
    });     
    
    
  }

  public cancel(){
    this.pollService.CancelModal();
    this.showModal = false;
  }

  public completeModal(poll: Poll){
    if(poll)
      this.pollService.CompleteModal(poll);
    else
      this.pollService.CancelModal();
  }

}
