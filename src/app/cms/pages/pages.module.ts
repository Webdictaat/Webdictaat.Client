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

//for the eit page
import { AddRatingComponent } from "../../shared/rating/add-rating.component";
import { AddVideoComponent } from "../../shared/videos/add-video.component";
import { ImagesModule } from "../../shared/images/images.module";


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, DragulaModule, ToolsModule, ImagesModule],
    declarations: [
        PagesComponent, EditPageComponent, AddPageComponent
    ],
    exports: [PagesComponent, AddPageComponent, EditPageComponent],
    providers: [ PagesService, DragulaService]
})
export class PagesModule {

}
