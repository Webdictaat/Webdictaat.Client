import { Component } from '@angular/core';
import { Quiz } from '../models/quiz/quiz';

@Component({
    selector: "wd-demo",
    template: `
    <div class="container-fluid">
        <h2>Demo project </h2>   
        <wd-quiz-manager [quiz]="quiz"></wd-quiz-manager>
    </div>
`,
})
export class DemoComponent {
    public quiz: Quiz;

    constructor(){
        this.quiz = new Quiz();
    }
}