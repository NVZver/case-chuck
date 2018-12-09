import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  formLogin: FormGroup;
  inputUserName: FormControl;
  inputPassword: FormControl;

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

}
