import { Routes } from '@angular/router';
import { CrudListComponent } from './pages/crud-list/crud-list.component';
import { CrudFormComponent } from './pages/crud-form/crud-form.component';
import { CrudFormViewComponent } from './pages/crud-form-view/crud-form-view.component';

export const routes: Routes = [
    { path: 'crud-list', component: CrudListComponent },
    { path: 'crud-form', component: CrudFormComponent },
    { path: 'crud-form/view/:id', component: CrudFormViewComponent },

    { path: 'crud-form/edit/:id', component: CrudFormComponent, data: { type: 'edit' }},
    { path: '', redirectTo: '/crud-list', pathMatch: 'full' }
];
