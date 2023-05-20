import { Component, HostBinding, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExampleComponent } from './components/example/example.component';
import { TileComponent } from './components/shared/tile/tile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgClass, NgForOf, NgIf } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './_app-theme.component.scss'],
  imports: [
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    ExampleComponent,
    TileComponent,
    MatSidenavModule,
    NgForOf,
    NgIf,
    NgClass,
  ],
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  get colorMode() {
    return this.isDarkModeOn ? 'dark-mode' : 'light-mode';
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
