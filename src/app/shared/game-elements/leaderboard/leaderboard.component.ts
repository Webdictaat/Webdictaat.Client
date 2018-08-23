import { Component, OnInit, Input } from '@angular/core';
import { DictaatService } from "../../services/dictaat.service";
import { AccountService } from "../../services/account.service";
import { ConfigService } from "../../services/config.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "../../models/user";
import { GroupByPipe } from "../../core/group-by.pipe";
import { ArraySortPipe } from "../../core/order-by.pipe";



@Component({
  selector: 'wd-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  
  user: BehaviorSubject<User>;
  public participants: any[];
  public leaderboard: any[];
  public top5: any[];
  public state: number = 1;
  public groups: any[];

  @Input()
  public tab: string = 'individual'

  @Input()
  public sort: string = 'average';

  constructor(
    private dictaatService: DictaatService, 
    private accountService: AccountService, 
    private configService: ConfigService){}

  ngOnInit() {

    //handle inputs
    this.state = this.tab == 'group' ? 0 : 1; 

    this.user = this.accountService.User;
    this.configService.Config.subscribe((config) => {
        if(config){

          //load individual
          this.dictaatService.getParticipants(config.name)
            .then((participants) => {
                 this.participants = participants;
                 this.top5 = participants.slice(0, 5);
                 this.leaderboard = this.top5;
            })

          //load groups
          this.dictaatService.getGroups(config.name)
            .then((groups) => {
                 this.groups = groups.sort((a, b) => {
                    if(this.sort == 'total')
                      return a.totalPoints < b.totalPoints ? 1 : -1;
                    else
                      return a.points < b.points ? 1 : -1;
                 });
            })
        }
    })
  }

}
