// in the main.ts file
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './app/pages/main-page/main-page.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ProjectsEffects } from './app/state/projects/projects.effects';
import { projectReducer } from './app/state/projects/project.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: MainPageComponent },
      { path: '**', redirectTo: '' },
    ]),
    importProvidersFrom([BrowserAnimationsModule]),
    provideStore({ projects: projectReducer }),
    provideHttpClient(),
    provideEffects(),
    provideEffects(ProjectsEffects),
  ],
});
