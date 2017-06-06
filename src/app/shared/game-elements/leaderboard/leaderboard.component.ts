import { Component, OnInit } from '@angular/core';
import { Leaderboard } from "./leaderboard.service";



@Component({
  selector: 'wd-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public leaderboard: Leaderboard;

  constructor() { }

  ngOnInit() {
    this.leaderboard = new Leaderboard();
    this.leaderboard.ranks = [
      {rank: 1, name: "Stijn Smulders", points: 1337},
      {rank: 2, name: "Paul Wagener", points: 900},
      {rank: 3, name: "Stefan van Dockum", points: 344},
      {rank: 4, name: "Martijn Schuurmans", points: 100}
    ]
  }




}
