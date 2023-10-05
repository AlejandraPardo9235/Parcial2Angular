import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from './cita';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Citas } from './citas';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  apiUrl = environment.API_URL_AGREGAR; // Reemplaza con la URL de tu API


  constructor(private http: HttpClient) { }

  guardarCita(cita: Cita): Observable<any> {
    return this.http.post(this.apiUrl, cita);
  }

  getListarCitas(): Observable<Citas> {
    return this.http.get<Citas>(environment.API_URL_LISTAR)
  }

  editarTarjeta(cita: Cita): Observable<any> {
    return this.http.put<any>(environment.API_URL_EDITAR, cita)
  }

  getTarjetaById(nombre: string): Observable<Citas> {
    return this.http.get<Citas>(environment.API_URL_BUSCAR + nombre)
  }
}
