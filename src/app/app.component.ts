import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExampleComponent } from './components/example/example.component';
import { TileComponent } from './components/shared/tile/tile.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    ExampleComponent,
    TileComponent,
  ],
})
export class AppComponent {
  title = 'task-organiser-frontend-angular';
}
