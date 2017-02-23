import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { MultipleChoiceComponent } from './multiple-choice.component';
import { RatingComponent } from './rating.component';
import { AchievementsComponent } from './achievements.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MultipleChoiceComponent, RatingComponent, AchievementsComponent ],
    exports: [MultipleChoiceComponent, RatingComponent, AchievementsComponent]
})
export class GameElementsModule {

}
