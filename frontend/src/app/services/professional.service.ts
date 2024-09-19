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


}
