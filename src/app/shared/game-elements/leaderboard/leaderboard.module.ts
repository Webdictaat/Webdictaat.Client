

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeaderboardComponent } from "./leaderboard.component";
import { TotalPointsPipe } from "./totalpoints.pipe";
import { WdSharedModule } from '../../wd-shared.module';

@NgModule({
    providers: [],
    imports: [BrowserModule, WdSharedModule, HttpClientModule, FormsModule],
    declarations: [LeaderboardComponent, TotalPointsPipe],
    exports: [LeaderboardComponent]
})
export class LeaderboardModule {}
