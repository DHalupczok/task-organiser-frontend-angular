import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IProject } from '../../interface';
import { UtilsService } from '../../services/utils/utils.service';

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
  constructor(private utilsService: UtilsService) {}
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
