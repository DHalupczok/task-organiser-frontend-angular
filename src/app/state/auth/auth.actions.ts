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

export const refreshTokenFromAuthInterceptor = createAction(
  '[Auth Interceptor] Refresh Token'
);
export const refreshTokenFromLogoutTimer = createAction(
  '[Logout Timer] Refresh Token'
);
export const refreshTokenSuccess = createAction(
  '[Auth API] Refresh Token Success',
  props<{ tokenResponse: ITokenResponse }>()
);

export const authGuardLogOut = createAction('[Auth Guard] Logout');
export const logOutFromMainPage = createAction('[Main Page] Logout');
export const logOutFromAuthApi = createAction('[Auth API] Logout');
export const logOutFromLogoutTimer = createAction('[Logout Timer] Logout');
