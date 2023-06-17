// in the main.ts file
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './app/pages/main-page/main-page.component';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ProjectEffects } from './app/state/projects/project.effects';
import { projectReducer } from './app/state/projects/project.reducer';
import { taskReducer } from './app/state/tasks/task.reducer';
import { TaskEffects } from './app/state/tasks/task.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { typeReducer } from './app/state/types/type.reducer';
import * as typeEffects from './app/state/types/type.effects';
import { userReducer } from './app/state/users/user.reducer';
import * as userEffects from './app/state/users/user.effects';
import { LoginPageComponent } from './app/pages/login-page/login-page.component';
import { LogoutPageComponent } from './app/pages/logout-page/logout-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: MainPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'logout', component: LogoutPageComponent },
      { path: '**', redirectTo: '' },
    ]),
    importProvidersFrom([BrowserAnimationsModule]),
    provideStore({
      projects: projectReducer,
      tasks: taskReducer,
      types: typeReducer,
      users: userReducer,
    }),
    provideHttpClient(),
    provideEffects(ProjectEffects, TaskEffects, typeEffects, userEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
});
