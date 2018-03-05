import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Poll } from '../../../shared/models/poll';
import { PollService } from '../../../shared/services/poll.service';
import { DictaatService } from '../../../shared/services/dictaat.service';

@Component({
  selector: 'wd-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {

  public poll: Poll;

  @Output()
  public onFinished = new EventEmitter();

  dictaatName: string;


  constructor(
    private pollService: PollService,
    private dictaatService: DictaatService) {}

  ngOnInit() {
    this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { if(dictaat) { this.dictaatName = dictaat.name } });       

    this.poll = new Poll();
  }

  public Add(): void {
    this.pollService.addPoll(this.dictaatName, this.poll)
        .then((poll: Poll) => {
            this.onFinished.emit(poll);
        });
}


public Cancel(): void {
    this.poll = new Poll();
    this.onFinished.emit();
}

}
