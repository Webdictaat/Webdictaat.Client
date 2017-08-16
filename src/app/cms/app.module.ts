import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


//routing
import { routing } from './app.routing';


//modules
import { PagesModule } from "./pages/pages.module";
import { ToolsModule } from '../shared/tools/tools.module';
import { GameElementsModule } from '../shared/game-elements/game-elements.module';
import { DragulaModule , DragulaService } from 'ng2-dragula/ng2-dragula';
import { DictaatModule } from "./dictaat/dictaat.module";


//components
import { AvatarComponent }  from '../shared/avatar/avatar.component';
import { ProfileComponent }  from '../shared/profile/profile.component';
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
import { AddQuizComponent } from "./quiz/add-quiz/add-quiz.component";
import { AddPageComponent } from "./pages/add-page.component";
import { SpinnerComponent } from "../shared/spinner/spinner.component";
import { ImagesModule } from "./images/images.module";
import { AddVideoComponent } from "./videos/add-video.component";
import { AddRatingComponent } from "./rating/add-rating/add-rating.component";
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { MarkAssignmentComponent } from './assignments/mark-assignment/mark-assignment.component';
import { WdModule } from "../shared/core/wd.module";
import { DictaatSettingsComponent } from "./dictaat/settings-dictaat.component";
import { MarkingComponent } from './marking/marking.component';
import { MarkerComponent } from "./marking/marker.componet";
import { DatabModule } from "../extern/databases/datab.module";

@NgModule({
    imports: [
        ToolsModule, WdModule, GameElementsModule, DragulaModule, ImagesModule,
        BrowserModule, HttpModule, routing, PagesModule, FormsModule, DictaatModule, DatabModule
    ],
    declarations: [       
        AddRatingComponent, AddVideoComponent, AddQuizComponent, EditQuizComponent, DictaatSettingsComponent,
        DemoComponent, DialogComponent, AvatarComponent, ProfileComponent, MarkingComponent, MarkerComponent, AchievementMarkingComponent, AchievementMarkerComponent,
        AppComponent, QuizListComponent, AssignmentListComponent, AddAssignmentComponent, EditAssignmentComponent, MarkAssignmentComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class CMSModule {

}
