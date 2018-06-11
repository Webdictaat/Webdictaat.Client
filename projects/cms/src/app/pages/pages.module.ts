import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

//components
import { PagesService } from "./pages.service";
import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';
import { ToolsModule } from "../tools/tools.module";
import { CodemirrorModule } from 'ng2-codemirror';

import { routing } from "../app.routing";
import { EditPageComponent } from './edit-page/edit-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { PagesComponent } from './pages/pages.component';
import { PageItemComponent } from './pages/page-item/page-item.component';
import { FolderItemComponent } from './pages/folder-item/folder-item.component';


@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, routing, DragulaModule, ToolsModule, CodemirrorModule],
    declarations: [
        PagesComponent, EditPageComponent, AddPageComponent, PageItemComponent, FolderItemComponent
    ],
    exports: [PagesComponent, AddPageComponent, EditPageComponent],
    providers: [ PagesService, DragulaService]
})
export class PagesModule {

}
