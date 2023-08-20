import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IProject } from '../../interface';
import { UtilsService } from '../../services/utils/utils.service';
import { Store } from '@ngrx/store';
import { selectProject } from '../../state/projects/project.actions';
import { AppState } from '../../state/app.state';
import { fetchAllTypes } from '../../state/types/type.actions';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() projects: IProject[] = [];
  isOpen = false;
  trackById = this.utilsService.trackById;
  constructor(
    private utilsService: UtilsService,
    private store: Store<AppState>
  ) {}
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.store.dispatch(fetchAllTypes({ projectId: '1' }));
  }

  selectProject(project: IProject) {
    this.store.dispatch(selectProject(project));
  }
}
