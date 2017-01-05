import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageComponent } from '../page/page.component';
import { HtmlOutlet } from '../core/html-outlet.directive';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { AvatarComponent }  from '../avatar/avatar.component';

import { QuestionsService } from '../services/question.service';
import { AccountService } from '../services/account.service';
import { RatingService } from '../services/rating.service';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [HtmlOutlet, AppComponent, PageComponent, NavMenuComponent, AvatarComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, QuestionsService, AccountService, RatingService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
