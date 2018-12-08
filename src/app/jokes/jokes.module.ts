import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { JokesPageComponent } from './jokes-page/jokes-page.component';
import { JokesListComponent } from './jokes-list/jokes-list.component';
import { JokesService } from 'src/app/jokes/services/jokes.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  declarations: [
    JokesPageComponent,
    JokesListComponent
  ],
  exports: [
    JokesPageComponent
  ],
  providers: [
    JokesService
  ]
})
export class JokesModule { }
