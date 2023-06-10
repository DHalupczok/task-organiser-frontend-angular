import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { UsersService } from '../../services/users/users.service';
import {
  createNewUser,
  createNewUserSuccess,
  deleteUser,
  deleteUserSuccess,
  editExistingUser,
  editExistingUserSuccess,
  fetchAllUsers,
  fetchAllUsersSuccess,
  userApiFailure,
} from './user.actions';

export const fetchAllUsers$ = createEffect(
  (action$ = inject(Actions), userService = inject(UsersService)) => {
    return action$.pipe(
      ofType(fetchAllUsers),
      switchMap(() => userService.getAll()),
      map(users => fetchAllUsersSuccess({ users })),
      catchError(error => of({ type: userApiFailure.type, error }))
    );
  },
  { functional: true }
);

export const createNewUser$ = createEffect(
  (action$ = inject(Actions), usersService = inject(UsersService)) => {
    return action$.pipe(
      ofType(createNewUser),
      switchMap(({ user }) => usersService.createNew(user)),
      map(user => createNewUserSuccess({ user })),
      catchError(error => of({ type: userApiFailure.type, error }))
    );
  },
  { functional: true }
);

export const editExistingUser$ = createEffect(
  (action$ = inject(Actions), usersService = inject(UsersService)) => {
    return action$.pipe(
      ofType(editExistingUser),
      switchMap(({ user }) => usersService.editExisting(user)),
      map(user => editExistingUserSuccess({ user })),
      catchError(error => of({ type: userApiFailure.type, error }))
    );
  },
  { functional: true }
);

export const deleteUser$ = createEffect(
  (action$ = inject(Actions), usersService = inject(UsersService)) => {
    return action$.pipe(
      ofType(deleteUser),
      switchMap(({ id }) =>
        usersService.delete(id).pipe(
          map(() => deleteUserSuccess({ id })),
          catchError(error => of({ type: error.type, error }))
        )
      )
    );
  },
  { functional: true }
);
