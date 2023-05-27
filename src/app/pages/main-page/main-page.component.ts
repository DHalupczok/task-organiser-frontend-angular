import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @HostBinding('class')
  get colorMode() {
    return this.isDarkModeOn ? 'dark-mode' : '';
  }
  isDarkModeOn = false;
  title = 'task-organiser-frontend-angular';
  sidebarOpened = true;
  projects: string[] = ['Project 1', 'Project 2', 'Project 3'];

  ngOnInit() {
    this.isDarkModeOn = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  toggleDarkMode() {
    console.warn('Toggling dark mode');
    this.isDarkModeOn = !this.isDarkModeOn;
  }
}
