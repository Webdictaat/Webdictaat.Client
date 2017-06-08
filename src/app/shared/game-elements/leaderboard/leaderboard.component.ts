import { Component, OnInit } from '@angular/core';
import { Leaderboard, LeaderboardService } from "./leaderboard.service";
import { DictaatService } from "../../services/dictaat.service";
import { AccountService } from "../../services/account.service";
import { ConfigService } from "../../services/config.service";



@Component({
  selector: 'wd-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public participants: any[];

  constructor(private leaderboardService: LeaderboardService, private accountService: AccountService, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.Config.subscribe((config) => {
        if(config){
          this.leaderboardService.getParticipants(config.name)
            .then((participants) => {
                 this.participants = participants;
            })
        }
    })
  }




}
