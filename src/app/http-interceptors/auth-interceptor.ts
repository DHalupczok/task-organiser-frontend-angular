import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { first, switchMap } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';
import { Store } from '@ngrx/store';
import { selectAccessToken } from '../state/auth/auth.selectors';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const urlsWithoutAuthorization = [
    '/api/v1/security/login',
    '/api/v1/security/token',
  ];
  const store = inject(Store);
  const authService = inject(AuthService);
  const urlShouldBeAuthenticated = (req: HttpRequest<any>) => {
    const requestURL = req.url;
    return !urlsWithoutAuthorization.find(urlWithoutAuth =>
      requestURL.includes(urlWithoutAuth)
    );
  };

  if (urlShouldBeAuthenticated(req)) {
    return store.select(selectAccessToken).pipe(
      first(),
      switchMap(accessToken => {
        const authorizedRequest = req.clone({
          setHeaders: { Authorization: `Bearer ${accessToken}` },
        });
        return next(authorizedRequest);
      })
    );
  }

  return next(req);
};
