import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

//components
import { PagesComponent } from './pages.component';
import { AddPageComponent } from './add-page.component';
import { PagesService } from "./pages.service";

import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, DragulaModule],
    declarations: [PagesComponent, AddPageComponent],
    exports: [PagesComponent, AddPageComponent],
    providers: [ PagesService, DragulaService]
})
export class PagesModule {

}
