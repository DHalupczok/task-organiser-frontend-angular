import { ITask, TStatus } from '../../interface';
import { createReducer, on } from '@ngrx/store';
import {
  deleteTaskSuccess,
  fetchAllTasks,
  fetchAllTasksSuccess,
  tasksApiFailure,
} from './task.actions';

export interface TaskState {
  tasks: ITask[];
  error: string;
  status: TStatus;
}

export const initialState: TaskState = {
  tasks: [],
  error: '',
  status: 'pending',
};

export const taskReducer = createReducer(
  initialState,
  on(fetchAllTasks, (state): TaskState => ({ ...state, status: 'loading' })),
  on(
    fetchAllTasksSuccess,
    (state, { tasks }): TaskState => ({
      ...state,
      tasks,
      error: '',
      status: 'success',
    })
  ),
  on(
    tasksApiFailure,
    (state, { error }): TaskState => ({
      ...state,
      error,
      status: 'error',
    })
  ),
  on(
    deleteTaskSuccess,
    (state, { id }): TaskState => ({
      ...state,
      tasks: state.tasks.filter(task => task.id !== id),
    })
  )
);
