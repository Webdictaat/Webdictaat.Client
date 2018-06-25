import { ModuleWithProviders, Injectable } from '@angular/core';
import { Routes, RouterModule, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DictaatComponent } from "./dictaat/dictaat.component";
import { DictatenComponent } from "./dictaat/dictaten.component";
import { QuizListComponent } from "./quiz/quiz-list/quiz-list.component";
import { AssignmentListComponent } from "./assignments/assignment-list/assignment-list.component";
import { DictaatSettingsComponent } from "./dictaat/settings-dictaat.component";
import { MarkingComponent } from "./marking/marking.component";
import { Observable } from "rxjs";
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { PagesComponent } from './pages/pages/pages.component';
import { StylingComponent } from './styling/styling.component';
import { ProcessTokenComponent } from 'core';

@Injectable()
export class CanDeactivateEditPage implements CanDeactivate<EditPageComponent> {
    canDeactivate(component: EditPageComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean{
        return confirm("Are you sure you want to leave this page? Don't forget to save before leaving!");
    }
}

const appRoutes: Routes = [
    {
        path: 'process-token',
        component: ProcessTokenComponent
    },
    { 
        path: '', 
        redirectTo: '/dictaten', 
        pathMatch: 'full' 
    },
    {
        path: 'dictaten',
        component: DictatenComponent
    },
    {
        path: 'dictaten/:dictaatName',
        component: DictaatComponent,
        children: [
            { path: '', redirectTo: 'pages', pathMatch: 'full' },
            { path: 'quizes', component: QuizListComponent  },
            { path: 'pages', component: PagesComponent  },
            { path: 'assignments', component: AssignmentListComponent  },
            { path: 'settings', component: DictaatSettingsComponent  },
            { path: 'marking', component: MarkingComponent  },
            { path: 'styling', component: StylingComponent  }

        ]
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: EditPageComponent,
        canDeactivate: [CanDeactivateEditPage]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
