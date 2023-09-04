import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatProgressBarModule,
  ProgressBarMode,
} from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-progress-bar-container',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './progress-bar-container.component.html',
  styleUrls: [
    './progress-bar-container.component.scss',
    './_progress-bar-container-theme.component.scss',
  ],
})
export class ProgressBarContainerComponent {
  @Input() label = '';
  @Input() value: number | null = null;
  @Input() unit = '';
  @Input() mode?: ProgressBarMode;
  @Input() color?: ThemePalette;
}
