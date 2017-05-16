export class Quiz{

    constructor(){
        this.questions = [];
        this.questions.push(new Question());
    }


    public id: number;
    public title: string;
    public description: string;
    public status : string;
    public questions: Question[];
    public myAttempts: Attempt[];

    public getLastAttempt(): Attempt{
        if(this.myAttempts && this.myAttempts.length > 0)
            return this.myAttempts[0];
        else
            return null;
    }
}

export class QuizSummary{
    public id: number;
    public title: string;
    public description: string;
    public questionCount: number;
    public completedByCount: number;
}

export class Attempt{
    public quizId : number;
    public timestamp : Date;
    public answers: number[];
    public correctAnswers: number;
}

export class Question{

    constructor(){
        this.answers = [];
    }

    public id: number;
    public text: string;
    public answers: Answer[];
    public selectedAnswer: Answer;

    RemoveAnswer(answer: Answer): void {
        var index = this.answers.indexOf(answer);
        this.answers.splice(index, 1) 
    }

}

export class Answer{
    public id: number;
    public text: string;
    public isCorrect: boolean;

    constructor(text: string){
        this.text = text;
    }

    toggle(): void {
        this.isCorrect = !this.isCorrect;
    }
}