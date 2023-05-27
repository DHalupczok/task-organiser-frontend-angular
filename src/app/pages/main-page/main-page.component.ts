import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DarkModeService } from '../../services/dark-mode.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, SidebarComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  title = 'task-organiser-frontend-angular';
  sidebarOpened = true;
  projects: string[] = ['Project 1', 'Project 2', 'Project 3'];
  constructor(private darkModeService: DarkModeService) {}
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  toggleDarkMode() {
    console.warn('Toggling dark mode');
    this.darkModeService.toggleDarkMode$.next();
  }
}
