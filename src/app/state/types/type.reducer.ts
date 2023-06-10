import { IType, TStatus } from '../../interface';
import { createReducer, on } from '@ngrx/store';
import {
  createNewTypeSuccess,
  deleteTypeSuccess,
  editExistingTypeSuccess,
  fetchAllTypes,
  fetchAllTypesSuccess,
  typeApiFailure,
} from './type.actions';

export interface TypeState {
  types: IType[];
  error: string;
  status: TStatus;
}

export const initialState: TypeState = {
  types: [],
  error: '',
  status: 'pending',
};

export const typeReducer = createReducer(
  initialState,
  on(fetchAllTypes, (state): TypeState => ({ ...state, status: 'loading' })),
  on(
    fetchAllTypesSuccess,
    (state, { types }): TypeState => ({
      ...state,
      types,
      error: '',
      status: 'success',
    })
  ),
  on(
    typeApiFailure,
    (state, { error }): TypeState => ({
      ...state,
      error,
      status: 'error',
    })
  ),
  on(
    createNewTypeSuccess,
    (state, { newType }): TypeState => ({
      ...state,
      types: [...state.types, newType],
    })
  ),
  on(editExistingTypeSuccess, (state, { editedType }): TypeState => {
    const previousTypes = state.types.slice();
    const editedTypeIndex = previousTypes.findIndex(
      type => type.id === editedType.id
    );
    previousTypes[editedTypeIndex] = editedType;
    return {
      ...state,
      types: [...previousTypes],
    };
  }),
  on(
    deleteTypeSuccess,
    (state, { id }): TypeState => ({
      ...state,
      types: state.types.filter(type => type.id !== id),
    })
  )
);
