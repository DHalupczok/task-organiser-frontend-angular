import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import jwtDecode from 'jwt-decode';
import { IDecodedToken } from '../../interface';
import { createEffect } from '@ngrx/effects';
import { environment } from '../../../environments/environment';
import { timer } from 'rxjs';

export const selectAuth = (state: AppState) => state.auth;

export const selectAccessToken = createSelector(
  selectAuth,
  (state: AuthState) => state.accessToken
);
export const selectRefreshToken = createSelector(
  selectAuth,
  (state: AuthState) => state.refreshToken
);
export const selectDecodedAccessToken = createSelector(
  selectAuth,
  (state: AuthState) => {
    try {
      return jwtDecode<IDecodedToken>(state.accessToken);
    } catch (e) {
      return {
        id: '',
        email: '',
        name: '',
        surname: '',
        imageName: '',
        iat: '',
        exp: '',
      } as unknown as IDecodedToken;
    }
  }
);
export const selectDecodedRefreshToken = createSelector(
  selectAuth,
  (state: AuthState) => {
    try {
      return jwtDecode<IDecodedToken>(state.refreshToken);
    } catch (e) {
      return {
        id: '',
        email: '',
        name: '',
        surname: '',
        imageName: '',
        iat: '',
        exp: '',
      } as unknown as IDecodedToken;
    }
  }
);
export const selectRefreshTokenExpirationDate = createSelector(
  selectDecodedRefreshToken,
  (state: IDecodedToken) => new Date(state.exp * 1000)
);
export const selectLoggedUserId = createSelector(
  selectDecodedAccessToken,
  (state: IDecodedToken) => state.id
);
export const selectLoggedUserEmail = createSelector(
  selectDecodedAccessToken,
  (state: IDecodedToken) => state.email
);
export const selectLoggedUserName = createSelector(
  selectDecodedAccessToken,
  (state: IDecodedToken) => state.name
);
export const selectLoggedUserSurname = createSelector(
  selectDecodedAccessToken,
  (state: IDecodedToken) => state.surname
);
export const selectLoggedUserNameAndSurname = createSelector(
  selectLoggedUserName,
  selectLoggedUserSurname,
  (name, surname) => `${name} ${surname}`
);

export const selectLoggedUserImageName = createSelector(
  selectDecodedAccessToken,
  (state: IDecodedToken) => state.imageName
);

export const selectLogoutTimerStartDate = createSelector(
  selectDecodedRefreshToken,
  (state: IDecodedToken) => {
    console.warn(environment.logoutTimerVisibilityTime, state.exp);
    return new Date(
      state.exp * 1000 - environment.logoutTimerVisibilityTime * 1000
    );
  }
);
