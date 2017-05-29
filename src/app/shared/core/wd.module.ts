import { NgModule } from "@angular/core";


//shared services
import { wdApi } from './wd.service'; // the core service
import { ConfigService } from "../services/config.service"; //the service for config variables
import { DialogService } from '../services/dialog.service';
import { RatingService } from '../services/rating.service';
import { ImageService } from '../services/images.service';
import { AccountService } from '../services/account.service';
import { DirtyGuard } from "../core/security/dirty.guard";
import { VideoService } from "../services/video.service";
import { NavMenuService } from "../nav-menu/nav-menu.service";
import { AchievementService } from "../services/achievement.service";
import { QuizService } from "../services/quiz.service";
import { AssignmentService } from "../services/assignment.service";
import { DictaatService } from "../services/dictaat.service";

//shared components
import { SpinnerComponent } from "../spinner/spinner.component";



/**
 * This mdule contains all the shared services, and components that are reusable across the application
 */
@NgModule({
    providers: [
        DialogService, QuizService, ImageService, AchievementService, AccountService, wdApi, ConfigService,
        RatingService, DirtyGuard, VideoService, NavMenuService, AssignmentService, DictaatService
    ],
    declarations: [SpinnerComponent],
    exports: [SpinnerComponent]
})
export class WdModule {}
 