import { createAction, props } from '@ngrx/store';
import { IType } from '../../interface';

export const fetchAllTypes = createAction(
  '[Main Page] Fetch All Types',
  props<{ projectId: string }>()
);
export const fetchAllTypesSuccess = createAction(
  '[Type API] Fetch All Types Success',
  props<{ types: IType[] }>()
);
export const typeApiFailure = createAction(
  '[Type API] Type API Failure',
  props<{ error: string }>()
);

export const createNewType = createAction(
  '[Main Page] Create New Type',
  props<{ projectType: IType }>()
);

export const createNewTypeSuccess = createAction(
  '[Type API] Create New Type Success',
  props<{ newType: IType }>()
);

export const editExistingType = createAction(
  '[Main Page] Edit Existing Type',
  props<{ editedType: IType }>()
);

export const editExistingTypeSuccess = createAction(
  '[Type API] Edit Existing Type Success',
  props<{ editedType: IType }>()
);

export const deleteType = createAction(
  '[Main Page] Delete Type',
  props<{ id: string }>()
);

export const deleteTypeSuccess = createAction(
  '[Type API] Delete Type Success',
  props<{ id: string }>()
);
