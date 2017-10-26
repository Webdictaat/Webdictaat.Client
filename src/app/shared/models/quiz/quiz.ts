import { Attempt } from "./attempt";
import { Question } from "./question";

export class Quiz {
    
    
    //fields
    public id: number;
    public dictaat: String;
    public title: string;
    public description: string;
    public questions: Question[];
    public myAttempts: Attempt[];
    public status : string;
    public current: Question;
    public currentIndex: number;

  
    constructor(json = null){
        this.questions = [];
        this.currentIndex = 0;

        if(json){
            json.questions.forEach(q => {
                this.questions.push(new Question(q));
            })
            this.current = this.questions[this.currentIndex];
            this.dictaat = json.dictaat;
            this.title = json.title;
            this.description = json.description;
            this.status = json.status;
            this.id = json.id;
            this.myAttempts = json.myAttempts ? json.myAttempts : [];
           
            if(this.myAttempts){
                this.status = this.myAttempts.length == 0 ?  "idle" : "finished";
             }           
             else{
               this.status = 'idle';
             }
        }
    }

    start(): void {
        this.currentIndex = 0;
        this.status = "started";
        this.questions.forEach(q => {
            q.selectedAnswers = [];
        });
        this.current = this.questions[this.currentIndex];
    }

   
    public isValid() : boolean{
        let response : boolean = (this.title && this.description && this.questions.length >= 1);
        this.questions.forEach(question => {
            if(!question.isValid()){
                response = false; 
            }
        })
        return response;
    }

    public nextQuestion(){
        this.currentIndex++;

        if(this.questions.length == this.currentIndex){
            this.status = 'finished';
        }
        else{
            this.current = this.questions[this.currentIndex];
        }   
    }

    public getLastAttempt(): Attempt{
        if(this.myAttempts && this.myAttempts.length > 0)
            return this.myAttempts[0];
        else
            return null;
    }
}

export class QuizSummary{
    public id: number;
    public dictaat: String;
    public title: string;
    public description: string;
    public questionCount: number;
    public completedByCount: number;
}