import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginCredentials, ITokenResponse } from '../../interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  logIn$(loginCredentials: ILoginCredentials) {
    return this.http.post<ITokenResponse>(
      `${environment.apiURL}/security/login`,
      loginCredentials
    );
  }
  getNewToken$(refreshToken: { refreshToken: string }) {
    return this.http.post<ITokenResponse>(
      `${environment.apiURL}/security/token`,
      refreshToken
    );
  }
}
