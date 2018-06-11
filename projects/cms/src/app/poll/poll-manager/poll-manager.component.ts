import { Component, OnInit, Input } from '@angular/core';
import { Poll } from 'core/lib/models/poll';

@Component({
  selector: 'wd-poll-manager',
  templateUrl: './poll-manager.component.html',
  styleUrls: ['./poll-manager.component.css']
})
export class PollManagerComponent implements OnInit {

  @Input()
  public poll: Poll;

  constructor() { }

  ngOnInit() {
  }

  public addOption(){
    this.poll.options.push({});
  }

  public removeOption(option){
    this.poll.options.splice(this.poll.options.indexOf(option), 1);
  }

}
