import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//components
import { RatingComponent } from './rating/rating.component';
import { AchievementsComponent } from './achievements/achievements.component';

//modules
import { QuizModule } from "./quiz/quiz.module";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { QuizComponent } from "./quiz/quiz.component";
import { AssignmentComponent } from './assignment/assignment.component';
import { PortalComponent } from './portal/portal.component';
import { WdCoreModule } from '../wd-core.module';
import { PollComponent } from './poll/poll.component';
import { TotalPointsPipe } from './leaderboard/totalpoints.pipe';
import { DatabComponent } from './extern/databases/datab.component';
import { DatabService } from './extern/databases/datab.service';


@NgModule({
    imports: [BrowserModule, FormsModule, QuizModule, WdCoreModule],
    declarations: [TotalPointsPipe, RatingComponent, LeaderboardComponent, DatabComponent, AchievementsComponent, AssignmentComponent, PortalComponent, PollComponent],
    providers: [DatabService],
    exports: [RatingComponent, AchievementsComponent, LeaderboardComponent, PollComponent, 
        QuizComponent, AssignmentComponent, PortalComponent, ]
})
export class GameElementsModule {                                                                                                                                                                                                                        

}
