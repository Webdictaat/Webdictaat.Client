import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';


//components
import { AddImageComponent } from './add-image.component';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AddImageComponent],
    exports: [AddImageComponent]
})
export class ImagesModule {

}
