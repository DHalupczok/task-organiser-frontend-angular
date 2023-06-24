import { createAction, props } from '@ngrx/store';
import { ILoginCredentials, ITokenResponse } from '../../interface';

export const logIn = createAction(
  '[Login Page] Login',
  props<{ loginCredentials: ILoginCredentials }>()
);
export const logInSuccess = createAction(
  '[Auth API] Login Success',
  props<{ tokenResponse: ITokenResponse }>()
);

export const refreshToken = createAction(
  '[Auth Interceptor] Refresh Token',
  props<{ refreshToken: string }>()
);
export const refreshTokenSuccess = createAction(
  '[Auth API] Refresh Token Success',
  props<{ tokenResponse: ITokenResponse }>()
);

export const authGuardLogOut = createAction('[Auth Guard] Logout');
export const logOut = createAction('[Main Page] Logout');
