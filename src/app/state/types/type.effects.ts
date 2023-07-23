import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { TypesService } from '../../services/types-service/types.service';
import {
  createNewType,
  createNewTypeSuccess,
  deleteType,
  deleteTypeSuccess,
  editExistingType,
  editExistingTypeSuccess,
  fetchAllTypes,
  fetchAllTypesSuccess,
  typeApiFailure,
} from './type.actions';
import { catchError, map, switchMap, of } from 'rxjs';

export const fetchAllTypesByProjectId$ = createEffect(
  (action$ = inject(Actions), typesService$ = inject(TypesService)) => {
    return action$.pipe(
      ofType(fetchAllTypes),
      switchMap(({ projectId }) => typesService$.getAll(projectId)),
      map(types => fetchAllTypesSuccess({ types })),
      catchError(error => {
        return of({ type: typeApiFailure.type, error });
      })
    );
  },
  { functional: true }
);

export const createNewType$ = createEffect(
  (action$ = inject(Actions), typesService = inject(TypesService)) => {
    return action$.pipe(
      ofType(createNewType),
      switchMap(({ projectType }) => typesService.createNew(projectType)),
      map(newType => createNewTypeSuccess({ newType })),
      catchError(error => of({ type: typeApiFailure.type, error }))
    );
  },
  { functional: true }
);

export const editExistingType$ = createEffect(
  (action$ = inject(Actions), typesService = inject(TypesService)) => {
    return action$.pipe(
      ofType(editExistingType),
      switchMap(({ editedType }) => typesService.editExisting(editedType)),
      map(editedType => editExistingTypeSuccess({ editedType })),
      catchError(error => of({ type: typeApiFailure.type, error }))
    );
  },
  { functional: true }
);

export const deleteType$ = createEffect(
  (action$ = inject(Actions), typesService = inject(TypesService)) => {
    return action$.pipe(
      ofType(deleteType),
      switchMap(({ id }) =>
        typesService.delete(id).pipe(
          map(() => deleteTypeSuccess({ id })),
          catchError(error => of({ type: error.type, error }))
        )
      )
    );
  },
  { functional: true }
);
