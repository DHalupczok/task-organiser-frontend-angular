// in the main.ts file
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './app/pages/main-page/main-page.component';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ProjectsEffects } from './app/state/projects/projects.effects';
import { projectReducer } from './app/state/projects/project.reducer';
import { taskReducer } from './app/state/tasks/task.reducer';
import { TaskEffects } from './app/state/tasks/task.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: MainPageComponent },
      { path: '**', redirectTo: '' },
    ]),
    importProvidersFrom([BrowserAnimationsModule]),
    provideStore({ projects: projectReducer, tasks: taskReducer }),
    provideHttpClient(),
    provideEffects(ProjectsEffects, TaskEffects),
  ],
});
