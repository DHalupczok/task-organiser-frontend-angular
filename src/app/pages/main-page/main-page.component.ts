import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DarkModeService } from '../../services/dark-mode.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { Store } from '@ngrx/store';
import { ProjectState } from '../../state/projects/project.reducer';
import { selectAllProjects } from '../../state/projects/project.selectors';
import { tap } from 'rxjs';
import { fetchAllProjects } from '../../state/projects/project.actions';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, SidebarComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  title = 'task-organiser-frontend-angular';
  sidebarOpened = true;
  projects$ = this.store.select(selectAllProjects);
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
