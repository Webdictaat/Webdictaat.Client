import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from '../shared/page/page.component';
import { ProcessTokenComponent } from '../shared/core/process-token.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
    {
        path: 'process-token',
        component: ProcessTokenComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: ':pageName',
        component: PageComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
