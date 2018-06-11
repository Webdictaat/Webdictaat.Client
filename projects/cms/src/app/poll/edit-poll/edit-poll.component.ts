import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Poll } from 'core/lib/models/poll';
import { DictaatService } from 'core/lib/services/dictaat.service';
import { PollService } from 'core/lib/services/poll.service';

@Component({
  selector: 'wd-edit-poll',
  templateUrl: './edit-poll.component.html',
  styleUrls: ['./edit-poll.component.css']
})
export class EditPollComponent implements OnInit {

  public poll: Poll;
  dictaatName: string;

  @Input()
  public pid: number;
  
  @Output()
  public onFinished = new EventEmitter();



  constructor(
    private pollService: PollService,
    private dictaatService: DictaatService) {}

  ngOnInit() {
    this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { 
      if(dictaat) { 
        this.dictaatName = dictaat.name } 
        this.pollService.getPoll(this.dictaatName, this.pid)
          .then(poll => this.poll = poll);
    });       
  }

  public Update(): void {
    this.pollService.updatePoll(this.dictaatName, this.poll)
        .then((poll: Poll) => {
            this.onFinished.emit(poll);
        });
}


public Cancel(): void {
    this.poll = new Poll();
    this.onFinished.emit();
}
  
}
