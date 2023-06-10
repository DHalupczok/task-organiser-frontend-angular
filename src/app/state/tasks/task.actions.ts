import { createAction, props } from '@ngrx/store';
import { ITask } from '../../interface';

export const fetchAllTasks = createAction(
  '[Main Page] Fetch All Tasks ',
  props<{ projectId: string }>()
);
export const fetchAllTasksSuccess = createAction(
  '[Task API] Fetch All Tasks Success',
  props<{ tasks: ITask[] }>()
);
export const taskApiFailure = createAction(
  '[Task API] Task API Failure',
  props<{ error: string }>()
);

export const createNewTask = createAction(
  '[Main Page] Create New Task',
  props<{ task: ITask }>()
);

export const editExistingTask = createAction(
  '[Main Page] Edit Existing Task',
  props<{ task: ITask }>()
);

export const deleteTask = createAction(
  '[Main Page] Delete Task',
  props<{ id: string }>()
);

export const deleteTaskSuccess = createAction(
  '[Task API] Delete Task Success',
  props<{ id: string }>()
);
