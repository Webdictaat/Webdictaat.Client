import { Question } from "../../../models/quiz/question";
import { Input } from "@angular/core";

export class QuestionBase {

    @Input()
    public question: Question;

    @Input()
    public isChecking: boolean;

}