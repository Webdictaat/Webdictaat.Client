import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';  


//shared services
import { ConfigService } from "./services/config.service"; //the service for config variables
import { DialogService } from "./services/dialog.service";
import { RatingService } from "./services/rating.service";
import { ImageService } from "./services/images.service";
import { AccountService } from "./services/account.service";
import { VideoService } from "./services/video.service";
import { NavMenuService } from "./nav-menu/nav-menu.service";
import { AchievementService } from "./services/achievement.service";
import { QuizService } from "./services/quiz.service";
import { AssignmentService } from "./services/assignment.service";
import { DictaatService } from "./services/dictaat.service";
import { ParticipantService } from "./services/participantService";


//shared components
import { SpinnerComponent } from "./spinner/spinner.component";
import { StylingService } from "./services/styling.service";
import { ModalComponentComponent } from "./modal-component/modal-component.component";
import { GoogleAnalyticsEventsService } from "./services/google-analytics.service";
import { PollService } from "./services/poll.service";
import { AvatarComponent } from "./avatar/avatar.component";
import { DialogComponent } from "./dialog/dialog.component";
import { WdFilterPipe } from "./core/wdfilter.pipe";
import { GroupByPipe } from "./core/group-by.pipe";
import { ArraySortPipe } from "./core/order-by.pipe";
import { ProcessTokenComponent } from "./core/process-token.component";
import { DirtyGuard } from "./core/security/dirty.guard";
import { wdApi } from "./core/wd.service";
import { HtmlOutlet } from "./core/html-outlet.directive";
import { NavMenuComponent } from "../public_api";
import { RouterModule } from "@angular/router";


/**
 * This mdule contains all the shared services, and components that are reusable across the application
 */
@NgModule({
    imports: [CommonModule, RouterModule],    
    providers: [
        NavMenuService,
        DialogService, QuizService, ImageService, AchievementService, AccountService, wdApi, ConfigService,
        RatingService, DirtyGuard, VideoService, NavMenuService, AssignmentService, DictaatService, ParticipantService,
        StylingService, GoogleAnalyticsEventsService, PollService
    ],
    declarations: [
        NavMenuComponent,       DialogComponent, AvatarComponent, HtmlOutlet,
      SpinnerComponent, WdFilterPipe, GroupByPipe, ArraySortPipe, ProcessTokenComponent, ModalComponentComponent
    ],
    exports: [
       DialogComponent, AvatarComponent, HtmlOutlet,
      SpinnerComponent, WdFilterPipe, GroupByPipe, ArraySortPipe, ModalComponentComponent
    ]
})
export class WdCoreModule {}
 