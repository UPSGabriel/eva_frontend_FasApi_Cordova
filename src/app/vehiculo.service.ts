import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'http://localhost:8000/api/vehiculos';

  constructor(private http: HttpClient) { }

  registrar(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  obtenerTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
