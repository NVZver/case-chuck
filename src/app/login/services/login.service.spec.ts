/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('Service: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it(`Passwords must include one increasing straight of at least three letters,
   like abc , cde , fgh , and so on, up to xyz.They cannot skip letters; acd doesn't count.`,
    inject([LoginService], (service: LoginService) => {
      const testCases = [
        { password: 'qqqabcqqq', result: true },
        { password: 'wwwcdwww', result: false },
        { password: 'cccacdccc', result: false },
        { password: 'qwerty', result: false },
        { password: 'xyzeee', result: true }
      ];
      testCases.forEach(item => {
        expect(service.includesIncreasingLetters(item.password)).toBe(item.result);
      });
    }));

  it('Password includes only lowercase characters', inject([LoginService], (service: LoginService) => {
    const testCases = [
      { password: 'qwe4r5ty', result: false },
      { password: 'qWer42ty', result: true }
    ];
    testCases.forEach(item => {
      expect(service.includesUpperCaseLetters(item.password)).toBe(item.result);
    });

  }));

  it('Check if the pass includes Non-overlapping characters', inject([LoginService], (service: LoginService) => {
    const testCases = [
      { password: 'qwer', result: false },
      { password: 'qqer', result: true },
      { password: 'qwrr', result: true },
      { password: 'qwwr', result: true },
    ];
    testCases.forEach(item => {
      expect(service.includesNonOverlappingPairs(item.password)).toBe(item.result);
    });
  }));

  it(`Check if the pass includes tricky characters`, inject([LoginService], (service: LoginService) => {
    const testCases = [
      { password: 'qw3iasd', result: true },
      { password: 'qw3Oasd', result: true },
      { password: 'qw3lasd', result: true },
      { password: 'qw3eeasd', result: false },
    ];
    testCases.forEach(item => {
      expect(service.includesTrickyLetters(item.password)).toBe(item.result);
    });
  }));

});
