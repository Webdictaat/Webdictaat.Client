import { Attempt } from "./attempt";
import { Question } from "./question";
import { Assignment } from "../assignment";

export class Quiz {
    
    
    //fields
    public id: number;
    public dictaat: String;
    public questions: Question[];
    public myAttempts: Attempt[];
    public lastAttempt: Attempt;
    public status : string;
    public current: Question;
    public currentIndex: number;
    public shuffle: boolean;
    public assignment: Assignment;
    public isComplete: boolean;
  
    constructor(json = null){
        this.questions = [];
        this.currentIndex = 0;
        this.assignment = new Assignment();

        if(json){
            this.id = json.id;
            this.dictaat = json.dictaat;
            this.shuffle = json.shuffle;
            this.isComplete = json.isComplete;

            //map assignment
            this.assignment = new Assignment(json.assignment);
            
            //map questions
            json.questions.forEach(q => {
                this.questions.push(new Question(q));
            })

            this.current = this.questions[this.currentIndex];
            this.myAttempts = json.myAttempts ? json.myAttempts : [];
            
            if(this.myAttempts && this.myAttempts.length > 0){
                this.status =  "finished";
                this.lastAttempt = this.myAttempts[0]; 
             }           
             else{
               this.status = 'idle';
             }
        }
        
    }

    start(): void {
        this.currentIndex = 0;
        this.status = "started";
        this.current = this.questions[this.currentIndex];
    }

   
    public isValid() : boolean{
        let response : boolean = this.assignment.isValid();
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
    public isOutdated: boolean; 
}