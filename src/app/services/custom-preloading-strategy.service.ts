import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { map, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingStrategyService extends PreloadingStrategy {
  constructor() {
    super();
  }

  private loadRoute(delay: number, fn: () => Observable<any>) {
    if (delay) return timer(delay * 1000).pipe(map(() => fn()));
    return fn();
  }

  override preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preloadTime'] !== undefined)
      return this.loadRoute(route.data['preloadTime'], fn);
    return of(null);
  }
}
