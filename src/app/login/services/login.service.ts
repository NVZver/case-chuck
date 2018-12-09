import { Injectable } from '@angular/core';
import { TRICKY_CHARACTERS, ALPHABET } from 'src/app/login/login-form/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  includesIncreasingLetters(str: string): boolean {
    let result = false;
    const step = 3;
    const rowEnd = str.length - step;
    if (str.length >= 3) {
      for (let i = 0; i <= rowEnd; i++) {
        const subStr = str.slice(i, i + step);
        if (ALPHABET.includes(subStr)) {
          result = true;
          break;
        }
      }
    }
    return result;
  }

  includesTrickyLetters(str: string): boolean {
    let result = false;
    for (let i = 0; i < TRICKY_CHARACTERS.length; i++) {
      if (str.includes(TRICKY_CHARACTERS[i])) {
        result = true;
        break;
      }
    }
    return result;
  }

  includesNonOverlappingPairs(str: string): boolean {
    let result = false;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        result = true;
        break;
      }
    }
    return result;
  }

  includesUpperCaseLetters(str: string): boolean {
    const regEx = /[A-Z]/g;
    return regEx.test(str);
  }
}
