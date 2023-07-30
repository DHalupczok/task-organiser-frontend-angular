import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DarkModeService } from '../../services/dark-mode.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Store } from '@ngrx/store';
import { selectAllProjects } from '../../state/projects/project.selectors';
import {
  selectProject,
  fetchAllProjects,
} from '../../state/projects/project.actions';
import { AppState } from '../../state/app.state';
import {
  selectLogoutTimer,
  selectLogoutTimerStartDate,
} from '../../state/auth/auth.selectors';
import { LogoutTimerComponent } from '../../components/logout-timer/logout-timer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    SidebarComponent,
    LogoutTimerComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  title = 'task-organiser-frontend-angular';
  sidebarOpened = true;
  projects$ = this.store.select(selectAllProjects);
  timerValue$ = this.store.select(selectLogoutTimerStartDate);
  constructor(
    private store: Store<AppState>,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this.store.dispatch(fetchAllProjects());
    this.store.select(selectLogoutTimer).subscribe();
  }
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode$.next();
  }
}
