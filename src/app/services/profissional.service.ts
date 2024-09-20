import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profissional {
  id?: number;
  name: string;
  specialty: string;
  crm: string;
  phone: string;
  status: string;
  email?: string; 
  hiringDate?: string; 
  startTime?: string; 
  endTime?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  private apiUrl = 'http://localhost:3000/api/profissionais';

  constructor(private http: HttpClient) { }

  getProfissionais(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.apiUrl);
  }

  getProfissionalById(id: number): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.apiUrl}/${id}`);
  }
  
  createProfissional(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.apiUrl, profissional);
  }

  updateProfissional(id: number, profissional: Profissional): Observable<Profissional> {
    return this.http.put<Profissional>(`${this.apiUrl}/${id}`, profissional);
  }

  deleteProfissional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}