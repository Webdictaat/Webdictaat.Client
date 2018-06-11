
import { NgModule } from "@angular/core";
import { DatabComponent } from "./datab.component";
import { DatabService } from "./datab.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { GameElementsModule, WdCoreModule } from "projects/core/src/public_api";

@NgModule({
    imports: [
        BrowserModule, HttpClientModule, FormsModule, GameElementsModule, WdCoreModule
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
