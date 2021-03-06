import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


//routing
import { routing, CanDeactivateEditPage } from './app.routing';


//modules
import { PagesModule } from "./pages/pages.module";
import { GameElementsModule } from '../shared/game-elements/game-elements.module';
import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';
import { DictaatModule } from "./dictaat/dictaat.module";


//components
import { AvatarComponent }  from '../shared/avatar/avatar.component';
import { DemoComponent } from '../shared/demo/demo.component';
import { AppComponent } from "./app.component";
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quiz/edit-quiz/edit-quiz.component';
import { DialogComponent } from "../shared/dialog/dialog.component";
import { AssignmentListComponent } from './assignments/assignment-list/assignment-list.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import {AchievementMarkerComponent} from "./achievement-marking/achievement-marker.component";
import {AchievementMarkingComponent} from "./achievement-marking/achievement-marking.component";

//modals and their dependencies
import { WdSharedModule } from "../shared/wd-shared.module";

import { AddQuizComponent } from "./quiz/add-quiz/add-quiz.component";
import { ImagesModule } from "./images/images.module";
import { AddVideoComponent } from "./videos/add-video.component";
import { AddRatingComponent } from "./rating/add-rating/add-rating.component";
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { MarkAssignmentComponent } from './assignments/mark-assignment/mark-assignment.component';
import { DictaatSettingsComponent } from "./dictaat/settings-dictaat.component";
import { MarkingComponent } from './marking/marking.component';
import { MarkerComponent } from "./marking/marker.componet";
import { DatabModule } from "../extern/databases/datab.module";
import { QuizManagerComponent } from './quiz/quiz-manager/quiz-manager.component';
import { QuestionManagerComponent } from './quiz/quiz-manager/question-manager/question-manager.component';
import { AnswerManagerComponent } from './quiz/quiz-manager/answer-manager/answer-manager.component';
import { AssignmentManagerComponent } from './assignments/assignment-manager/assignment-manager.component';
import { AssignmentModalComponent } from './assignments/assignment-modal/assignment-modal.component';
import { QuizModalComponent } from './quiz/quiz-modal/quiz-modal.component';
import { StylingComponent } from './styling/styling.component';
import { CodemirrorModule } from 'ng2-codemirror';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { PollModalComponent } from './poll/poll-modal/poll-modal.component';
import { AddPollComponent } from './poll/add-poll/add-poll.component';
import { PollManagerComponent } from './poll/poll-manager/poll-manager.component';
import { EditPollComponent } from './poll/edit-poll/edit-poll.component';


@NgModule({
    imports: [
        WdSharedModule, GameElementsModule, DragulaModule, ImagesModule,  CodemirrorModule,
        BrowserModule, HttpModule, routing, PagesModule, FormsModule, DictaatModule, DatabModule,
        TextareaAutosizeModule
    ],
    declarations: [       
        StylingComponent,
        AddRatingComponent, AddVideoComponent, AddQuizComponent, EditQuizComponent, DictaatSettingsComponent,
        DemoComponent, DialogComponent, AvatarComponent, MarkingComponent, MarkerComponent, 
        AchievementMarkingComponent, AchievementMarkerComponent, AppComponent, QuizListComponent, AssignmentListComponent, 
        AddAssignmentComponent, EditAssignmentComponent, MarkAssignmentComponent,  QuizManagerComponent, QuestionManagerComponent, 
        AnswerManagerComponent, AssignmentManagerComponent, AssignmentModalComponent, QuizModalComponent, PollModalComponent, AddPollComponent, PollManagerComponent, EditPollComponent
    ],
    providers: [
        CanDeactivateEditPage, StylingComponent,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class CMSModule {

}
