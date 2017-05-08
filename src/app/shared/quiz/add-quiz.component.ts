import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DictaatService } from '../services/dictaat.service';

import { ActivatedRoute, Params } from '@angular/router';
import { QuizService } from "../services/quiz.service";
import { Quiz, Question, Answer } from "./quiz";

@Component({
    selector: "wd-add-quiz",
    styleUrls: ['./add-quiz.component.css'],
    templateUrl: "./add-quiz.component.html",
})
export class AddQuizComponent implements OnInit {
       

    private dictaatName: string;

    public isModalVisible: boolean;
    public quiz: Quiz;
    public selectedQuestion : Question;
    public selectedIndex: number;
    public newAnswerText: string; 

    constructor(
        private quizService: QuizService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef,
        private  zone: NgZone
    ) {}

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
        });

        this.quizService.getIsModalVisible().subscribe((isModalVisible: boolean) => {
            
            this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                this.quiz = new Quiz();  
                this.selectedIndex = 0;
                this.selectedQuestion = this.quiz.questions[0];           
            }

            this.zone.run(() => {});
          
        });
    }

    public Add(): void {
    
        this.quizService.addQuiz(this.dictaatName, this.quiz)
            .then((quiz: Quiz) => {
                this.quizService.CompleteModal(quiz);
            });
    }

    

    SelectQuestion(i): void{
        this.selectedIndex = i;
        this.selectedQuestion = this.quiz.questions[i];
    }

    AddQuestion(): void{
        this.quiz.questions.push(new Question());
    }
    
    AddAnswer(): void {
        this.selectedQuestion.answers.push(new Answer(this.newAnswerText));
        this.newAnswerText = null;
    };

    public Cancel(): void {
        this.quizService.CancelModal();
    }
}

