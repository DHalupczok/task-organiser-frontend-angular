import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectLogoutTimerStartDate } from '../../state/auth/auth.selectors';
import { AppState } from '../../state/app.state';
import { map, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-logout-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout-timer.component.html',
  styleUrls: ['./logout-timer.component.scss'],
})
export class LogoutTimerComponent {
  timerValue$ = this.store
    .select(selectLogoutTimerStartDate)
    .pipe(switchMap(startDate => timer(startDate, 1000)));
  constructor(private store: Store<AppState>) {}
}
