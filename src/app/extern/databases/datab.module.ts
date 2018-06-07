
import { NgModule } from "@angular/core";
import { DatabComponent } from "./datab.component";
import { DatabService } from "./datab.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { GameElementsModule } from "../../shared/game-elements/game-elements.module";
import { WdSharedModule } from "../../shared/wd-shared.module";

@NgModule({
    imports: [
        BrowserModule, HttpClientModule, FormsModule, GameElementsModule, WdSharedModule
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
