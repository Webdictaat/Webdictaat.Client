import { Component, OnInit, Input } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { ConfigService } from '../../services/config.service';
import { Poll } from '../../models/poll';

@Component({
  selector: 'wd-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  @Input()
  public pid: number;

  public selectedOption = null;
  public isSubmitting = false;

  public poll : Poll;

  public getColor(index){
    if(this.poll)
    {
      var value = 256 - (256 / this.poll.options.length + 1) * (index + 1); 
      return "rgb(" + (value) + ", " + 22 + ", " + 22  + ")";
    }
  }

  constructor(public pollService: PollService, private configService: ConfigService) {}

  ngOnInit() {
    this.configService.DictaatName.subscribe((name) => {
        this.pollService.getPoll(name,this.pid)
            .then(poll => this.poll = poll);
    });
  }

  public isSelected(option){
    return option == this.selectedOption;
  }

  public vote(){
    if(!this.isSubmitting){
      this.poll.myVote = this.selectedOption;
    }
  }

  public edit(){
    var original = Object.assign({}, this.poll); 
    this.pollService.ShowModal('edit', [this.poll])
      .then((poll) => this.poll = poll)
      .catch(() => {
        this.poll = new Poll(original);
      });
  }


}
