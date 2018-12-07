import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesPageComponent } from './jokes-page/jokes-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JokesPageComponent
  ],
  exports: [
    JokesPageComponent
  ]
})
export class JokesModule { }
