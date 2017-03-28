import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class LoginService {

  constructor(
    private _tokenService: Angular2TokenService,
    public router: Router
  ) { }

  checkLogin() {
    if (this._tokenService.currentUserData != null) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  doLogin(data) {
    return this._tokenService
      .signIn({
        email: data.email,
        password: data.password,
        userType: 'ADMIN'
      });
  };
}
