import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { DoctorModel } from "../models/DoctorModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DoctorService{
    
    constructor(
        private http: HttpClient
    ){}

    urlApi = 'http://localhost:8080/doctor'

    createDoctor(doctor: DoctorModel):Observable<DoctorModel>{
        return this.http.post<DoctorModel>(this.urlApi + '/create', doctor)
    }

    getAllDoctors():Observable<DoctorModel[]>{
        return this.http.get<DoctorModel[]>(this.urlApi + '/all')
    }

    getDoctorByName(name: string):Observable<DoctorModel>{
        return this.http.get<DoctorModel>(this.urlApi + '?name=' + name)
    }

    getDoctorById(id: number):Observable<DoctorModel>{
        return this.http.get<DoctorModel>(this.urlApi + '/' + id)
    }

    updateDoctor(doctor: DoctorModel): Observable<DoctorModel> {
        return this.http.put<DoctorModel>(this.urlApi + '/update', doctor);
    }

    deleteDoctor(id: number){
        return this.http.delete(this.urlApi + '/' + id)
    }
}