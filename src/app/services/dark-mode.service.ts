import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  toggleDarkMode$: Subject<void> = new Subject();
}
