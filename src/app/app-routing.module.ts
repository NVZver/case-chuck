import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from 'src/app/login/login-page/login-page.component';
import { JokesPageComponent } from 'src/app/jokes/jokes-page/jokes-page.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'jokes',
        component: JokesPageComponent
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
