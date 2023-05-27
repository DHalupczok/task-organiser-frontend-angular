// in the main.ts file
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './app/pages/main-page/main-page.component';
import { provideStore } from '@ngrx/store';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
        { path: '', component: MainPageComponent },
        { path: '**', redirectTo: '' },
    ]),
    importProvidersFrom([BrowserAnimationsModule]),
    provideStore()
],
});
