import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILoginCredentials, ITokenResponse } from '../../interface';
import { environment } from '../../../environments/environment';
import { catchError, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { logOutFromAuthApi } from '../../state/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {}

  logIn$(loginCredentials: ILoginCredentials) {
    return this.http.post<ITokenResponse>(
      `${environment.apiURL}/security/login`,
      loginCredentials
    );
  }
  getNewToken$(refreshToken: { refreshToken: string }) {
    return this.http
      .post<ITokenResponse>(
        `${environment.apiURL}/security/token`,
        refreshToken
      )
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.store.dispatch(logOutFromAuthApi());
          }
          return throwError(() => err);
        })
      );
  }
}
