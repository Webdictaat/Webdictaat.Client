import { Component, OnInit } from '@angular/core';
import { Leaderboard, LeaderboardService } from "./leaderboard.service";
import { DictaatService } from "../../services/dictaat.service";
import { AccountService } from "../../services/account.service";
import { ConfigService } from "../../services/config.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "../../models/user";



@Component({
  selector: 'wd-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  maxpoints: any;

  user: BehaviorSubject<User>;
  public participants: any[];
  public leaderboard: any[];
  public top5: any[];

  constructor(private leaderboardService: LeaderboardService, private accountService: AccountService, private configService: ConfigService) { }

  ngOnInit() {
    this.user = this.accountService.User;
    this.configService.Config.subscribe((config) => {
        if(config){
          this.leaderboardService.getParticipants(config.name)
            .then((participants) => {
                 this.maxpoints = participants[0].points;
                 this.participants = participants;
                 this.top5 = participants.slice(0, 5);
                 this.leaderboard = this.top5;
            })
        }
    })
  }

  public calculateWidth(points){
    return points / this.maxpoints * 100;
  }




}
