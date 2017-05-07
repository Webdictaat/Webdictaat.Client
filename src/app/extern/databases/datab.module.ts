
import { NgModule } from "@angular/core";
import { DatabComponent } from "./datab.component";
import { DatabService } from "./datab.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule, HttpModule, FormsModule,
    ],
    declarations: [
        DatabComponent
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
