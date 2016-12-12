import { NgModule } from '@angular/core';

//custom modules
import { HtmlOutlet } from '../core/html-outlet.directive';


//components
import { HtmlComponent } from './html.component';
import { HeaderComponent } from './default-tools/header.component';
import { TextComponent } from './default-tools/text.component';
import { ColumnComponent } from './default-tools/column.component';
import { MultipleChoiceToolComponent } from './game-tools/multiple-choice.component';
import { TrashComponent } from './default-tools/trash.component';
import { ImgComponent } from './default-tools/img.component';

@NgModule({
    declarations: [
        HtmlOutlet, ColumnComponent, TextComponent, HeaderComponent, HtmlComponent,
        MultipleChoiceToolComponent, TrashComponent, ImgComponent
    ],
    exports: [ColumnComponent, TextComponent, HeaderComponent, HtmlComponent,
        MultipleChoiceToolComponent, HtmlOutlet, TrashComponent, ImgComponent
    ]
})
export class ToolsModule {

}
