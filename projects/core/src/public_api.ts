/*
 * Public API Surface of extern
 */

 //the module it's self
export { WdCoreModule } from './lib/wd-core.module';
export { wdApi } from './lib/core/wd.service';
export { ProcessTokenComponent } from './lib/core/process-token.component';
export { GroupByPipe } from './lib/core/group-by.pipe';

//components
export { AvatarComponent } from './lib/avatar/avatar.component';
export { GameElementsModule } from './lib/game-elements/game-elements.module'
export { HtmlOutlet } from './lib/core/html-outlet.directive';
export { AchievementsComponent } from './lib/game-elements/achievements/achievements.component';


//modal items
export { ModalComponentComponent } from './lib/modal-component/modal-component.component'
export { BaseModalService, BaseModalComponent } from './lib/core/basemodal.service'

//nav menu
export { NavMenuComponent } from  './lib/nav-menu/nav-menu.component';
export { NavMenuService } from  './lib/nav-menu/nav-menu.service';

//extern
export { DatabComponent } from './lib/game-elements/extern/databases/datab.component';
export { DatabService } from './lib/game-elements/extern/databases/datab.service';

//barrels
// export * from './lib/services/index';
// export * from './lib/models/index';
//temp fix for barrells
export { AccountService } from './lib/services/account.service';
export { AchievementService } from './lib/services/achievement.service';
export { AssignmentService } from './lib/services/assignment.service';
export { ConfigService } from './lib/services/config.service';
export { DialogData, DialogService } from './lib/services/dialog.service';
export { DictaatService } from './lib/services/dictaat.service';
export { GoogleAnalyticsEventsService } from './lib/services/google-analytics.service';
export { ImageService } from './lib/services/images.service';
export { ParticipantService } from './lib/services/participantService';
export { PollService } from './lib/services/poll.service';
export { QuizService } from './lib/services/quiz.service';
export { RatingService } from './lib/services/rating.service';
export { StylingService } from './lib/services/styling.service';
export { VideoService } from './lib/services/video.service';
//models
export { Achievement } from './lib/models/achievement';
export { AchievementGroup } from './lib/models/achievementgroup';
export { UserAchievement } from './lib/models/userachievement';
export { Group } from './lib/models/user';
export { Assignment } from './lib/models/assignment';
export { Dictaat } from './lib/models/dictaat';
export { DictaatSummary } from './lib/models/dictaat-summary';
export { NavMenuItem } from './lib/models/nav-menu';
export { Page } from './lib/models/page';
export { Poll } from './lib/models/poll';
export { Rate } from './lib/models/rating';
export { ToolParams } from './lib/models/tool-params';
export { Answer } from './lib/models/quiz/answer';
export { Attempt } from './lib/models/quiz/attempt';
export { Question } from './lib/models/quiz/question';
export { Quiz,QuizSummary} from './lib/models/quiz/quiz';