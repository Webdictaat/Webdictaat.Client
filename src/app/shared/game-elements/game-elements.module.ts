﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//components
import { RatingComponent } from './rating/rating.component';
import { AchievementsComponent } from './achievements.component';

//modules
import { QuizModule } from "./quiz/quiz.module";
import { LeaderboardModule } from "./leaderboard/leaderboard.module";
import { WdModule } from "../core/wd.module";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { QuizComponent } from "./quiz/quiz.component";
import { AssignmentComponent } from './assignment/assignment.component';


@NgModule({
    imports: [BrowserModule, FormsModule, QuizModule, WdModule, LeaderboardModule],
    declarations: [RatingComponent, AchievementsComponent, AssignmentComponent],
    exports: [RatingComponent, AchievementsComponent, LeaderboardComponent, QuizComponent, AssignmentComponent]
})
export class GameElementsModule {                                                                                                                                                                                                                        

}
