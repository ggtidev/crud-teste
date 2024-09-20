import { Routes } from '@angular/router';
import { CrudListComponent } from './pages/crud-list/crud-list.component';
import { CrudFormComponent } from './pages/crud-form/crud-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'crud-list', component: CrudListComponent },
  { path: 'crud-form', component: CrudFormComponent },
  { path: 'crud-form/:id', component: CrudFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
