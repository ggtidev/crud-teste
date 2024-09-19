import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professional } from '../Professional';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  //conectar à lista de profissionais cadastrados
  private apiUrl = 'http://localhost:3000/api/profissionais';

  constructor(private http: HttpClient ) { }

  //observable funciona como funçao async
  getProfessionals() : Observable<Professional[]>{
    return this.http.get<Professional[]>(this.apiUrl);
  }

  getProfessionalDetails(id: string): Observable<Professional> {
    return this.http.get<Professional>(`${this.apiUrl}/${id}`);
  }
  
  //void pq nao retorna o objeto dps q é deletado
  deleteProfessional(id: string): Observable<void> {
    //console.log('requisição de exclusão para:', id);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  };

  createProfessional(professional: Professional): Observable<Professional> {
    return this.http.post<Professional>(this.apiUrl, professional);
  }

}
