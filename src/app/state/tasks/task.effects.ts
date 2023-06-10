import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TasksService } from '../../services/tasks-service/tasks.service';
import {
  createNewTask,
  deleteTask,
  deleteTaskSuccess,
  editExistingTask,
  fetchAllTasks,
  fetchAllTasksSuccess,
  tasksApiFailure,
} from './task.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class TaskEffects {
  fetchAllTasksByProjectId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchAllTasks),
      switchMap(({ projectId }) =>
        this.taskService.getAll(projectId).pipe(
          map(tasks => fetchAllTasksSuccess({ tasks })),
          catchError(error => of({ type: tasksApiFailure.type, error }))
        )
      )
    );
  });
  createNewTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createNewTask),
      switchMap(({ task }) =>
        this.taskService.createNew(task).pipe(
          map(tasks => fetchAllTasksSuccess({ tasks })),
          catchError(error => of({ type: tasksApiFailure.type, error }))
        )
      )
    );
  });
  editExistingTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editExistingTask),
      switchMap(({ task }) =>
        this.taskService.editExisting(task).pipe(
          map(tasks => fetchAllTasksSuccess({ tasks })),
          catchError(error => of({ type: error.type, error }))
        )
      )
    );
  });
  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTask),
      switchMap(({ id }) =>
        this.taskService.delete(id).pipe(
          map(() => deleteTaskSuccess({ id })),
          catchError(error => of({ type: error.type, error }))
        )
      )
    );
  });
  constructor(private actions$: Actions, private taskService: TasksService) {}
}
