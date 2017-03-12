import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictatenComponent }  from '../shared/dictaten/dictaten.component';
import { DictaatComponent }  from '../shared/dictaat/dictaat.component';
import { EditPageComponent }  from '../shared/pages/edit-page.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { DemoComponent } from '../shared/demo/demo.component';
import { DirtyGuard } from "../shared/core/security/dirty.guard";


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
        component: DictaatComponent
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: EditPageComponent,
        canDeactivate: [DirtyGuard], //EditPageComponent implements the DirtyComponent interface
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: EditPageComponent
    },
    { 
        path: 'demo', 
        component: DemoComponent 
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
