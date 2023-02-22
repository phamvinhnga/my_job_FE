import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel, CurrentUserOutputModel, UserSignInOutputModel } from '../model/auth.model';

let _prefix = `${environment.base_url}/api`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser:CurrentUserOutputModel | undefined;
  
  private readonly ACCESS_TOKEN_KEY = 'access_token';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router:Router
  ) { }

  get currentUser() : CurrentUserOutputModel | undefined{
    return _.cloneDeep(this._currentUser)
  }

  signIn(input:AuthModel): Observable<UserSignInOutputModel> {
    return this.httpClient.post(`${_prefix}/auth/sign-in`, input).pipe(
      map(m => {
        return UserSignInOutputModel.fromJS(m);
      })
    );
  }

  getCurrentUser() {
    if(!this.isAuthenticated()){
      this.router.navigateByUrl('admin');
      return;
    }
    (this.httpClient.get(`${_prefix}/auth/current-user`, {}).pipe(
      map(m => {
        return CurrentUserOutputModel.fromJS(m);
      })
    )).subscribe(res => {
      this._currentUser = res;
    });
  }

  saveToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  deleteToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }
}
