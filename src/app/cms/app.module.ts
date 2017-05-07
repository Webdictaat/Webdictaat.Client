import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//modules
import { ImagesModule } from '../shared/images/images.module';
import { PagesModule } from '../shared/pages/pages.module';
import { ToolsModule } from '../shared/tools/tools.module';
import { GameElementsModule } from '../shared/game-elements/game-elements.module';
import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';
import { QuizModule } from "../shared/quiz/quiz.module";

//components
import { AppComponent } from './app.component';
import { AddRatingComponent } from '../shared/rating/add-rating.component';
import { AddDictaatComponent } from '../shared/dictaten/add-dictaat.component';
import { DictatenComponent } from '../shared/dictaten/dictaten.component';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { DictaatComponent } from '../shared/dictaat/dictaat.component';
import { RemoveDictaatComponent } from '../shared/dictaat/remove-dictaat.component';
import { EditPageComponent }  from '../shared/pages/edit-page.component';
import { AvatarComponent }  from '../shared/avatar/avatar.component';
import { ProfileComponent }  from '../shared/profile/profile.component';
import { DemoComponent } from '../shared/demo/demo.component';
import { AddVideoComponent } from "../shared/videos/add-video.component";


//services
import { routing } from './app.routing';
import { DialogService } from '../shared/services/dialog.service';
import { RatingService } from '../shared/services/rating.service';
import { ImageService } from '../shared/services/images.service';
import { DictatenService } from '../shared/services/dictaten.service';
import { AccountService } from '../shared/services/account.service';
import { wdApi } from '../shared/core/wdapi.service';
import { DirtyGuard } from "../shared/core/security/dirty.guard";
import { VideoService } from "../shared/services/video.service";
import { NavMenuService } from "../shared/nav-menu/nav-menu.service";
import { AchievementService } from "../shared/services/achievement.service";
import { QuizService } from "../shared/services/quiz.service";


@NgModule({
    imports: [
        ToolsModule, ImagesModule, GameElementsModule, DragulaModule, QuizModule,
        BrowserModule, HttpModule, routing, PagesModule, FormsModule
    ],
    declarations: [
        DemoComponent, RemoveDictaatComponent,
        AddDictaatComponent, DialogComponent, AvatarComponent, AddRatingComponent, ProfileComponent, AddVideoComponent,
        AppComponent, DictatenComponent, DictaatComponent, EditPageComponent
    ],
    providers: [
        DialogService, QuizService, ImageService, AchievementService, AccountService, wdApi,
        RatingService, DictatenService, DirtyGuard, VideoService, NavMenuService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class CMSModule {

}
