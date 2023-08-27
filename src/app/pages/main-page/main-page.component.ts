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

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    SidebarComponent,
    LogoutTimerComponent,
    UserAvatarComponent,
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
  constructor(
    private store: Store<AppState>,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this.store.dispatch(fetchAllProjects());
  }
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode$.next();
  }
}
