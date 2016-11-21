import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictatenComponent }  from '../dictaten/dictaten.component';
import { DictaatComponent }  from '../dictaat/dictaat.component';
import { EditPageComponent }  from '../pages/edit-page.component';

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
        component: EditPageComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
