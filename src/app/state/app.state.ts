import { ProjectState } from './projects/project.reducer';
import { TaskState } from './tasks/task.reducer';
import { TypeState } from './types/type.reducer';
import { UserState } from './users/user.reducer';
import { AuthState } from './auth/auth.reducer';

export interface AppState {
  projects: ProjectState;
  tasks: TaskState;
  types: TypeState;
  users: UserState;
  auth: AuthState;
}
