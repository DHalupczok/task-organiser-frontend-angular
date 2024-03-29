import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectLogoutTimerStartDate } from '../../state/auth/auth.selectors';
import { AppState } from '../../state/app.state';
import {
  iif,
  map,
  of,
  Subject,
  Subscription,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import {
  logOutFromLogoutTimer,
  refreshTokenFromLogoutTimer,
} from '../../state/auth/auth.actions';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logout-timer',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './logout-timer.component.html',
  styleUrls: [
    './logout-timer.component.scss',
    './_logout-timer-theme.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutTimerComponent implements OnInit, OnDestroy {
  timerVisibility$ = new Subject<boolean>();
  timer$ = this.store.select(selectLogoutTimerStartDate).pipe(
    tap(() => this.timerVisibility$.next(false)),
    switchMap(startDate => timer(startDate, 1000)),
    switchMap(timerValue =>
      iif(
        () => timerValue === 1,
        of(timerValue).pipe(tap(() => this.timerVisibility$.next(true))),
        of(timerValue)
      )
    )
  );
  timerValue$ = this.timer$.pipe(
    map(secondsFromStartOfCountDown => 300 - secondsFromStartOfCountDown),
    map(totalSecondsToTheEndOfCountDown => {
      const addZero = (quantity: number) =>
        quantity < 9 ? `0${quantity}` : quantity;
      const secondsToTheEndOfCountdown = totalSecondsToTheEndOfCountDown % 60;
      const minutesToTheEndOfCountDown =
        (totalSecondsToTheEndOfCountDown - secondsToTheEndOfCountdown) / 60;
      if (!+secondsToTheEndOfCountdown && !+minutesToTheEndOfCountDown)
        this.store.dispatch(logOutFromLogoutTimer());
      return `${addZero(minutesToTheEndOfCountDown)}:${addZero(
        secondsToTheEndOfCountdown
      )}`;
    })
  );
  timerValue = '';
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.timerValue$.subscribe(timerValue => (this.timerValue = timerValue))
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  constructor(private store: Store<AppState>) {}

  extendSession() {
    this.store.dispatch(refreshTokenFromLogoutTimer());
  }

  logout() {
    this.store.dispatch(logOutFromLogoutTimer());
  }
}
