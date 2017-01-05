import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { MultipleChoiceComponent } from './multiple-choice.component';
import { RatingComponent } from './rating.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [MultipleChoiceComponent, RatingComponent],
    exports: [MultipleChoiceComponent, RatingComponent]
})
export class GameElementsModule {

}
