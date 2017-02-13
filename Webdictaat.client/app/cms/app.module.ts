import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

//modules
import { QuestionsModule } from '../questions/questions.module';
import { ImagesModule } from '../images/images.module';
import { PagesModule } from '../pages/pages.module';
import { ToolsModule } from '../tools/tools.module';

//components
import { AddRatingComponent } from '../rating/add-rating.component';
import { AppComponent } from './app.component';
import { AddDictaatComponent } from '../dictaten/add-dictaat.component';
import { DictatenComponent } from '../dictaten/dictaten.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DictaatComponent } from '../dictaat/dictaat.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { EditPageComponent }  from '../pages/edit-page.component';
import { AvatarComponent }  from '../avatar/avatar.component';


//services
import { routing } from './app.routing';
import { DialogService } from '../services/dialog.service';
import { QuestionsService } from '../services/question.service';
import { RatingService } from '../services/rating.service';
import { ImageService } from '../services/images.service';
import { AccountService } from '../services/account.service';
import { wdApi } from '../core/wdapi.service';

@NgModule({
    imports: [
        ToolsModule, QuestionsModule, ImagesModule, 
        BrowserModule, HttpModule, routing, PagesModule, FormsModule
    ],
    declarations: [
        AddDictaatComponent, DialogComponent, AvatarComponent, AddRatingComponent,
        AppComponent, DictatenComponent, DictaatComponent, EditPageComponent
    ],
    providers: [
        DialogService, QuestionsService, ImageService, AccountService, wdApi,
        RatingService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
