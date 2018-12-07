import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesPageComponent } from './jokes-page/jokes-page.component';
import { JokesService } from 'src/app/jokes/services/jokes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JokesPageComponent
  ],
  exports: [
    JokesPageComponent
  ],
  providers: [
    JokesService
  ]
})
export class JokesModule { }
