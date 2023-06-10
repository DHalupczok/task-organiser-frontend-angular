import { IUser, TStatus } from '../../interface';
import { createReducer, on } from '@ngrx/store';
import {
  createNewUserSuccess,
  deleteUserSuccess,
  editExistingUserSuccess,
  fetchAllUsers,
  fetchAllUsersSuccess,
  userApiFailure,
} from './user.actions';

export interface UserState {
  users: IUser[];
  error: string;
  status: TStatus;
}

export const initialState: UserState = {
  users: [],
  error: '',
  status: 'pending',
};

export const userReducer = createReducer(
  initialState,
  on(fetchAllUsers, (state): UserState => ({ ...state, status: 'loading' })),
  on(
    fetchAllUsersSuccess,
    (state, { users }): UserState => ({
      ...state,
      users,
      error: '',
      status: 'success',
    })
  ),
  on(
    userApiFailure,
    (state, { error }): UserState => ({
      ...state,
      error,
      status: 'error',
    })
  ),
  on(
    createNewUserSuccess,
    (state, { user }): UserState => ({
      ...state,
      users: [...state.users, user],
    })
  ),
  on(editExistingUserSuccess, (state, { user }): UserState => {
    const previousUsers = state.users.slice();
    const editedUserIndex = previousUsers.findIndex(
      previousUser => previousUser.id === user.id
    );
    previousUsers[editedUserIndex] = user;
    return {
      ...state,
      users: [...previousUsers],
    };
  }),
  on(
    deleteUserSuccess,
    (state, { id }): UserState => ({
      ...state,
      users: state.users.filter(user => user.id !== id),
    })
  )
);
