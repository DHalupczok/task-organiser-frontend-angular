import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  trackById<T extends { id: string }>(_: number, item: T): string {
    return item.id;
  }
}
