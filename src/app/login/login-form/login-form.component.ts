import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  formLogin: FormGroup;
  inputUserName: FormControl;
  inputPassword: FormControl;

  constructor() {
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

  }

  validatePassword(control: AbstractControl): { [key: string]: any } | null {
    return null;
  }

}
