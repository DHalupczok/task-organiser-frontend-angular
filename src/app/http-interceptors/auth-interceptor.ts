import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, first, switchMap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAccessToken } from '../state/auth/auth.selectors';
import {
  refreshTokenFromAuthInterceptor,
  refreshTokenSuccess,
} from '../state/auth/auth.actions';

import { Actions, ofType } from '@ngrx/effects';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const urlsWithoutAuthorization = [
    '/api/v1/security/login',
    '/api/v1/security/token',
  ];
  const action$ = inject(Actions);
  const store = inject(Store);
  const urlShouldBeAuthenticated = (req: HttpRequest<any>) => {
    const requestURL = req.url;
    return !urlsWithoutAuthorization.find(urlWithoutAuth =>
      requestURL.includes(urlWithoutAuth)
    );
  };
  const handle401Error: HttpInterceptorFn = (req: HttpRequest<any>, next) => {
    store.dispatch(refreshTokenFromAuthInterceptor());
    return action$.pipe(
      ofType(refreshTokenSuccess),
      switchMap(() => store.select(selectAccessToken)),
      switchMap(refreshedAccessToken => {
        const authorizedRequest = addAccessToken(req, refreshedAccessToken);
        return next(authorizedRequest);
      })
    );
  };
  const addAccessToken = (req: HttpRequest<any>, accessToken: string) => {
    return req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` },
    });
  };

  if (urlShouldBeAuthenticated(req)) {
    return store.select(selectAccessToken).pipe(
      first(),
      switchMap(accessToken => {
        const authorizedRequest = addAccessToken(req, accessToken);
        return next(authorizedRequest).pipe(
          catchError(err => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
              return handle401Error(req, next);
            }
            return throwError(() => err);
          })
        );
      })
    );
  }

  return next(req);
};
