import { createAction, props } from '@ngrx/store';
import { IProject } from '../../interface';

export const fetchAllProjects = createAction('[Main Page] Fetch All Projects');
export const fetchAllProjectsSuccess = createAction(
  '[Project API] Fetch All Projects Success',
  props<{ projects: IProject[] }>()
);
export const selectProject = createAction(
  '[Main page] Select Project',
  props<{ id: string }>()
);
export const projectsApiFailure = createAction(
  '[Project API] Project API Failure',
  props<{ error: string }>()
);
export const createNewProject = createAction(
  '[Main Page] Create New Project',
  props<{ project: IProject }>()
);
export const editExistingProject = createAction(
  '[Main Page] Edit Existing Project',
  props<{ project: IProject }>()
);

export const deleteProject = createAction(
  '[Main Page] Delete Project',
  props<{ id: string }>()
);

export const deleteProjectSuccess = createAction(
  '[Project API] Delete Project Success',
  props<{ id: string }>()
);
