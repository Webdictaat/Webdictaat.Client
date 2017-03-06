import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictatenComponent }  from '../dictaten/dictaten.component';
import { DictaatComponent }  from '../dictaat/dictaat.component';
import { EditPageComponent }  from '../pages/edit-page.component';
import { ProfileComponent } from '../profile/profile.component';
import { DemoComponent } from '../demo/demo.component';
import { DirtyGuard } from "../core/security/dirty.guard";


const appRoutes: Routes = [
    { path: '', redirectTo: '/dictaten', pathMatch: 'full' },
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
        canDeactivate: [DirtyGuard],
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'dictaten/:dictaatName/pages/:pageName',
        component: EditPageComponent
    },
    { path: 'demo', component: DemoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
