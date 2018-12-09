import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from 'src/app/login/login-page/login-page.component';
import { HomePageComponent } from 'src/app/home/home-page/home-page.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'home',
        // loadChildren: 'app/home/home.module#HomeModule'
        component: HomePageComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
