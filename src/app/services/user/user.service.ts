import { Injectable } from '@angular/core';
import { User } from 'src/app/services/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  private _user: User = { name: 'Anonymous' };

  constructor() { }

}
