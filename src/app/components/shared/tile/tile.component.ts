import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input() mainContentText = '';
  @Input() mainContentClassList: string | string[] = '';
  @Input() subContentText = '';
  @Input() subContentClassList: string | string[] = '';
  @Input() signatureText = '';
  @Input() signatureClassList: string | string[] = '';
}
