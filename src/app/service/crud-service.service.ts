import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professional } from '../../entity/Professionals'; 

@Injectable({
  providedIn: 'root',
})
export class CrudServiceService {
  private apiUrl = 'http://localhost:4000/api/profissionais';

  constructor(private http: HttpClient) {}

  getProfessionals(): Observable<Professional[]> {
    return this.http.get<Professional[]>(this.apiUrl);
  }

  getProfessionalById(id: number): Observable<Professional> {
    return this.http.get<Professional>(`${this.apiUrl}/${id}`);
  }

  addProfessional(professional: Professional): Observable<Professional> {
    return this.http.post<Professional>(this.apiUrl, professional);
  }

  updateProfessional(
    id: number,
    professional: Professional
  ): Observable<Professional> {
    return this.http.put<Professional>(`${this.apiUrl}/${id}`, professional);
  }

  deleteProfessional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  save(professional: Professional): Observable<Professional> {
    return this.http.post<Professional>(
      `${this.apiUrl}/profissionais`,
      professional
    );
  }
}
