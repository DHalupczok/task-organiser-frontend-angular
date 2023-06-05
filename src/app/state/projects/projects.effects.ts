import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectService } from '../../services/project-service/project.service';
import {
  fetchAllProjects,
  fetchAllProjectsSuccess,
  projectsApiFailure,
  createNewProject,
  editExistingProject,
  deleteProject,
  deleteProjectSuccess,
} from './project.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ProjectsEffects {
  fetchAllProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchAllProjects),
      switchMap(() =>
        this.projectService.getAll().pipe(
          map(projects => fetchAllProjectsSuccess({ projects })),
          catchError(error => of({ type: projectsApiFailure.type, error }))
        )
      )
    );
  });
  addNewProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createNewProject),
      switchMap(({ project }) =>
        this.projectService.createNew(project).pipe(
          map(projects => fetchAllProjectsSuccess({ projects })),
          catchError(error => of({ type: projectsApiFailure.type, error }))
        )
      )
    );
  });
  editExistingProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editExistingProject),
      switchMap(({ project }) =>
        this.projectService.editExisting(project).pipe(
          map(projects => fetchAllProjectsSuccess({ projects })),
          catchError(error => of({ type: projectsApiFailure.type, error }))
        )
      )
    );
  });
  deleteProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteProject),
      switchMap(({ id }) =>
        this.projectService.delete(id).pipe(
          map(() => deleteProjectSuccess({ id })),
          catchError(error => of({ type: projectsApiFailure.type, error }))
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
