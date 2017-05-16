import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//modules
import { PagesModule } from "./pages/pages.module";
import { ToolsModule } from '../shared/tools/tools.module';
import { GameElementsModule } from '../shared/game-elements/game-elements.module';
import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';
import { QuizModule } from "../shared/quiz/quiz.module";
import { DictaatModule } from "./dictaat/dictaat.module";


//components
import { AvatarComponent }  from '../shared/avatar/avatar.component';
import { ProfileComponent }  from '../shared/profile/profile.component';
import { DemoComponent } from '../shared/demo/demo.component';
import { AppComponent } from "./app.component";

//services
import { routing } from './app.routing';
import { DialogService } from '../shared/services/dialog.service';
import { RatingService } from '../shared/services/rating.service';
import { ImageService } from '../shared/services/images.service';
import { AccountService } from '../shared/services/account.service';
import { wdApi } from '../shared/core/wdapi.service';
import { DirtyGuard } from "../shared/core/security/dirty.guard";
import { VideoService } from "../shared/services/video.service";
import { NavMenuService } from "../shared/nav-menu/nav-menu.service";
import { AchievementService } from "../shared/services/achievement.service";
import { QuizService } from "../shared/services/quiz.service";

import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { DictaatService } from "../shared/services/dictaat.service";
import { DialogComponent } from "../shared/dialog/dialog.component";



@NgModule({
    imports: [
        ToolsModule, GameElementsModule, DragulaModule, QuizModule,
        BrowserModule, HttpModule, routing, PagesModule, FormsModule, DictaatModule
    ],
    declarations: [
        DemoComponent, DialogComponent, AvatarComponent, ProfileComponent,
        AppComponent, QuizListComponent
    ],
    providers: [
        DialogService, QuizService, ImageService, AchievementService, AccountService, wdApi,
        RatingService, DictaatService, DirtyGuard, VideoService, NavMenuService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class CMSModule {

}
