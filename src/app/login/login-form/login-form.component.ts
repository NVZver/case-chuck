import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { TRICKY_CHARACTERS, ALPHABET } from 'src/app/login/login-form/constants';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  formLogin: FormGroup;
  inputUserName: FormControl;
  inputPassword: FormControl;
  maxPasswordLength = 32;

  constructor(
    private router: Router
  ) {
    this.inputUserName = new FormControl('', [
      Validators.required
    ]);
    this.inputPassword = new FormControl('', [
      this.validatePassword,
      Validators.required
    ]);
    this.formLogin = new FormGroup({
      'userName': this.inputUserName,
      'password': this.inputPassword
    });
  }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['home']);
  }

  validatePassword(control: AbstractControl): { [key: string]: any } | null {
    return null;
  }

  includesIncreasingLetters(str: string): boolean {
    let result = false;
    const step = 3;
    for (let i = 0; i < str.length - step; i++) {
      const subStr = str.slice(i, i + step);
      if (ALPHABET.includes(subStr)) {
        result = true;
        break;
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

    return false;
  }

  includesOnlyLoverCaseCharacters(str: string): boolean {
    const regEx = /[A-Z]/g;
    return regEx.test(str) === false;
  }

}
