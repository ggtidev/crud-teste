import { Routes } from '@angular/router';
import { CrudListComponent } from './pages/crud-list/crud-list.component';
import { CrudFormComponent } from './pages/crud-form/crud-form.component';

export const routes: Routes = [
    { path: 'crud-list', component: CrudListComponent },
    { path: 'crud-form', component: CrudFormComponent },
    { path: 'crud-form/:id', component: CrudFormComponent },
    { path: '', redirectTo: '/crud-list', pathMatch: 'full' }
];
