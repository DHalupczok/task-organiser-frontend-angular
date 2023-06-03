import { IProject } from '../../interface';
import { createReducer, on } from '@ngrx/store';
import {
  createNewProjectSuccess,
  deleteProjectSuccess,
  editExistingProjectSuccess,
  fetchAllProjects,
  fetchAllProjectsSuccess,
  projectsApiFailure,
} from './project.actions';

export interface ProjectState {
  projects: IProject[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProjectState = {
  projects: [],
  error: '',
  status: 'pending',
};

export const projectReducer = createReducer(
  initialState,
  on(fetchAllProjects, state => ({ ...state, status: 'loading' })),
  on(fetchAllProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects,
    error: '',
    status: 'success',
  })),
  on(projectsApiFailure, (state, { error }) => ({
    ...state,
    projects: [],
    error,
    status: 'error',
  })),
  on(createNewProjectSuccess, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project],
  })),
  on(editExistingProjectSuccess, (state, { project }) => {
    const newProjects = state.projects.slice();
    const existingProjectIndex = newProjects.findIndex(
      existingProject => existingProject.id === project.id
    );
    newProjects[existingProjectIndex] = project;
    return { ...state, projects: newProjects };
  }),
  on(deleteProjectSuccess, (state, { id }) => ({
    ...state,
    projects: state.projects.filter(project => project.id !== id),
  }))
);
