import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../shared/profile/profile.component';
import { DemoComponent } from '../shared/demo/demo.component';
import { DirtyGuard } from "../shared/core/security/dirty.guard";
import { DictaatComponent } from "./dictaat/dictaat.component";
import { DictatenComponent } from "./dictaat/dictaten.component";
import { QuizListComponent } from "./quiz/quiz-list/quiz-list.component";
import { PagesComponent } from "./pages/pages.component";
import { EditPageComponent } from "./pages/edit-page.component";
import { AssignmentListComponent } from "./assignments/assignment-list/assignment-list.component";

const appRoutes: Routes = [
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
            { path: 'assignments', component: AssignmentListComponent  }
        ]
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: EditPageComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    { 
        path: 'demo', 
        component: DemoComponent 
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
