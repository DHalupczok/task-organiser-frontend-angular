import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IProject } from '../../interface';
import { UtilsService } from '../../services/utils/utils.service';
import { Store } from '@ngrx/store';
import { selectProject } from '../../state/projects/project.actions';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() projects: IProject[] = [];
  isOpen = false;
  trackById = this.utilsService.trackById;
  constructor(private utilsService: UtilsService, private store: Store) {}
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  selectProject(project: IProject) {
    this.store.dispatch(selectProject(project));
  }
}
