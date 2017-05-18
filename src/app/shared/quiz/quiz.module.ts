import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from "./quiz.component";
import { QuizQuestionComponent } from "./quiz-question.component";
import { QuizService } from "../services/quiz.service";
import { SpinnerComponent } from "../spinner/spinner.component";

@NgModule({
    providers: [QuizService],
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [QuizComponent, SpinnerComponent, QuizQuestionComponent],
    exports: [QuizComponent]
})
export class QuizModule {}
