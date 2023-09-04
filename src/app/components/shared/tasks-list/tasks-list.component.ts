import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '../../../interface';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, TileComponent],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  @Input() tasks: ITask[] = [];
}
