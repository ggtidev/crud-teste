import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private apiUrl = 'http://localhost:8080/backend/api/db.php'; // URL base da API

  constructor(private http: HttpClient) {}

  getProfissionais(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get.php`);
  }

  cadastrarProfissional(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/post.php`, data);
  }

  atualizarProfissional(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/put.php/${id}`, data);
  }

  deletarProfissional(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete.php/${id}`);
  }
}