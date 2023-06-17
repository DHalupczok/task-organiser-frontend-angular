import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import jwtDecode from 'jwt-decode';
import { IDecodedToken } from '../../interface';

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
  (state: AuthState) => jwtDecode<IDecodedToken>(state.accessToken)
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
