import { ProjectState } from './projects/project.reducer';
import { TaskState } from './tasks/task.reducer';

export interface AppState {
  projects: ProjectState;
  tasks: TaskState;
}
