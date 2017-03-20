import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//modules
import { QuestionsModule } from '../shared/questions/questions.module';
import { ImagesModule } from '../shared/images/images.module';
import { PagesModule } from '../shared/pages/pages.module';
import { ToolsModule } from '../shared/tools/tools.module';
import { GameElementsModule } from '../shared/game-elements/game-elements.module';

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

//services
import { routing } from './app.routing';
import { DialogService } from '../shared/services/dialog.service';
import { QuestionsService } from '../shared/services/question.service';
import { RatingService } from '../shared/services/rating.service';
import { ImageService } from '../shared/services/images.service';
import { DictatenService } from '../shared/services/dictaten.service';
import { AccountService } from '../shared/services/account.service';
import { wdApi } from '../shared/core/wdapi.service';
import { DirtyGuard } from "../shared/core/security/dirty.guard";
import { VideoService } from "../shared/services/video.service";

@NgModule({
    imports: [
        ToolsModule, QuestionsModule, ImagesModule, GameElementsModule,
        BrowserModule, HttpModule, routing, PagesModule, FormsModule
    ],
    declarations: [
        DemoComponent, RemoveDictaatComponent,
        AddDictaatComponent, DialogComponent, AvatarComponent, AddRatingComponent, ProfileComponent,
        AppComponent, DictatenComponent, DictaatComponent, EditPageComponent
    ],
    providers: [
        DialogService, QuestionsService, ImageService, AccountService, wdApi,
        RatingService, DictatenService, DirtyGuard, VideoService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class CMSModule {

}
