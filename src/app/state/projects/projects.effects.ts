import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectService } from '../../services/project-service/project.service';
import {
  fetchAllProjects,
  fetchAllProjectsSuccess,
  projectsApiFailure,
} from './project.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

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
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
