import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//custom modules
import { HtmlOutlet } from '../core/html-outlet.directive';


//components
import { HtmlComponent } from './html.component';
import { HeaderComponent } from './default-tools/header.component';
import { TextComponent } from './default-tools/text.component';
import { CardComponent } from './default-tools/card.component';

import { ColumnComponent } from './default-tools/column.component';
import { RatingToolComponent } from './game-tools/rating.component';
import { TrashComponent } from './default-tools/trash.component';
import { ImgComponent } from './default-tools/img.component';
import { VideoComponent } from "./default-tools/video.component";
import { QuizToolComponent } from "./game-tools/quiz.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        HtmlOutlet, ColumnComponent, TextComponent, HeaderComponent, HtmlComponent, CardComponent, VideoComponent,
        QuizToolComponent, TrashComponent, ImgComponent, RatingToolComponent
    ],
    exports: [ColumnComponent, TextComponent, HeaderComponent, HtmlComponent, CardComponent, VideoComponent,
        QuizToolComponent, HtmlOutlet, TrashComponent, ImgComponent, RatingToolComponent
    ]
})
export class ToolsModule {

}
 