/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginFormComponent } from './login-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteTestingModule } from 'src/app/testing/route/route-testing.module';
import { RouterStub } from 'src/app/testing/route/router-stubs';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      declarations: [LoginFormComponent],
      providers: [
        { provide: Router, useClass: RouterStub }

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Passwords must include one increasing straight of at least three letters,
   like abc , cde , fgh , and so on, up to xyz.They cannot skip letters; acd doesn't count.`, () => {
      const testCases = [
        { password: 'qqqabcqqq', result: true },
        { password: 'wwwcdwww', result: false },
        { password: 'cccacdccc', result: false },
        { password: 'qwerty', result: false },
        { password: 'xyzeee', result: true }
      ];
      testCases.forEach(item => {
        expect(component.includesIncreasingLetters(item.password)).toBe(item.result);
      });
    });

  it('Password includes only lowercase characters', () => {
    const testCases = [
      { password: 'qwe4r5ty', result: true },
      { password: 'qWer42ty', result: false }
    ];
    testCases.forEach(item => {
      expect(component.includesOnlyLoverCaseCharacters(item.password)).toBe(item.result);
    });

  });

  it(`Check if the pass includes tricky characters`, () => {
    const testCases = [
      { password: 'qw3iasd', result: true },
      { password: 'qw3Oasd', result: true },
      { password: 'qw3lasd', result: true },
      { password: 'qw3eeasd', result: false },
    ];
    testCases.forEach(item => {
      expect(component.includesTrickyLetters(item.password)).toBe(item.result);
    });
  });
});
