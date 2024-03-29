import { ERepeatability, ITask, TStatus } from '../../interface';
import { createReducer, on } from '@ngrx/store';
import {
  changeRepeatability,
  deleteTaskSuccess,
  fetchAllTasks,
  fetchAllTasksSuccess,
  taskApiFailure,
} from './task.actions';

export interface TaskState {
  tasks: ITask[];
  error: string;
  status: TStatus;
  selectedRepeatability: ERepeatability;
}

export const initialState: TaskState = {
  tasks: [],
  error: '',
  status: 'pending',
  selectedRepeatability: 1,
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
    taskApiFailure,
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
  ),
  on(changeRepeatability, (state, { selectedRepeatability }) => ({
    ...state,
    selectedRepeatability,
  }))
);
