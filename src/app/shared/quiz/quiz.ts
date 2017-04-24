export class Quiz{
    public id: number;
    public title: string;
    public description: string;
    public status : string;
    public questions: Question[];
}

export class Question{
    public id: number;
    public text: string;
    public answers: Answer[];
    public selectedAnswer: Answer;
}

export class Answer{
    public id: number;
    public text: string;
    public isCorrect: boolean;
}