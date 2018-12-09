/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JokesPageComponent } from './jokes-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { JokesListStubComponent } from 'src/app/jokes/jokes-list/jokes-list-stub.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { JokesStubService } from 'src/app/jokes/services/jokes-stub.service';
import { JokesService } from 'src/app/jokes/services/jokes.service';
import { JokesTestingModule } from 'src/app/jokes/jokes-testing.module';

describe('JokesPageComponent', () => {
  let component: JokesPageComponent;
  let fixture: ComponentFixture<JokesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatSlideToggleModule
      ],
      declarations: [JokesPageComponent, JokesListStubComponent],
      providers: [
        // { provade: JokesService, useClass: JokesStubService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
