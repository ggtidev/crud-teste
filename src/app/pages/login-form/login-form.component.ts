import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIcon,
    MatCheckboxModule,
    CommonModule,
    HttpClientModule
  ]
})
export class LoginFormComponent {
  loginData = { email: '', password: '', rememberMe: false };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginPayload = {
      email: this.loginData.email,
      password: this.loginData.password
    };

    this.http.post('http://localhost:3000/login', loginPayload).subscribe(
      (response: any) => {
        console.log('Login successful', response);

        this.router.navigate(['/crud-list']);
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed', error);
      }
    );
  }
}
