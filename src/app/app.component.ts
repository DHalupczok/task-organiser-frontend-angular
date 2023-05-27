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
import { RouterOutlet } from '@angular/router';
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
    RouterOutlet,
  ],
})
export class AppComponent {}
