import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { logIn } from '../../state/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email = '';
  password = '';
  constructor(private store: Store, private router: Router) {}
  login() {
    console.log(this.email, this.password);
    this.store.dispatch(
      logIn({
        loginCredentials: { email: this.email, password: this.password },
      })
    );
    //for testing purposes
    this.router.navigate(['/']);
  }
}
