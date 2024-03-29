import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DarkModeService } from '../../services/dark-mode.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Store } from '@ngrx/store';
import { selectAllProjects } from '../../state/projects/project.selectors';
import { fetchAllProjects } from '../../state/projects/project.actions';
import { AppState } from '../../state/app.state';
import {
  selectLoggedUserImageName,
  selectLoggedUserNameAndSurname,
} from '../../state/auth/auth.selectors';
import { LogoutTimerComponent } from '../../components/logout-timer/logout-timer.component';
import { UserAvatarComponent } from '../../components/user-avatar/user-avatar.component';
import {
  selectAllUrgentTasks,
  selectProgress,
  selectTasksDoneQuantityByRepeatability,
  selectTasksToBeDoneQuantityByRepeatability,
} from '../../state/tasks/task.selectors';
import { TileComponent } from '../../components/shared/tile/tile.component';
import { fetchAllTasks } from '../../state/tasks/task.actions';
import { ProgressBarContainerComponent } from '../../components/shared/progress-bar-container/progress-bar-container.component';
import { TasksListComponent } from '../../components/shared/tasks-list/tasks-list.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    SidebarComponent,
    LogoutTimerComponent,
    UserAvatarComponent,
    TileComponent,
    ProgressBarContainerComponent,
    TasksListComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  title = 'task-organiser-frontend-angular';
  projects$ = this.store.select(selectAllProjects);
  userNameSurname$ = this.store.select(selectLoggedUserNameAndSurname);
  userImageName$ = this.store.select(selectLoggedUserImageName);
  toDoTask$ = this.store.select(selectTasksToBeDoneQuantityByRepeatability);
  doneTask$ = this.store.select(selectTasksDoneQuantityByRepeatability);
  progres$ = this.store.select(selectProgress);
  // hurryUp$ = this.store.select(selectAllUrgentTasks);
  hurryUp$ = of([
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
    {
      id: '9',
      projectId: '1',
      typeId: '1',
      title: 'Daily meeting',
      startDate: new Date(2023, 2, 1, 9, 0),
      stopDate: new Date(2023, 8, 3, 21, 30),
      repeatability: 1,
      content: 'daily of our team',
      isDone: true,
    },
  ]);
  constructor(
    private store: Store<AppState>,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this.store.dispatch(fetchAllProjects());
    this.store.dispatch(fetchAllTasks({ projectId: '1' }));
  }
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode$.next();
  }
}
