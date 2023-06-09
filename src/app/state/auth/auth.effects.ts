import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import {
  logIn,
  logInSuccess,
  refreshToken,
  refreshTokenSuccess,
} from './auth.actions';
import { map, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

export const logIn$ = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService)) => {
    return action$.pipe(
      ofType(logIn),
      switchMap(({ loginCredentials }) => authService.logIn$(loginCredentials)),
      map(tokenResponse => logInSuccess({ tokenResponse }))
    );
  },
  { functional: true }
);
export const refreshToken$ = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService)) => {
    return action$.pipe(
      ofType(refreshToken),
      switchMap(refreshToken => authService.getNewToken$(refreshToken)),
      map(tokenResponse => refreshTokenSuccess({ tokenResponse }))
    );
  },
  { functional: true }
);
export const redirectAfterLogin = createEffect(
  (action$ = inject(Actions), router = inject(Router)) => {
    return action$.pipe(
      ofType(logInSuccess),
      tap(tokens => console.warn(tokens)),
      tap(() => router.navigate(['/']))
    );
  },
  { functional: true, dispatch: false }
);
