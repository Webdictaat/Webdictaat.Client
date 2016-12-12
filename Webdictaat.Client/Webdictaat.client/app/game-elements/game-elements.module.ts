import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { MultipleChoiceComponent } from './multiple-choice.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [MultipleChoiceComponent],
    exports: [MultipleChoiceComponent]
})
export class GameElementsModule {

}
