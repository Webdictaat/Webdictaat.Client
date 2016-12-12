import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';


//components
import { AddQuestionComponent } from './add-question.component';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AddQuestionComponent],
    exports: [AddQuestionComponent]
})
export class QuestionsModule {

}
