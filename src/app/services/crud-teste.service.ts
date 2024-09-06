import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Expertise } from '../models/expertise';

@Injectable({
  providedIn: 'root',
})
export class CrudTesteService {
  constructor(private http: HttpClient) {}

  urlApi = 'http://localhost:8004/api';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi + '/users/show');
  }

  getUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi + `/users/find/${id}`);
  }

  getExpertises(): Observable<Expertise[]> {
    return this.http.get<Expertise[]>(this.urlApi + '/expertises/show');
  }

  getWorkingDays(): Observable<Expertise[]> {
    return this.http.get<Expertise[]>(this.urlApi + '/workingdays/show');
  }

  storeUser(data: any): Observable<Expertise[]> {
    return this.http.post<Expertise[]>(this.urlApi + '/users/store', data);
  }

  updateUser(data: any, id: number): Observable<Expertise[]> {
    return this.http.put<Expertise[]>(
      this.urlApi + `/users/update/${id}`,
      data
    );
  }

  deleteUser(id: number) {
    return this.http.delete(this.urlApi + `/users/delete/${id}`);
  }
}

// [
//   {
//     _id: 1,
//     name: 'Admin',
//     expertise: { _id: 1, name: 'Ginecologista', status: true },
//     crm: '124342',
//     phone: 'dnawidna',
//     status: true,
//     email: 'teste@gmail',
//     hiring_date: new Date(),
//     start_service: '08:00',
//     end_service: '16:00',
//   },
// ];
