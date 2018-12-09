import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { JokesModule } from 'src/app/jokes/jokes.module';
import { ToolbarModule } from 'src/app/toolbar/toolbar.module';

@NgModule({
    imports: [
        CommonModule,
        JokesModule,
        ToolbarModule
    ],
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ]
})
export class HomeModule { }
