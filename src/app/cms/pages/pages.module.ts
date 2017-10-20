﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

//components
import { PagesComponent } from './pages.component';
import { AddPageComponent } from './add-page.component';
import { PagesService } from "./pages.service";
import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';
import { EditPageComponent } from "./edit-page.component";
import { ToolsModule } from "../tools/tools.module";
import { CodemirrorModule } from 'ng2-codemirror';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, DragulaModule, ToolsModule, CodemirrorModule],
    declarations: [
        PagesComponent, EditPageComponent, AddPageComponent
    ],
    exports: [PagesComponent, AddPageComponent, EditPageComponent],
    providers: [ PagesService, DragulaService]
})
export class PagesModule {

}
