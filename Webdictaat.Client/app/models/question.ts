export class QuestionAnswer {
    text: string;
    isCorrect: Boolean = false;
    toggle(): void {
        this.isCorrect = !this.isCorrect;
    }
}

export class Question {

    id: number;
    text: string;
    answers: QuestionAnswer[] = [];

    AddAnswer(): void {
        this.answers.push(new QuestionAnswer());
    };

    RemoveAnswer(answer: QuestionAnswer): void {
        var index = this.answers.indexOf(answer);
        this.answers.splice(index, 1) 
    }
}