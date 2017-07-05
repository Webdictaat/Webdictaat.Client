
import { NgModule } from "@angular/core";
import { DatabComponent } from "./datab.component";
import { DatabService } from "./datab.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { GameElementsModule } from "../../shared/game-elements/game-elements.module";
import { WdModule } from "../../shared/core/wd.module";

@NgModule({
    imports: [
        BrowserModule, HttpModule, FormsModule, GameElementsModule, WdModule
    ],
    declarations: [
        DatabComponent, 
    ],
    exports: [
        DatabComponent
    ],
    providers: [
        DatabService
    ],

})
export class DatabModule {

}
