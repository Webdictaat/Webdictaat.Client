import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

//components
import { PagesComponent } from './pages.component';
import { AddPageComponent } from './add-page.component';
import { AddVideoComponent } from "../videos/add-video.component";
import { PagesService } from "./pages.service";



@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [PagesComponent, AddPageComponent, AddVideoComponent],
    exports: [PagesComponent, AddVideoComponent],
    providers: [ PagesService]
})
export class PagesModule {

}
