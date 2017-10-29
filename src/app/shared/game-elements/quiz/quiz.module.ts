import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from "./quiz.component";
import { WdModule } from "../../core/wd.module";
import { QuestionComponent } from './question/quiz-question.component';
import { QuestionMcComponent } from './question/mc/question-mc.component';
import { QuestionBlanksComponent } from './question/blanks/question-blanks.component';
import { CommonModule } from '@angular/common';
import { QuestionGroupComponent } from './question/question-group/question-group.component';
import { QuestionSentenceComponent } from './question/question-sentence/question-sentence.component';


@NgModule({
    providers: [],
    imports: [BrowserModule, HttpModule, WdModule, FormsModule, CommonModule],
    declarations: [QuizComponent, QuestionComponent, QuestionMcComponent, QuestionBlanksComponent, QuestionGroupComponent, QuestionSentenceComponent],
    exports: [QuizComponent, QuestionComponent, QuestionMcComponent, QuestionBlanksComponent]
})
export class QuizModule {}
