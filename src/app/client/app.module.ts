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

//modules
import { DatabModule } from "../extern/databases/datab.module";
import { WdModule } from "../shared/core/wd.module";
import { GameElementsModule } from "../shared/game-elements/game-elements.module";


@NgModule({
    imports: [BrowserModule, WdModule, HttpModule, routing, DatabModule, GameElementsModule],
    declarations: [HtmlOutlet, AppComponent, PageComponent, NavMenuComponent, AvatarComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class ClientModule {

}
