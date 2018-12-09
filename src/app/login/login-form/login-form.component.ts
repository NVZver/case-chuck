import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TRICKY_CHARACTERS, ALPHABET } from 'src/app/login/login-form/constants';
import { ErrorStateMatcher } from '@angular/material';

export class ImmediateErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
  errorMatcher = new ImmediateErrorStateMatcher();

  constructor(
    private router: Router
  ) {
    this.inputUserName = new FormControl('', [
      Validators.required
    ]);
    this.inputPassword = new FormControl('', [
      this.validateIncreasingLetters.bind(this),
      this.validateTrickyLetters.bind(this),
      this.validateOnlyLoverCaseCharacters.bind(this),
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
    // this.router.navigate(['home']);
    console.log(this.inputPassword.errors);
  }

  getControlErrors(formControl: FormControl): string[] {
    const result = [];
    const errors = formControl.errors;
    for (const key in errors) {
      if (errors.hasOwnProperty(key) && key !== 'required') {
        result.push(errors[key]);
      }
    }
    return result;
  }

  validateIncreasingLetters(control: AbstractControl): { [key: string]: any } | null {
    if (control.touched || control.dirty) {
      if (!this.includesIncreasingLetters(control.value)) {
        return {
          'missedIncreasingLetters': 'Your password does not include increasing letters'
        };
      }
    }
    return null;
  }

  validateTrickyLetters(control: AbstractControl): { [key: string]: any } | null {
    if (control.touched || control.dirty) {
      if (this.includesTrickyLetters(control.value)) {
        return {
          'trickyLetters': `Your password includes tricke characters: ${TRICKY_CHARACTERS}`
        };
      }
    }
    return null;
  }

  validateOnlyLoverCaseCharacters(control: AbstractControl): { [key: string]: any } | null {
    if (control.touched || control.dirty) {
      if (this.includesUpperCaseLetters(control.value)) {
        return {
          'upperCaseLetters': `Your password includes charackers in Upper case`
        };
      }
    }
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

  includesUpperCaseLetters(str: string): boolean {
    const regEx = /[A-Z]/g;
    return regEx.test(str);
  }

}
