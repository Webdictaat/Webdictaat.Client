

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LeaderboardService } from "./leaderboard.service";
import { LeaderboardComponent } from "./leaderboard.component";
import { WdModule } from "../../core/wd.module";
import { TotalPointsPipe } from "./totalpoints.pipe";

@NgModule({
    providers: [LeaderboardService],
    imports: [BrowserModule, WdModule, HttpModule, FormsModule],
    declarations: [LeaderboardComponent, TotalPointsPipe],
    exports: [LeaderboardComponent]
})
export class LeaderboardModule {}
