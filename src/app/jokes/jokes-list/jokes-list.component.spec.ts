/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JokesListComponent } from './jokes-list.component';

describe('JokesListComponent', () => {
  let component: JokesListComponent;
  let fixture: ComponentFixture<JokesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
