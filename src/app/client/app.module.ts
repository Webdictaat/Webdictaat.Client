import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageComponent } from '../shared/page/page.component';
import { HtmlOutlet } from '../shared/core/html-outlet.directive';
import { NavMenuComponent } from '../shared/nav-menu/nav-menu.component';
import { AvatarComponent }  from '../shared/avatar/avatar.component';

//modules
import { WdSharedModule } from "../shared/wd-shared.module";
import { DatabModule } from "../extern/databases/datab.module";
import { GameElementsModule } from "../shared/game-elements/game-elements.module";
import { MessageComponent } from './message/message.component';


@NgModule({
    imports: [BrowserModule, FormsModule, BrowserAnimationsModule, WdSharedModule, HttpModule, routing, DatabModule, GameElementsModule],
    declarations: [HtmlOutlet, AppComponent, PageComponent, NavMenuComponent, AvatarComponent, MessageComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class ClientModule {

}
