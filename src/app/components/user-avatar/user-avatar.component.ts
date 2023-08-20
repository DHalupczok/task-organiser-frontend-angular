import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  signal,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatarComponent {
  @Input() userNameAndSurname: string | null = '';
  _userImageName = signal<string | null>(null);
  @Input() set userImageName(value: string | null) {
    this._userImageName.set(value);
  }
  userImageUrl = computed(
    () => `${environment.apiURL}/images/${this._userImageName()}`
  );
}
