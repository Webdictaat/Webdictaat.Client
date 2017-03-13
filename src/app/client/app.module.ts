import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

//components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageComponent } from '../shared/page/page.component';
import { HtmlOutlet } from '../shared/core/html-outlet.directive';
import { NavMenuComponent } from '../shared/nav-menu/nav-menu.component';
import { AvatarComponent }  from '../shared/avatar/avatar.component';

import { QuestionsService } from '../shared/services/question.service';
import { AccountService } from '../shared/services/account.service';
import { RatingService } from '../shared/services/rating.service';
import { wdApi } from '../shared/core/wdapi.service';
import { AchievementService } from '../shared/servicees/achievement.service';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [HtmlOutlet, AppComponent, PageComponent, NavMenuComponent, AvatarComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
        QuestionsService, AccountService, RatingService, wdApi, AchievementService
    ],
    bootstrap: [AppComponent]
})
export class ClientsModule {

}
