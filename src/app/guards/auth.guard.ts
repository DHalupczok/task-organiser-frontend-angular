import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRefreshTokenExpirationDate } from '../state/auth/auth.selectors';
import { map, Observable } from 'rxjs';
import { authGuardLogOut } from '../state/auth/auth.actions';

export const isLoggedIn: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const store = inject(Store);
  const router = inject(Router);
  return store.select(selectRefreshTokenExpirationDate).pipe(
    map(refreshTokenExpirationDate => {
      if (refreshTokenExpirationDate >= new Date()) {
        return true;
      } else {
        store.dispatch(authGuardLogOut());
        return router.createUrlTree(['login']);
      }
    })
  );
};
