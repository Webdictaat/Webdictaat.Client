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
import { AppComponent } from './app.component';
import { AddDictaatComponent } from '../dictaten/add-dictaat.component';
import { DictatenComponent } from '../dictaten/dictaten.component';
import { FilePreviewComponent } from '../file-preview/file-preview.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DictaatComponent } from '../dictaat/dictaat.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { EditPageComponent }  from '../pages/edit-page.component';
import { AvatarComponent }  from '../avatar/avatar.component';


//services
import { routing } from './app.routing';
import { DialogService } from '../services/dialog.service';
import { FilePreviewService } from '../services/file-preview.service';
import { QuestionsService } from '../services/question.service';
import { ImageService } from '../services/images.service';
import { AccountService } from '../services/account.service';


@NgModule({
    imports: [
        ToolsModule, QuestionsModule, ImagesModule, 
        BrowserModule, HttpModule, routing, PagesModule, FormsModule
    ],
    declarations: [
        AddDictaatComponent, DialogComponent, AvatarComponent,
        AppComponent, DictatenComponent, FilePreviewComponent, DictaatComponent, EditPageComponent
    ],
    providers: [
        FilePreviewService, DialogService, QuestionsService, ImageService, AccountService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
