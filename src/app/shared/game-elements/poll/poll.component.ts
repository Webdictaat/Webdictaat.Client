import { Component, OnInit, Input } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { ConfigService } from '../../services/config.service';
import { Poll } from '../../models/poll';
import { AccountService } from '../../services/account.service';

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

  public isAuth: boolean;

  private dictaatName: string;

  public getColor(index){
    if(this.poll)
    {
      //avans red = rgb(198, 0, 42);
      var value = (198 / this.poll.options.length + 1) * (index + 1); 
      return "rgb(" + (value) + ",0, 42)";
    }
  }

  constructor(public pollService: PollService, private configService: ConfigService, 
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.accountService.User.subscribe(u => {
        this.isAuth = u != null;
    })

    this.configService.DictaatName.subscribe((name) => {
        if(name)
        {
          this.dictaatName = name;
          this.pollService.getPoll(name,this.pid)
              .then(poll => this.poll = poll);
        }
       
    });
  }

  public isSelected(option){
    return option == this.selectedOption;
  }

  public vote(){
    if(!this.isSubmitting){
      this.isSubmitting = true;
      this.pollService.vote(this.dictaatName, this.poll.id, this.selectedOption.id)
        .then(poll => {
            this.poll = poll;
            this.isSubmitting = false;
        });
    }
  }

  public login(){
    this.accountService.Login();
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
