import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { RatingComponent } from '../rating/rating.component';
import { AchievementsComponent } from './achievements.component';
import { QuizModule } from "../quiz/quiz.module";

//modules


@NgModule({
    imports: [BrowserModule, FormsModule, QuizModule],
    declarations: [RatingComponent, AchievementsComponent],
    exports: [RatingComponent, AchievementsComponent]
})
export class GameElementsModule {                                                                                                                                                                                                                        

}
