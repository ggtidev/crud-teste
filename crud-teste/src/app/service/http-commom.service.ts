import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
 providedIn: 'root'
})
export class HttpCommom {
    protected readonly apiPath: string = "http://localhost";
    constructor(
        public http:HttpClient
    ){}

    public get<T>(url: string, headers?: HttpHeaders): Observable<T> {
        return this.http.get<T>(`${this.apiPath}${url}`, { headers });
    }

    public post<T>(url: string, data: any, headers?: HttpHeaders): Observable<T> {
        return this.http.post<T>(`${this.apiPath}${url}`, data, { headers });
    }

    public put<T>(url: string, data: any, headers?: HttpHeaders): Observable<T> {
        return this.http.put<T>(`${this.apiPath}${url}`, data, { headers });
    }

    public delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
        return this.http.delete<T>(`${this.apiPath}${url}`, { headers });
    }
}