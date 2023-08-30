import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss', './_tile-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  @Input() mainContentText: string | null = '';
  @Input() mainContentClassList: string | string[] = '';
  @Input() subContentText: string | null = '';
  @Input() subContentClassList: string | string[] = '';
  @Input() signatureText: string | null = '';
  @Input() signatureClassList: string | string[] = '';
}
