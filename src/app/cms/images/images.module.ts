import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


//components
import { AddImageComponent } from './add-image.component';


@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [AddImageComponent],
    exports: [AddImageComponent]
})
export class ImagesModule {

}
