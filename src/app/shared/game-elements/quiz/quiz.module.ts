import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from "./quiz.component";
import { QuizQuestionComponent } from "./quiz-question.component";
import { WdModule } from "../../core/wd.module";

@NgModule({
    providers: [],
    imports: [BrowserModule, HttpModule, WdModule, FormsModule],
    declarations: [QuizComponent,QuizQuestionComponent],
    exports: [QuizComponent]
})
export class QuizModule {}