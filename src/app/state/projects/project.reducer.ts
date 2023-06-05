import { IProject } from '../../interface';
import { createReducer, on } from '@ngrx/store';
import {
  deleteProjectSuccess,
  fetchAllProjects,
  fetchAllProjectsSuccess,
  projectsApiFailure,
  selectProject,
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
  on(
    fetchAllProjects,
    (state): ProjectState => ({ ...state, status: 'loading' })
  ),
  on(
    fetchAllProjectsSuccess,
    (state, { projects }): ProjectState => ({
      ...state,
      projects,
      error: '',
      status: 'success',
    })
  ),
  on(
    selectProject,
    (state, { id }): ProjectState => ({
      ...state,
      projects: state.projects.map(el => ({ ...el, isSelected: el.id === id })),
    })
  ),
  on(
    projectsApiFailure,
    (state, { error }): ProjectState => ({
      ...state,
      projects: [],
      error,
      status: 'error',
    })
  ),
  on(
    deleteProjectSuccess,
    (state, { id }): ProjectState => ({
      ...state,
      projects: state.projects.filter(project => project.id !== id),
    })
  )
);
