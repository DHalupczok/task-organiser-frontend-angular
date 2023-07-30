import { createReducer, on } from '@ngrx/store';
import {
  logInSuccess,
  logOutFromAuthApi,
  logOutFromMainPage,
  refreshTokenSuccess,
} from './auth.actions';
import { ITokenResponse } from '../../interface';

export interface AuthState {
  accessToken: string;
  refreshToken: string;
}

export const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
};
export const authReducer = createReducer(
  initialState,
  on(
    logInSuccess,
    refreshTokenSuccess,
    (state, { tokenResponse }): ITokenResponse => ({
      ...state,
      accessToken: tokenResponse.accessToken,
      refreshToken: tokenResponse.refreshToken,
    })
  ),
  on(
    logOutFromMainPage,
    logOutFromAuthApi,
    (state): ITokenResponse => ({ ...state, accessToken: '', refreshToken: '' })
  )
);
