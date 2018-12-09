/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { RouteTestingModule } from 'src/app/testing/route/route-testing.module';
import { ToolbarTestingModule } from 'src/app/toolbar/toolbar-testing.module';
import { JokesTestingModule } from 'src/app/jokes/jokes-testing.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToolbarTestingModule,
        JokesTestingModule,
        RouteTestingModule
      ],
      declarations: [HomePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
