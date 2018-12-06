import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from 'src/app/login/login-page/login-page.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
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
