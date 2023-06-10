import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { TypeState } from './type.reducer';

export const selectTypes = (state: AppState) => state.types;
export const selectAllTypes = createSelector(
  selectTypes,
  (state: TypeState) => state.types
);

export const selectTypesError = createSelector(
  selectTypes,
  (state: TypeState) => state.error
);
export const selectTypesStatus = createSelector(
  selectTypes,
  (state: TypeState) => state.status
);
