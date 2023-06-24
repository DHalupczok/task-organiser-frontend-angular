import { ProjectState } from './projects/project.reducer';
import { TaskState } from './tasks/task.reducer';
import { TypeState } from './types/type.reducer';
import { UserState } from './users/user.reducer';
import { AuthState } from './auth/auth.reducer';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState {
  projects: ProjectState;
  tasks: TaskState;
  types: TypeState;
  users: UserState;
  auth: AuthState;
}

function localStorageSyncReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}

export const metaReducers: Array<MetaReducer<AppState>> = [
  localStorageSyncReducer,
];
