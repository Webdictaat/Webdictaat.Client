import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//components
import { RatingComponent } from './rating/rating.component';
import { AchievementsComponent } from './achievements/achievements.component';

//modules
import { QuizModule } from "./quiz/quiz.module";
import { LeaderboardModule } from "./leaderboard/leaderboard.module";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { QuizComponent } from "./quiz/quiz.component";
import { AssignmentComponent } from './assignment/assignment.component';
import { PortalComponent } from './portal/portal.component';
import { WdSharedModule } from '../wd-shared.module';
import { PollComponent } from './poll/poll.component';


@NgModule({
    imports: [BrowserModule, FormsModule, QuizModule, WdSharedModule, LeaderboardModule],
    declarations: [RatingComponent, AchievementsComponent, AssignmentComponent, PortalComponent, PollComponent],
    exports: [RatingComponent, AchievementsComponent, LeaderboardComponent, PollComponent, 
        QuizComponent, AssignmentComponent, PortalComponent, ]
})
export class GameElementsModule {                                                                                                                                                                                                                        

}
