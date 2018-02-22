
import { NgModule }      from '@angular/core';

//services
import { RemoveDictaatComponent } from "./remove-dictaat.component";
import { AddDictaatComponent } from "./add-dictaat.component";
import { DictatenComponent } from "./dictaten.component";
import { DictaatComponent } from "./dictaat.component";
import { routing } from "../app.routing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { DictaatService } from "../../shared/services/dictaat.service";
import { WdSharedModule } from '../../shared/wd-shared.module';


@NgModule({
    imports: [
        BrowserModule, HttpModule, routing, FormsModule, WdSharedModule
    ],
    declarations: [
        RemoveDictaatComponent, AddDictaatComponent, DictatenComponent, DictaatComponent
    ],
    exports: [
         RemoveDictaatComponent, AddDictaatComponent, DictatenComponent, DictaatComponent
    ],
    providers: [DictaatService]
})
export class DictaatModule {

}
