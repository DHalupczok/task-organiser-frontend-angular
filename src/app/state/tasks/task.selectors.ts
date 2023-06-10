import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTasks = (state: AppState) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TaskState) => state.tasks
);

export const selectTasksError = createSelector(
  selectTasks,
  (state: TaskState) => state.error
);
export const selectTasksStatus = createSelector(
  selectTasks,
  (state: TaskState) => state.status
);
