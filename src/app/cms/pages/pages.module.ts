import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

//components
import { PagesComponent } from './pages.component';
import { AddPageComponent } from './add-page.component';
import { PagesService } from "./pages.service";
import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';
import { EditPageComponent } from "./edit-page.component";
import { ToolsModule } from "../../shared/tools/tools.module";
import { HtmlComponent } from "../../shared/tools/html.component";

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, DragulaModule, ToolsModule],
    declarations: [
        PagesComponent, EditPageComponent, AddPageComponent
    ],
    exports: [PagesComponent, AddPageComponent, EditPageComponent],
    providers: [ PagesService, DragulaService]
})
export class PagesModule {

}
