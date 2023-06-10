import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interface';

export const fetchAllUsers = createAction('[Admin Page] Fetch All Users');
export const fetchAllUsersSuccess = createAction(
  '[User API] Fetch All Users Success',
  props<{ users: IUser[] }>()
);
export const userApiFailure = createAction(
  '[User API] User API Failure',
  props<{ error: string }>()
);

export const createNewUser = createAction(
  '[Register Page] Create New User',
  props<{ user: IUser }>()
);

export const createNewUserSuccess = createAction(
  '[User API] Create New User Success',
  props<{ user: IUser }>()
);

export const editExistingUser = createAction(
  '[User Details Page] Edit Existing User',
  props<{ user: IUser }>()
);

export const editExistingUserSuccess = createAction(
  '[User API] Edit Existing User Success',
  props<{ user: IUser }>()
);

export const deleteUser = createAction(
  '[Admin Page] Delete User',
  props<{ id: string }>()
);

export const deleteUserSuccess = createAction(
  '[User API] Delete User Success',
  props<{ id: string }>()
);
