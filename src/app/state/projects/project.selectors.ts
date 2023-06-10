import { AppState } from '../app.state';
import { ProjectState } from './project.reducer';
import { createSelector } from '@ngrx/store';

export const selectProjects = (state: AppState) => state.projects;
export const selectAllProjects = createSelector(
  selectProjects,
  (state: ProjectState) => state.projects
);
export const selectProjectsError = createSelector(
  selectProjects,
  (state: ProjectState) => state.error
);
export const selectProjectsStatus = createSelector(
  selectProjects,
  (state: ProjectState) => state.status
);
export const selectSelectedProject = createSelector(
  selectProjects,
  (state: ProjectState) => state.projects.filter(project => project.isSelected)
);
